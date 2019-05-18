import React from 'react';
import hljs from 'highlight.js/lib/highlight';
import 'highlight.js/styles/github.css';
import marked from 'marked';
import '../theme/App.css';


['javascript', 'python', 'java', 'kotlin', 'sql',
    'cpp', 'swift', 'less', 'css', 'bash', 'nginx',
    'markdown', 'xml', 'php', 'yaml', 'json', 'dockerfile', 'shell'].forEach((langName) => {
    // Using require() here because import() support hasn't landed in Webpack yet
    const langModule = require(`highlight.js/lib/languages/${langName}`);
    hljs.registerLanguage(langName, langModule);
});


class MarkdownParser extends React.Component {
    constructor(props) {
        super(props);
        marked.setOptions({
            renderer: new marked.Renderer(),
            highlight: function (code) {
                return hljs.highlightAuto(code).value;
            },
            pedantic: false,
            gfm: true,
            tables: true,
            breaks: true,
            sanitize: false,
            smartLists: true,
            smartypants: false,
            xhtml: false
        });
    }

    getMarkdownText() {
        let rawText = marked(this.props.data);
        return {__html: rawText};
    }

    render() {
        return <div dangerouslySetInnerHTML={this.getMarkdownText()}/>
    }
}

export default MarkdownParser;

