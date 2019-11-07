//$(document).ready(function() {
var serviceAccount = require("./waste-sorting-e9400-252b22c7607d.json");
var admin = require("firebase-admin");


console.log("HEY")




//window.onload = function () {



    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        databaseURL: "https://waste-sorting-e9400.firebaseio.com"
    });

// As an admin, the app has access to read and write all data, regardless of Security Rules
    var db = admin.firestore();
    var ref = db.collection('Bin');
    ref.get()
        .then((snapshot) => {
            snapshot.forEach((doc) => {
                console.log(doc.id, '=>', doc.data());
            });
        })
        .catch((err) => {
            console.log('Error getting documents', err);
        });

//});