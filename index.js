var mainObj = [

];
var unfinished = 0;
data();
getTotal();

function data() {
    var k = '<tbody>'
    for (i = 0; i < mainObj.length; i++) {
        k += '<tr>';
        k += '<td>' + mainObj[i].name + '</td>';
        k += '<td>' + mainObj[i].status + '</td>';
        k += "<td><input type='button' value='Finish' onclick=\"toggleFinish(\'" + mainObj[i].id + "\',this)\"><input type='button' value='Delete' onclick=\"deleteTaskById(\'" + mainObj[i].id + "\')\"></td>"
        k += '</tr>';
    }
    k += '</tbody>';
    document.getElementById('tableData').innerHTML = k;
}

function add() {
    var name = document.getElementById('name').value;
    var count = mainObj.length;
    mainObj.push({
        id: "ts" + count,
        name: name,
        status: "Unfinished"
    })
    unfinished++;
    data();
    getTotal();


    console.log(mainObj)
    console.log(document.getElementById('tableData').rows.length)
}

function getTotal() {
    document.getElementById('totalFinished').innerHTML = "Total Unfinished Task: " + unfinished;
}

function deleteAll() {
    mainObj = []
    data();
    getTotal();
}

function deleteTaskById(id) {
    var objWithIdIndex = mainObj.findIndex((obj) => obj.id === id);
    mainObj.splice(objWithIdIndex, 1);
    console.log(mainObj)
    data();
    getTotal();
    if (unfinished == 0) {
        alert("All tasks complete!")
    }
}

function toggleFinish(id, x) {
    let object = mainObj.find(x => x.id === id)

    if (!object) {
        return false
    }
    if (object.status == "Unfinished") {
        object.status = "Finished";
        unfinished--
    } else if (object.status == "Finished") {
        object.status = "Unfinished";
        unfinished++
    }

    data();
    getTotal();

    if (unfinished == 0) {
        alert("All tasks complete!")
    }
}
