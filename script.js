const logregBox = document.querySelector('.logreg-box');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const loginLink2 = document.querySelector('.login-link2');
const registerLink2 = document.querySelector('.register-link2');
let answers = Array(5).fill(null);

registerLink.addEventListener('click', () => {
    logregBox.classList.add('active');
});

loginLink.addEventListener('click', () => {
    logregBox.classList.remove('active');
});

registerLink2.addEventListener('click', () => {
    logregBox.classList.add('active');
});

loginLink2.addEventListener('click', () => {
    logregBox.classList.remove('active');
});

function saveOption() {
    var form = document.getElementById("mcqForm");
    var selectedOption = form.querySelector('input[name="question1"]:checked');
    
    if (selectedOption) {
      var optionValue = selectedOption.value;
      // Save the selected option value to a database or perform further processing
      console.log("Selected option: " + optionValue);
    } else {
      // No option selected
      console.log("Please select an option");
    }
  }
  
  for (let i = 1; i <= 10; i++) {
    let elementId = "question" + i;
    let answers = document.getElementById(elementId);
    
    if (answers) {
      console.log("Element ID: " + elementId);
    } else {
      console.log("Element not found: " + elementId);
    }
  }

  /*function toggleForm(formId) {
    var form1 = document.getElementById('form1');
    var form2 = document.getElementById('form2');
    
    if (formId === 'form1') {
      form1.style.display = 'block';
      form2.style.display = 'none';
    } else if (formId === 'form2') {
      form1.style.display = 'none';
      form2.style.display = 'block';
    }
  }*/


  function toggleForm(formId) {
    var form = document.getElementById(formId);
    if (form.style.display === "none") {
      form.style.display = "block";
    } else {
      form.style.display = "none";
    }
  }


  function dbms() {
    window.location.href = 'exam.html';
  }

  const express = require('express');
const mysql = require('mysql');
const app = express();

// Create a MySQL connection
const connection = mysql.createConnection({
  host: 'your_database_host',
  user: 'your_username',
  password: 'your_password',
  database: 'your_database_name'
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Database connection failed: ', err);
  } else {
    console.log('Connected to the database');
  }
});

// Handle form submission
app.post('/submit', (req, res) => {
  const selectedOption = req.body.option; // Assuming the radio button value is sent as "option"

  // Insert the selected option into the database
  const query = `INSERT INTO your_table_name (selected_option) VALUES ('${selectedOption}')`;

  connection.query(query, (err, result) => {
    if (err) {
      console.error('Failed to insert data: ', err);
      res.sendStatus(500);
    } else {
      console.log('Data inserted successfully');
      res.sendStatus(200);
    }
  });
});

// Start the server
app.listen(3000, () => {
  console.log('Server running on port 3000');
});

function home() {
  window.location.href = 'home.html';
}