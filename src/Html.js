import React from 'react';
import { renderToString } from 'react-dom/server';

function Html({ component }) {
  return (
    <html>
      <head>
        <title>React Basic Server</title>
      </head>
      <body>
        <div id="root" dangerouslySetInnerHTML={{
          __html: component ? renderToString(component) : ''
        }} />
        <script src="/dist/main.js" />
      </body>
    </html>
  );
}

export default Html;
