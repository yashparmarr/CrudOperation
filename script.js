var selectedRow = null

function onFormSubmit(e) {
	event.preventDefault();
        var formData = readFormData();
        if (selectedRow == null){
            insertNewRecord(formData);
		}
        else{
            updateRecord(formData);
		}
        resetForm();    
}

//Retrieve the data
function readFormData() {
    var formData = {};
    formData["product"] = document.getElementById("product").value;
    formData["productDescription"] = document.getElementById("productDescription").value;
    formData["Price"] = document.getElementById("Price").value;
    return formData;
}

//Insert the data
function insertNewRecord(data) {
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
		cell1.innerHTML = data.product;
    cell2 = newRow.insertCell(1);
		cell2.innerHTML = data.productDescription;
    cell3 = newRow.insertCell(2);
		cell3.innerHTML = data.Price;
    cell4 = newRow.insertCell(3);
        cell4.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`;
}

//Edit the data
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("product").value = selectedRow.cells[0].innerHTML;
    document.getElementById("productDescription").value = selectedRow.cells[1].innerHTML;
    document.getElementById("Price").value = selectedRow.cells[2].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.product;
    selectedRow.cells[1].innerHTML = formData.productDescription;
    selectedRow.cells[2].innerHTML = formData.Price;
}

//Delete the data
function onDelete(td) {
    if (confirm('Do you want to delete this record?')) {
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
        resetForm();
    }
}

//Reset the data
function resetForm() {
    document.getElementById("product").value = '';
    document.getElementById("productDescription").value = '';
    document.getElementById("Price").value = '';
    selectedRow = null;
}
