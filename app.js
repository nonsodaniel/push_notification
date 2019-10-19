var express = require('express');
var app = express();

var cors = require('cors')
var app = express()

app.use(cors())

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/" + "index.html");
})

var server = app.listen(8000, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("App listening at http://%s:%s", host, port)
})
