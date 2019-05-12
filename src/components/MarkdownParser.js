import React from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';
import marked from 'marked';
import '../theme/App.css';



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

