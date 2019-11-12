firebase.initializeApp({
    apiKey: "AIzaSyCXQLeP2QSq59nohdzQV59blzZ0GE2DMjA",
    authDomain: "waste-sorting-e9400.firebaseapp.com",
    databaseURL: "https://waste-sorting-e9400.firebaseio.com",
    projectId: "waste-sorting-e9400",
    storageBucket: "waste-sorting-e9400.appspot.com",
    messagingSenderId: "177783163081",
    appId: "1:177783163081:web:803bff4aaa01805950a518",
    measurementId: "G-2N9PDFXRFZ"
});
var db = firebase.firestore();
// Create a reference with an initial file path and name
var storage = firebase.storage();
var storageRef = storage.ref();
var gsReference = storage.refFromURL('gs://waste-sorting-e9400.appspot.com/');



var listOfTrashImages = [];
function downloadImages() {
    storageRef.listAll().then(function (res) {
        res.items.forEach(function (itemRef) {
            itemRef.getDownloadURL().then(function (url) {
                listOfTrashImages.push(url);
            })
        });
    })
}

var bin = db.collection("Bin");
var listOfTrashData = [];
bin.get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            listOfTrashData.push(doc.data())
        });
    })
    .then(function() {
        downloadImages();
    })
    .then(function() {
        //tableCreate();
    })
    .then(function () {
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });

function tableCreate(){
    var body = document.body,
        tbl  = document.createElement('table');
    tbl.style.width  = '100px';
    tbl.style.border = '1px solid black';

    for(var i = 0; i < listOfTrashData.length; i++){
        var tr = tbl.insertRow();
        for(var j = 0; j < 3; j++) {
            var td = tr.insertCell();
            if (j==0) {
                if (i==0) {
                    td.appendChild(document.createTextNode("Location:"))
                } else {
                    td.appendChild(document.createTextNode(listOfTrashData[i].location));
                }
            }
            if (j==1) {
                if (i==0) {
                    td.appendChild(document.createTextNode("Time:"))
                } else {
                    td.appendChild(document.createTextNode(listOfTrashData[i].timestamp));
                }
            }
            if (j==2) {
                if (i==0) {
                    td.appendChild(document.createTextNode("Picture:"))
                }
                else {
                    console.log(listOfTrashImages);
                    console.log(listOfTrashImages[0]);
                    var img = document.createElement('img');
                    td.appendChild(img);
                    img.setAttribute('src', listOfTrashImages[i]);
                }
            }
            td.style.border = '1px solid black';
        }
    }
    body.appendChild(tbl);
}
