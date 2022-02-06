const inquirer = require("inquirer")
const createTeam = require("./template")
const Engineer = require("../lib/Engineer")
const Intern = require("../lib/Intern")
const Manager = require("../lib/Manager")


const employeeList = [];


// This functions asks the user to input the data that will be used to construct employee cards
function add() {

    inquirer.prompt([
        {
            type: 'input',
            message: `What is the employee's first name?`,
            name: 'firstName'
        },

        {
            type: 'input',
            message: `What is the employee's last name?`,
            name: 'lastName'
        },

        {
            type: 'number',
            message: 'What is the employee ID number?',
            name: 'id'
        },

        {
            type: 'input',
            message: 'What is the employee email address?',
            name: 'email'
        },

        {
            type: 'list',
            message: 'What is the employee role?',
            name: 'role',
            choices: ["Intern", "Engineer", "Manager"]
        }
    ])

        .then((answers) => {
            var firstName = answers.firstName
            var lastName = answers.lastName
            var id = answers.id
            var email = answers.email
            var role = answers.role
            var github = ""
            var school = ""
            var officeNumber = ""

            if (answers.role === "Intern") {
                inquirer.prompt([{
                    type: 'input',
                    message: 'Where does the intern go to school?',
                    name: 'school',
                }])
                    .then((answer) => {
                        school = answer.school
                        var newIntern = new Intern(firstName, lastName, id, email, role, school)
                        employeeList.push(newIntern)
                        console.log(employeeList)
                        moreEmployee()
                    })
            } else if(answers.role === "Engineer") {
                inquirer.prompt([{
                    type: 'input',
                    message: 'What is their github username?',
                    name: 'github'
                }])
                    .then((answer) => {
                        github = answer.github
                        var newEngineer = new Engineer(firstName, lastName, id, email, github)
                        employeeList.push(newEngineer)
                        console.log(employeeList)
                        moreEmployee()
                    })
            } else {
                inquirer.prompt([{
                    type: 'input',
                    message: 'What is the office number?',
                    name: 'officeNumber'
                }])
                    .then((answer) => {
                        officeNumber = answer.officeNumber
                        var newManager = new Manager(firstName, lastName, id, email, officeNumber)
                        employeeList.push(newManager)
                        moreEmployee()
                    })

            }
        })

     
}

function moreEmployee() {
    inquirer.prompt([{
        type: 'confirm',
        message: 'Would you like to add another employee?',
        name: 'confirmation'
    }])
    .then((answer) => {
        if (answer.confirmation === true) {
            add()
        } else {
            createTeam(employeeList)
        }
    })
}



module.exports = add
