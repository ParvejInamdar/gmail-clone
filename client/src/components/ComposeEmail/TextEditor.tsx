import React, { Component } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './texteditor.css';

class TextEditor extends Component {
  state = {
    editorState: EditorState.createEmpty(),
  }

  onEditorStateChange: Function = (editorState) => {
    this.setState({
      editorState,
    });
  };

  render() {
    const { editorState } = this.state;
    return (
    //   <div className='h-[60%]'>
        <Editor
          editorState={editorState}
          wrapperClassName=" bg-red-500 h-full"
          editorClassName="overflow-auto bg-green-500 "
          onEditorStateChange={this.onEditorStateChange}
        />
    // </div>
    );
  }
}

export default TextEditor;