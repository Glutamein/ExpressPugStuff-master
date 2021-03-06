var express = require('express');
var app = express();
app.use(express.static(__dirname + '/public'));


var router = require('./src/routes/routes');
app.use("/", router);

app.use(express.static(__dirname + "/public"));

app.set('views', './src/views');
app.set('view engine', 'pug');

app.listen(3001, function(){
    console.log("Express Listening on Port: 3001");
});
