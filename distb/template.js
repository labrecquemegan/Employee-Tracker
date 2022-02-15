// const {employeeList} = require("./add")
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");
const fs = require("fs");

var employeeCards = [];

function createTeam(employeeList) {
  employeeList.forEach((emp) => {
    if (emp.role === "Intern") {
      createIntern(emp);
    } else if (emp.role === "Engineer") {
      createEngineer(emp);
    } else {
      createManager(emp);
    }
  });
  makehtml();
}

function makehtml() {
  let html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <title>Team Generator</title>
    <link
</head>
<body>
<header>
  <div class= "container p-5 mb-5">
    <h1 class= "text-center display-2">My Team</h1>
  </div>
</header>
`;
  html += employeeCards.join();

  html += `
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
</body>
</html>
`;

  fs.writeFile("index.html", html, (err) => {
    console.log(err);
  });
}

// function makeEmployeeCards(employeeList) {
//     console.log('generate EmployeeCard employee list:'+ employeeList)
// }
// makeEmployeeCards()

function createIntern(Intern) {
  var internCard = `
        <div class = "card m-2" style="width: 18rem:">
            <div class = "card-header">
            <h2>${Intern.firstName}  ${Intern.lastName}</h2>
            <h2>Intern</h2>
            </div>
            <div class = "list-group list-group-flush">
            <li class = "list-group-item"> ID: ${Intern.id}</div>
            <div class = "list-group-item"> Email: ${Intern.email}</div>
            <div class = "list-group-item"> School: ${Intern.school}</div>
            </div>
        </div>`;
  employeeCards.push(internCard);
}

function createEngineer(Engineer) {
  var engineerCard = `
        <div class = "card m-2" style="width: 18rem:">
          <div class = "card-header">
          <h2>${Engineer.firstName}  ${Engineer.lastName}</h2>
          <h2>Engineer</h2>
          </div>
          <div class = "list-group list-group-flush">
          <li class = "list-group-item"> ID: ${Engineer.id}</div>
          <div class = "list-group-item"> Email: ${Engineer.email}</div>
          <div class = "list-group-item"> GitHub: ${Engineer.github}</div>
          </div>
        </div>`;
  employeeCards.push(engineerCard);
}

function createManager(Manager) {
  var managerCard = `
        <div class = "card m-2" style="width: 18rem:">
          <div class = "card-header">
          <h2>${Manager.firstName}  ${Manager.lastName}</h2>
          <h2>Manager</h2>
          </div>
          <div class = "list-group list-group-flush">
          <li class = "list-group-item"> ID: ${Manager.id}</div>
          <div class = "list-group-item"> Email: ${Manager.email}</div>
          <div class = "list-group-item"> Office Number: ${Manager.officeNumber}</div>
          </div>
        </div>`;
  employeeCards.push(managerCard);
}

module.exports = createTeam;
