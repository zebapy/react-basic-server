import express from 'express';
import React from 'react';
import { match, RouterContext } from 'react-router';
import { renderToString } from 'react-dom/server';
import Html from './Html';
import routes from './routes';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('./static'));

app.use(function(req, res) {

  function hydrateOnClient() {
    res.send('<!doctype html>\n' + renderToString(<Html />));
  }

  match({ routes, location: req.originalUrl }, (error, redirectLocation, renderProps) => {

    if (redirectLocation) {

      res.redirect(redirectLocation.pathname + redirectLocation.search);

    } else if (error) {

      console.error('ROUTER ERROR:', error);
      hydrateOnClient();

    } else if (!renderProps) {

      hydrateOnClient();

    } else {

      const component = (
        <RouterContext {...renderProps} />
      );

      res.send('<!doctype html>\n' +
        renderToString(<Html component={component} />)
      );

    }
  });

});

app.listen(port, function(err) {

  if(err) {
    return console.log(err);
  }

  console.log(`app listening on http://localhost:${port}`);

});
