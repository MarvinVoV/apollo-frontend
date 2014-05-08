package dirty

import groovy.sql.GroovyRowResult
import groovy.sql.Sql
import net.sourceforge.jtds.jdbc.ClobImpl

/**
 * Created by sunyameng on 2014/5/7.
 */
Sql sourceSql=null,targetSql=null
try{
    sourceSql=Sql.newInstance("jdbc:jtds:sqlserver://localhost:1433/ww_ay","sa","topnet123",
            "net.sourceforge.jtds.jdbc.Driver")
    println sourceSql.connection.catalog

    targetSql=Sql.newInstance("jdbc:mysql://192.168.3.18:3306/topsites_haiciweb?characterEncoding=utf8","root",
            "topicisdb2","com.mysql.jdbc.Driver")
    println targetSql.connection.catalog
}catch (Exception ex){
    ex.printStackTrace();
}
if(!sourceSql||!targetSql){
    System.err.println("连接失败")
    return
}

def webId=9
def catalogId=12008
def sourceTable="tpxw"

GroovyRowResult cataResult=targetSql.firstRow("select * from jcms_cataloginfo where i_id=$catalogId")
def catalogName=cataResult.getProperty("vc_cataname")
def url=cataResult.getProperty("vc_url")
def dir=cataResult.getProperty("vc_dir")
GroovyRowResult webResult=targetSql.firstRow("select * from jcms_webinfomation where i_id=$webId")
def webName=webResult.getProperty("vc_webname")
def domain=webResult.getProperty("vc_domain")


String querySourceSql="select bt,xxnr,xxtgbm,xxtgr,rq from $sourceTable"

def readContent={ClobImpl clob->
    def buffer=new StringBuffer();
    clob.getCharacterStream().withReader {reader->
        buffer.append(reader.readLine())
    }
    buffer.toString().equals("null")?"":buffer.toString()
}

def processContent={content,String rq,author,source,title,jcmsInfoMaxId->
    String[] rqArr=rq.split("-")
    String dPath=rqArr[0]+"/"+rqArr[1]+"/"+rqArr[2].substring(0,2);
    String fileName="info_${jcmsInfoMaxId}.xml"
    String path="d:/xml/$dPath"
    StringBuffer contents=new StringBuffer();
    contents.append("<?xml version=\"1.0\" encoding=\"UTF-8\"?><documentroot>\r\n");
    contents.append("<![CDATA[<title>"+title+"</title>]]>\r\n"+
            "<![CDATA[<sectitle>"+title+"</sectitle>]]>\r\n"+
            "<![CDATA[<thdtitle>"+title+"</thdtitle>]]>\r\n"+
            "<![CDATA[<linktitle></linktitle>]]>\r\n"+
            "<![CDATA[<author></author>]]>\r\n"+
            "<![CDATA[<source>"+source+"</source>]]>\r\n"+
            "<![CDATA[<editor>"+author+"</editor>]]>\r\n"+
            "<![CDATA[<keyword></keyword>]]>\r\n"+
            "<![CDATA[<describe></describe>]]>\r\n"+
            "<![CDATA[<content>"+content+"</content>]]>\r\n"+
            "<![CDATA[<createdate>"+rq+"</createdate>]]>\r\n"+
            "<![CDATA[<deploytime>"+rq+"</deploytime>]]>\r\n");
    contents.append("</documentroot>");

    File f1=new File(path);
    if(!f1.exists()){f1.mkdirs();}
    File f2=new File(f1,fileName);
    f2.withWriter("utf-8"){writer->
        writer.write(contents.toString())
    }
    "${dPath}/${fileName}"
}
sourceSql.eachRow(querySourceSql){
    String content=readContent(it.xxnr as ClobImpl)
    String rq=it.rq?.toString()?.substring(0,19)
    String author=it.xxtgr
    String source=it.xxtgbm
    String title=it.bt

    def jcmsInfoMaxId=targetSql.firstRow("select max(i_id) from jcms_info ").getAt(0)+1;

    content=processContent(content,rq,author,source,title,jcmsInfoMaxId)


    String addJcmsInfoSQL="insert into jcms_info(i_cataid,vc_title,vc_content,c_deploytime,vc_author,vc_source,vc_editor," +
            "c_createdate,c_validbegin,c_validend,i_webid,b_published,c_releasetime) values($catalogId,'$title','${content}'," +
            "'$rq','$author','$source','系统管理员','$rq','0000-00-00','0000-00-00',$webId,0,'$rq')"
    String addSearchInfoSQL="insert into jcms_web${webId}_searchinfo(i_cataid,vc_cataname,i_artid,vc_tablename,vc_title,b_publish," +
            "vc_author,vc_source,i_webid,vc_webname,vc_domain,c_createdate,c_date,vc_url,vc_dir,vc_content) values($catalogId,'$catalogName'," +
            "$jcmsInfoMaxId,'jcms_info','$title',0,'$author','$source',$webId,'$webName','$domain','$rq','${rq.substring(0,6)}','$url','$dir','$content')"

    targetSql.withTransaction{
        targetSql.executeInsert(addJcmsInfoSQL)
        targetSql.executeInsert(addSearchInfoSQL)
    }
}
println "导入完成"








