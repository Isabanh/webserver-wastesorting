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