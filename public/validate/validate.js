$(document).ready(function() { setTimeout(function() {
    downloadImages()
}, 1000); });

var listOfTrashImages = [];
var mapOfTrashImages = new Map();

//Downloading images from Firebase and saving them in listOfTrashImages
function downloadImages() {
    storageRef.listAll().then(function (res) {
        res.items.forEach(function (itemRef) {
            itemRef.getDownloadURL().then(function (url) {
                listOfTrashImages.push(url);
                mapOfTrashImages.set(urlToName(url),url);
            })
        });
    }).then(newImageToValidate)
}

downloadImages(); //"then" not working properly
imageUrl = "";
imageData = "";
imageValidations = "";
function newImageToValidate() {
    imageData = listOfTrashData[Math.floor(Math.random() * listOfTrashData.length)]; //random image-data
    imageUrl = mapOfTrashImages.get(imageData.name.toString()); //corresponding image to random data
    imageValidations = objToMap(imageData.validations); //not all images has validations in database yet TTOTOTOTOTOTOOTOTOOTOOTOTOTOTOT
    $('#imageToPredict').attr('src', imageUrl);
}

function validateButtonClicked(type) {
    console.log(type + " was pressed");
    if (type === "skip") {
        newImageToValidate();
    } else {
        let oldValidationCount = parseInt(imageValidations.get(type));
        let newValidationCount = oldValidationCount;
        newValidationCount++;
        imageValidations.set(type, newValidationCount);
        alert("Thank you!");
        sendNewSetToDatabase();
    }
}

function sendNewSetToDatabase() {
    var document = bin.doc(imageData.name.toString());
    console.log(imageData.name);
    console.log(imageValidations.get('glass'));
    return document.update({
        validations: {
            glass: imageValidations.get('glass'),
            plastic: imageValidations.get('plastic'),
            metal: imageValidations.get('metal'),
            cardboard: imageValidations.get('cardboard'),
            paper: imageValidations.get('paper'),
            trash: imageValidations.get('trash'), }
            })
        .then(function () {
        console.log("Validations for: " + imageData.name + " updated!");
        newImageToValidate();
    })
}

var bin = db.collection(currentBin);
var listOfTrashData = [];
bin.get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            listOfTrashData.push(doc.data())
        });
    })
    .then(function() {
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });