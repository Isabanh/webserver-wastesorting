function updateImage(name) {
    storageRef.child(name).getDownloadURL().then(function(url) {
        let img = document.getElementById('image');
        img.style.height = '200px';
        img.style.width = '300px';
        img.src = url;
        unfade(img);
    });
}

var started = false;

//animation
function unfade(element) {
    var op = 0.1;  // initial opacity
    element.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 30);
}

//current waste that is being sorted in the waste sorting system
db.collection("Live").doc("recent")
    .onSnapshot(function(doc) {
        if (!started) {
            started = true;
            return;
        }
        let name = doc.data().name;
        let firstClass = doc.data().firstClass;
        let firstConfidence = doc.data().firstConfidence;
        let secondClass = doc.data().secondClass;
        let secondConfidence = doc.data().secondConfidence;
        let thirdClass = doc.data().thirdClass;
        let thirdConfidence = doc.data().thirdConfidence;
        let timestamp = doc.data().timestamp;

        document.getElementById("firstClass").innerHTML = firstClass + ": ";
        document.getElementById("secondClass").innerHTML = secondClass + ": ";
        document.getElementById("thirdClass").innerHTML = thirdClass + ": ";
        document.getElementById("firstClassConf").innerHTML = firstConfidence.toFixed(1) + "%";
        document.getElementById("secondClassConf").innerHTML = secondConfidence.toFixed(1) + "%";
        document.getElementById("thirdClassConf").innerHTML = thirdConfidence.toFixed(1) + "%";
        document.getElementById("time").innerHTML = timestampToDate(timestamp);

        updateImage(name + ".jpg");
    });

