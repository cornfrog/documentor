"use client"

import "../component-styles/Editor.scss";

const FileEditor = ( props: any) => {
    return (
        <div className="editor">
            <h3 className="editor__title">Editor</h3>
            <textarea name="fileEditor" 
                id="fileEditor" 
                onChange={props.textToRender}
                value={props.currentText.renderedText}
            ></textarea>
        </div>
    )
}

export default FileEditor;