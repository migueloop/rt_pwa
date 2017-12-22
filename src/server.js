import express from "express";
import path from "path";
import mds from "markdown-serve";
import _ from "lodash";
import http from "http";
import serverMiddleware from "pawjs/src/server/middleware";
import Config from "./config";
import * as appReducers from "./app/reducers";

const app = express();
/**
 * --- Your custom code START ---
 */ 


app.set('view', path.join(__dirname, 'server/templates/'));
app.set('view engine', 'jade');
 

app.use(mds.middleware({ 
  rootDirectory: path.resolve(__dirname, 'server/rels/'),
  view: 'markdown'
}));
 
app.use((req, res, next) => {
  res.locals.reduxInitialState = {
    counter: {
      count: 5
    }
  };
  res.locals.reduxReducers = appReducers;
  next();
});

/**
 * --- Your custom code END ---
 */
// Add the core server as middleware
app.use(serverMiddleware);
 
const server = http.createServer(app);
const serverPort = process.env.PORT || _.get(Config, "server.port", 3000);

server.listen(serverPort, "0.0.0.0", function(err) {
  if (err) throw err; 
  const addr = server.address();
 
  // eslint-disable-next-line
  console.log("Listening at http://%s:%d", addr.address, addr.port);
}); 

export default app;
