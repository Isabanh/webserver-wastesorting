/**
 * Created by IsabellaBanh on 05/11/2019.
 */

var express = require('express')
var app = express()
const port = 3000
const path = require('path');

app.set("view options", {layout: false});
app.use(express.static(__dirname + '/'));

app.get('/index',function(req,res) {
    res.sendFile(__dirname + '/index.html');
});

/*
app.use(express.static(path.join(__dirname, '/')));
app.use((req, res /!* , next *!/) => {
    res.redirect('/');
});*/

app.listen(port, () => console.log(`Example app listening on port ${port}!`))






