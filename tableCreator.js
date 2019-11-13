//big-ass table
function tableCreate(){
    if ($('#mainTable').length) { //remove if table exists
        $('#mainTable').remove();
    }
    var body = document.body,
        tbl  = document.createElement('table');
    tbl.style.width  = '100px';
    tbl.style.border = '1px solid black';
    tbl.setAttribute('id', 'mainTable');
    console.log(mapOfTrashImages);
    console.log(listOfTrashData);
    for(var i = 0; i < listOfTrashData.length+1; i++){
        var tr = tbl.insertRow();
        for(var j = 0; j < 5; j++) {
            var td = tr.insertCell();
            if (j==0) {
                if (i==0) {
                    td.appendChild(document.createTextNode("Location:"))
                } else {
                    td.appendChild(document.createTextNode(listOfTrashData[i-1].location));
                }
            }
            if (j==1) {
                if (i==0) {
                    td.appendChild(document.createTextNode("Time:"))
                } else {
                    td.appendChild(document.createTextNode(listOfTrashData[i-1].timestamp));
                }
            }
            if (j==2) {
                if (i==0) {
                    td.appendChild(document.createTextNode("Type:"))
                } else {
                    td.appendChild(document.createTextNode("something"));
                }
            }
            if (j==3) {
                if (i==0) {
                    td.appendChild(document.createTextNode("Validations:"))
                } else {
                    tblv = document.createElement('table');
                    var trashValidations;
                    if (listOfTrashData[i-1].validations != undefined) {
                        trashValidations = objToMap(listOfTrashData[i-1].validations);
                    }
                    for (var vr = 0; vr < 5; vr++) {
                        var trv = tblv.insertRow();
                        tdv = trv.insertCell();
                        tdv.append(document.createTextNode(typesOfTrash[vr]+": "));
                        tdv = trv.insertCell();
                        if (listOfTrashData[i-1].validations != undefined) {
                            tdv.appendChild(document.createTextNode(trashValidations.get(typesOfTrash[vr])));
                        } else {
                            tdv.appendChild(document.createTextNode("X"));
                        }
                    }
                    td.appendChild(tblv);
                }
            }
            if (j==4) {
                if (i==0) {
                    td.appendChild(document.createTextNode("Picture:"))
                }
                else {
                    var img = document.createElement('img');
                    td.appendChild(img);
                    console.log(listOfTrashData[i-1].name);
                    console.log(mapOfTrashImages.get(listOfTrashData[i-1].name));
                    img.setAttribute('src', mapOfTrashImages.get(listOfTrashData[i-1].name.toString()));
                    img.style.width = '150px';
                    img.style.height = '100px';
                }
            }
            td.style.border = '1px solid black';
        }
    }
    body.appendChild(tbl);
}