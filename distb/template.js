const add = require("./add")
const Engineer = require("../lib/Engineer")
const Intern = require("../lib/Intern")
const Manager = require("../lib/Manager")
const Employee = require("../lib/Employee")
const fs = require("fs")
const index = require("./index.html")


function createTeam() {
createIntern()
createEngineer()
createManager()
fs.writeFile(index.html)
}

var employeeCards = []

// function makeEmployeeCards(employeeList) {
//     console.log('generate EmployeeCard employee list:'+ employeeList)
// }
// makeEmployeeCards()


function createIntern() {
    if (Employee.role == "Intern") {
        var internCard = `
        <div class = "col">
            <div class = "card">
            <h2>${employeeList.answers.firstName} + " " + ${employeeList.answers.lastName}</h2>
            <h2>${answers.role}</h2>
            </div>
            <div class = "container>
            <div class = "row"> ID: ${employeeList.answers.id}</div>
            <div class = "row"> Email: ${employeeList.answers.email}</div>
            <div class = "row"> School: ${employeeList.answers.school}</div>
            </div>
        </div>`
        employeeCards.push(internCard)
    } else {
        return console.log("no intern")
    }
}

function createEngineer(employeeList) {
    if (Engineer == "Engineer") {
        var internCard = `
        <div class = "col">
            <div class = "card">
            <h2>${employeeList.answers.firstName} + " " + ${employeeList.answers.lastName}</h2>
            <h2>${answers.role}</h2>
            </div>
            <div class = "container>
            <div class = "row"> ID: ${employeeList.answers.id}</div>
            <div class = "row"> Email: ${employeeList.answers.email}</div>
            <div class = "row"> School: ${employeeList.answers.github}</div>
            </div>
        </div>`
        employeeCards.push(engineerCard)
    } else {
        return console.log("no new engineer")
    }
}


function createManager(employeeList) {
    if (Manager == "Manager") {
        var internCard = `
        <div class = "col">
            <div class = "card">
            <h2>${employeeList.answers.firstName} + " " + ${employeeList.answers.lastName}</h2>
            <h2>${answers.role}</h2>
            </div>
            <div class = "container>
            <div class = "row"> ID: ${employeeList.answers.id}</div>
            <div class = "row"> Email: ${employeeList.answers.email}</div>
            <div class = "row"> School: ${employeeList.answers.officeNumber}</div>
            </div>
        </div>`
        employeeCards.push(managerCard)
    } else {
        return console.log("no new manager")
    }
}


module.exports = createTeam
