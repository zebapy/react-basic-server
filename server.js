import express from 'express';

const app = express();
const port = 3000;

app.use(express.static('./static'));

const html = `
<html>
  <head>
    <title>React Basic Server</title>
  </head>
  <body>
    <div id="root"></div>
    <script src="/dist/main.js"></script>
  </body>
</html>
`;

app.get('/', function(req, res) {
  res.send(html);
});

app.listen(port, function(err) {

  if(err) {
    return console.log(err);
  }

  console.log(`app listening on http://localhost:${port}`);

});
