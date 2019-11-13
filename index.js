

var listOfTrashImages = [];
var mapOfTrashImages = new Map();
var typesOfTrash = ["cardboard","paper","plastic","metal","glass","trash"];

//Downloading images from Firebase and saving them in listOfTrashImages
function downloadImages() {
    storageRef.listAll().then(function (res) {
        res.items.forEach(function (itemRef) {
            itemRef.getDownloadURL().then(function (url) {
                listOfTrashImages.push(url);
                mapOfTrashImages.set(urlToName(url),url);
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
    })
    .then(function () {
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });