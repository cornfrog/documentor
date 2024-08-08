"use client"

import { marked } from "marked";
import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import "../component-styles/Renderer.scss";


const FileRenderer = (props: any) => {
    const html = marked(props.documentText);

    const exportDocuments = async () => {
        const zip = new JSZip();
        const markdownContent = props.documentText;
        const htmlContent = html;

        zip.file("MarkdownFile.md", markdownContent);
        zip.file("RenderedFile.html", htmlContent);

        // Generate the zip file
        const blob = await zip.generateAsync({ type: "blob" });

        // Save the zip file
        saveAs(blob, "Documents.zip");
    }

    return (
        <div className="renderer">
            <section className="renderer__title">
                <h3 className="renderer__title__text">Rendered File</h3>
                <button className="renderer__title__exportButton" onClick={exportDocuments}>Export</button>
            </section>
            <div id="renderedText" dangerouslySetInnerHTML={{ __html: html }} />
        </div>
    )
}

export default FileRenderer;