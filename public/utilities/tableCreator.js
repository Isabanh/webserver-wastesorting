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
    for(var i = 0; i < listOfTrashData.length+1; i++){
        var tr = tbl.insertRow();
        for(var j = 0; j < 5; j++) {
            var td = tr.insertCell();
            if (j==0) {
                if (i==0) {
                    td.appendChild(document.createTextNode("Location:"));
                    td.setAttribute("class", 'tableHeader');
                } else {
                    td.appendChild(document.createTextNode(listOfTrashData[i-1].location));
                }
            }
            if (j==1) {
                if (i==0) {
                    td.appendChild(document.createTextNode("Time:"));
                    td.setAttribute("class", 'tableHeader');
                } else {
                    td.appendChild(document.createTextNode(timestampToDate(listOfTrashData[i-1].timestamp)));
                }
            }
            if (j==2) {
                if (i==0) {
                    td.appendChild(document.createTextNode("Type:"));
                    td.setAttribute("class", 'tableHeader');
                } else {
                    td.appendChild(document.createTextNode(listOfTrashData[i-1].type));
                }
            }
            if (j==3) {
                if (i==0) {
                    td.appendChild(document.createTextNode("Validations:"));
                    td.setAttribute("class", 'tableHeader');
                } else {
                    tblv = document.createElement('table');
                    var trashValidations;
                    if (listOfTrashData[i-1].validations != undefined) {
                        trashValidations = objToMap(listOfTrashData[i-1].validations);
                    }
                    for (var vr = 0; vr < 6; vr++) {
                        var trv = tblv.insertRow();
                        tdv = trv.insertCell();
                        if (typesOfTrash[vr] === "trash") { //hack to show "residual" instead of "trash" as it is in the database
                            tdv.append(document.createTextNode("residual: "))
                        } else {
                            tdv.append(document.createTextNode(typesOfTrash[vr]+": "));
                        }
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
                    td.setAttribute("class", 'tableHeader');
                }
                else {
                    var img = document.createElement('img');
                    td.appendChild(img);
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