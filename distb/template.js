// const {employeeList} = require("./add")
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");
const fs = require("fs");

var employeeCards = [];

function createTeam(employeeList) {
  employeeList.forEach((emp) => {
    console.log(emp);
    if (emp.role === "Intern") {
      createIntern(emp);
    } else if (emp.role === "Engineer") {
      createEngineer(emp);
    } else {
      createManager(emp);
    }
  });
  console.log(employeeCards)
  makehtml()
}

function makehtml() {
    let html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Generator</title>
    <link
</head>
<body>
`
html += employeeCards.join()

html += `
</body>
</html>
`

fs.writeFile('index.html', html, (err) => {
    console.log(err)
})
}



// function makeEmployeeCards(employeeList) {
//     console.log('generate EmployeeCard employee list:'+ employeeList)
// }
// makeEmployeeCards() 

function createIntern(Intern) {
  var internCard = `
        <div class = "col">
            <div class = "card">
            <h2>${Intern.firstName}  ${Intern.lastName}</h2>
            <h2>Intern</h2>
            </div>
            <div class = "container">
            <div class = "row"> ID: ${Intern.id}</div>
            <div class = "row"> Email: ${Intern.email}</div>
            <div class = "row"> School: ${Intern.school}</div>
            </div>
        </div>`;
  employeeCards.push(internCard);
}

function createEngineer(Engineer) {
  var engineerCard = `
        <div class = "col">
            <div class = "card">
            <h2>${Engineer.firstName}  ${Engineer.lastName}</h2>
            <h2>Engineer</h2>
            </div>
            <div class = "container>
            <div class = "row"> ID: ${Engineer.id}</div>
            <div class = "row"> Email: ${Engineer.email}</div>
            <div class = "row"> School: ${Engineer.github}</div>
            </div>
        </div>`;
  employeeCards.push(engineerCard);
}

function createManager(Manager) {
  var managerCard = `
        <div class = "col">
            <div class = "card">
            <h2>${Manager.firstName}  ${Manager.lastName}</h2>
            <h2>Manager</h2>
            </div>
            <div class = "container>
            <div class = "row"> ID: ${Manager.id}</div>
            <div class = "row"> Email: ${Manager.email}</div>
            <div class = "row"> School: ${Manager.officeNumber}</div>
            </div>
        </div>`;
  employeeCards.push(managerCard);
}

module.exports = createTeam;
