"use client"

import FileEditor from "./FileEditor"
import FileRenderer from "./FileRenderer"
import "../component-styles/Documentor.scss"
import { useState, useEffect } from "react"

const Documentor = () => {

    const [currentDocumentText, setRenderedText] = useState({
        renderedText: "# Hello, world!\n\n- Start typing Markdown to render it here!"
    });

    const collectMarkdownText = (event: any) => {
        const collectedText = event.currentTarget.value;
        setRenderedText({ renderedText: collectedText });
    }

    return (
        <div className="documentor">
            <FileEditor currentText={currentDocumentText} textToRender={collectMarkdownText} />
            <FileRenderer documentText={currentDocumentText.renderedText} /> 
        </div>
    )
}

export default Documentor;