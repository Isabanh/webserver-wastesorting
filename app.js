/**
 * Created by IsabellaBanh on 05/11/2019.
 */

var express = require('express')
var app = express()
const port = 3000
const path = require('path');

app.set("view options", {layout: false});
app.use(express.static('public'));

// app.get('/',function(req,res) {
//     res.sendFile(__dirname+'/index/' + '/index.html');
// });
//
// app.get('/validate',function(req,res) {
//     res.sendFile(__dirname + '/validate.html');
// });

app.listen(port, () => console.log(`Example app listening on port ${port}!`));






