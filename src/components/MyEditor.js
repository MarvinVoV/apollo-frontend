import React from 'react';
import {Editor, EditorState, RichUtils} from 'draft-js';


class MyEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {editorState: EditorState.createEmpty()};
        this.onChange = (editorState) => this.setState({editorState});
        this.setEditor = (editor) => {
            this.editor = editor;
        };
        this.focusEditor = () => {
            if (this.editor) {
                this.editor.focus();
            }
        };
    }

    componentDidMount() {
        this.focusEditor();
    }

    handleKeyCommand = (command) => {
        const newState = RichUtils.handleKeyCommand(this.state.editorState, command)
        if (newState) {
            this.onChange(newState);
            return 'handled';
        }
        return 'not-handled';
    };

    render() {
        return (
            <div style={styles.editor} onClick={this.focusEditor}>
                <Editor
                    ref={this.setEditor}
                    editorState={this.state.editorState}
                    handleKeyCommand={this.handleKeyCommand}
                    onChange={this.onChange}
                />
            </div>
        );
    }
}

const styles = {
    editor: {
        border: '1px solid gray',
        minHeight: '6em'
    }
};


export default MyEditor;