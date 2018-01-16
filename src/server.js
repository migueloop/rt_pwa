import express from "express";
import path from "path";
import _ from "lodash";
import fs from "fs"
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

app.get("/test", (req,res,next) => {
  console.log("entra")
  return 'ok'
});

app.get("/api/story/:id", (req,res,next) => {
  var marked = require('marked');
  marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: false,
    smartLists: true,
    smartypants: false
  });

  var filePath = path.join(__dirname, 'server/rels/');
  fs.readFile(filePath + req.params.id + '.md', {encoding: 'utf-8'}, function(err,data){
    if (!err) {
        res.json({html_content : marked(data)});
    } else {
        console.log(err);
    }
  });
});


app.get("/api/story", (req,res,next) => {
  var marked = require('marked');
  marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: false,
    smartLists: true,
    smartypants: false
  });

  var filePath = path.join(__dirname, 'server/rels/');
  
  fs.readdir(filePath, (err, files) => {
    let json_res = []
    files.forEach(file => {
      json_res.push(  { 'title': file.slice(0, -3) } )
    });
    res.json({'stories': json_res})
  })
});



 
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
