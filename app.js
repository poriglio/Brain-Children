// REQUIRE

var bodyParser = require("body-parser")
var express = requrie("express")

// CREATE EXPRESS APP OBJECT

var app = express()

// CONFIGURE
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({entended:true}))
app.use(express.static(__dirname + "/public"))

// ROUTES

app.get("/",function(request,response)){
	response.sendFile('/html/index.html',{root:"./public"})
}

// SET UP SERVER TO LISTEN

var port = 80

app.listen(port,function(){
	console.log("Server running on port " + port)
})