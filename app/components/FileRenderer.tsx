"use client"

import { marked } from "marked";
import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import "../component-styles/Renderer.scss";
import 'github-markdown-css/github-markdown.css';
import { docTemplate } from "../helpers";
import { useState } from "react";


const FileRenderer = (props: any) => {
    const html = marked(props.documentText);
    const [exportingFile, setPopUpDisplayState] = useState(false);
    const [exportFileName, setExportFileName] = useState("");

    const exportDocuments = async () => {
        const zip = new JSZip();
        const markdownContent = props.documentText;
        const htmlContent = html;
        const htmlDocument = docTemplate(htmlContent, exportFileName);

        zip.file(`${exportFileName}.md`, markdownContent);
        zip.file(`${exportFileName}.html`, htmlDocument);

        // Generate the zip file
        const blob = await zip.generateAsync({ type: "blob" });

        // Save the zip file
        saveAs(blob, `Documaker - ${exportFileName}.zip`);
        setPopUpDisplayState(false);
        setExportFileName("");
    }

    const beginExport = () => {
        setPopUpDisplayState(true);
    }

    const collectExportFileName = (event: any) => {
        setExportFileName(event.currentTarget.value);
    }

    const cancelExport = () => {
        setPopUpDisplayState(false);
        setExportFileName("");
    }

    return (
        <>
            <div className="renderer">
                <section className="renderer__title">
                    <h3 className="renderer__title__text">Rendered File</h3>
                    <button className="renderer__title__exportButton" onClick={beginExport}><>&#128190;</>Export</button>
                </section>
                <div className="markdown-body" id="renderedText" dangerouslySetInnerHTML={{ __html: html }} />
            </div>
            <div className={exportingFile ? `export-file-name` : `hidden`}>
                <h2>Export File Name:</h2>
                <input type="text" name="exportFileNameInput" id="exportFileNameInput" onChange={collectExportFileName} value={exportFileName} />
                <div className="buttonControls">
                    <button onClick={cancelExport} className="buttonControls__button cancel">Cancel</button>
                    <button onClick={exportDocuments} className="buttonControls__button export">Export</button>
                </div>
            </div>
        </>
    )
}

export default FileRenderer;