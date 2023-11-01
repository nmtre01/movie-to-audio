
var fs = require('fs'),
    http = require('http'),
    path = require('path'),
    https = require('https'),
    express = require('express'),
    querystring = require('querystring'),
    port = 8000

var options = {
   key: fs.readFileSync('website/SSL/key.pem'),
   cert: fs.readFileSync('website/SSL/cert.pem'),
};

// Static Files for Homepage
var app = express();
app.use(express.static('website'));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../html/index.html'))
});

var server = https.createServer(options, app).listen(port, function () {
  console.log("Express server listening on port " + port);
});