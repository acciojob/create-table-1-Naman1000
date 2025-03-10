
function insert_Row() {
    // Get the table by ID
    let table = document.getElementById("sampleTable");

    // Create a new row at the first position (index 0)
    let newRow = table.insertRow(0);

    // Insert two new cells into the row
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);

    // Assign values to the new cells
    cell1.innerHTML = "New Cell1";
    cell2.innerHTML = "New Cell2";
}

