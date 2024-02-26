interface IHtmlBuildar {
    content: string;
    imagePath: string;

}

export const buildHtml = ({ content, imagePath }: IHtmlBuildar) => {
    return `<!DOCTYPE html>
    <html>
      <head>
        <title>${content}</title>
        <meta property="og:title" content="Thirdweb Frames" />
        <meta
          property="og:image"
          content="${imagePath}"
        />
        <meta property="fc:frame" content="vNext" />
        <meta
          property="fc:frame:image"
          content="${imagePath}"
        />
        <meta property="fc:frame:button:1" content="${content}" />
      </head>
      <body>
        <p>${content}</p>
      </body>
    </html>`;
}
