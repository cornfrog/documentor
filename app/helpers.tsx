export const docTemplate = (htmlContent:string | Promise<string>, documentTitle: string): string => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/5.6.1/github-markdown.css">
        <title>${documentTitle}</title>
    </head>
    <style>
        .markdown-body {
            padding: 1rem;
            max-width: 800px;
            margin: auto;
        }
    </style>
    <body class="markdown-body">
        <div>
            ${htmlContent}
        </div>
    </body>
    </html>
    `
}