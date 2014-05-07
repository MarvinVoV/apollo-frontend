package dirty

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
def sourceTable="tpxw"
def catalogId=12008

String querySourceSql="select bt,xxnr,xxtgbm,xxtgr,rq from $sourceTable"

def readContent={ClobImpl clob->
    def buffer=new StringBuffer();
    clob.getCharacterStream().withReader {reader->
        buffer.append(reader.readLine())
    }
    buffer.toString().equals("null")?"":buffer.toString()
}

sourceSql.eachRow(querySourceSql){
    def content=readContent(it.xxnr as ClobImpl)
    def rq=it.rq?.toString()?.substring(0,19)
    def author=it.xxtgr
    def source=it.xxtgbm
    def title=it.bt

    String addJcmsInfoSQL="insert into jcms_info(i_cataid,vc_title,vc_content,c_deploytime,vc_author,vc_source,vc_editor," +
            "c_createdate,c_validbegin,c_validend,i_webid,b_published,c_releasetime) values($catalogId,'$title','${content}'," +
            "'$rq','$author','$source',系统管理员','$rq','0000-00-00','0000-00-00',$webId,0,'$rq')"

    targetSql.withTransaction{
        targetSql.executeInsert(addJcmsInfoSQL)
    }




}








