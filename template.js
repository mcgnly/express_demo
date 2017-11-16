
module.exports= ({ body, state }) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
      <link rel="stylesheet" type="text/css" href="index.css">
      </head>
      
      <body>
        <script>console.log('Im on the client now')</script>
        <script>window.__initial_state__ = ${state}</script>
        <div id="root">${body}</div>
        <script src="bundle.js"></script>
      </body>
    </html>
  `;
};