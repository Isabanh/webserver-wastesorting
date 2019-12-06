var smallImagesBeforeValidation = "Bin";
var largeImagesBeforeValidation = "Bin2";
var largeImagesAfterValidation = "Bin3";
var currentBin = largeImagesAfterValidation; // <- change this to use different Bins in the database

//convert object to map
const objToMap = ( obj => {
    const mp = new Map;
    Object.keys ( obj ). forEach (k => { mp.set(k, obj[k]) });
    return mp;
});

//specific url to name
function urlToName(url) {
    return url.substring(78, 98);
}

//timestamp to date
function timestampToDate(Timestamp) {
    return Timestamp.toDate().toString().substr(0, 24);
}