// javascript.js

// Function to display XML content
function displayXML() {
    fetch('./data.xml')
        .then(response => response.text())
        .then(data => {
            // Assuming there is an element with id "xmlContent" to display the content
            document.getElementById('xmlContent').innerText = data;
        })
        .catch(error => console.error('Error fetching XML:', error));
}

// Function to display CSV content
function displayCSV() {
    fetch('./data.csv')
        .then(response => response.text())
        .then(data => {
            // Assuming there is an element with id "csvContent" to display the content
            document.getElementById('csvContent').innerText = data;
        })
        .catch(error => console.error('Error fetching CSV:', error));
}

// Function to display JSON content
function displayJSON() {
    fetch('./data.json')
        .then(response => response.json())
        .then(data => {
            // Assuming there is an element with id "jsonContent" to display the content
            document.getElementById('jsonContent').innerText = JSON.stringify(data, null, 2);
        })
        .catch(error => console.error('Error fetching JSON:', error));
}
