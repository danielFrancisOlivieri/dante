
var http = require('http');
var fs = require('fs');
var express = require('express');

var icheck = require('icheck');
//var Promin-master = require('Promin-master');


const PORT=8080;



fs.readFile('./index.html', function (err, html) {

    if (err) throw err;

    http.createServer(function(request, response) {
        response.writeHeader(200, {"Content-Type": "text/html"});
        response.write(html);
        response.end();
    }).listen(PORT);
});


/*
var express = require('express');
var app = express();

// set port
var port = process.env.PORT || 8080

app.use(express.static(__dirname + "/public"));

// routes

app.get("/", function(req, res, next){
res.render("index");
//next();
})

app.listen(port, function(){
  console.log("this app running---meepmeep");
})


*/
