// REQUIRE

var bodyParser = require("body-parser");
var express = require("express");

// CREATE EXPRESS APP OBJECT

var app = express();

// CONFIGURE
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + "/public"));

// ROUTES

app.get('/', function(request, response){
  response.sendFile('/html/index.html', {root : './public'})
});
// SET UP SERVER TO LISTEN

var port = 3000
app.listen(port, function(){
  console.log('Server running on port ' + port);

});