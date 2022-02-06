const Employee = require("./Employee")

class Intern extends Employee {
    constructor(firstName, lastName, id, email, role, school) {
        super(firstName, lastName, id, email, role)
        this.school = school
    }

    getRole() {
        return "Intern"   
    }

    getSchool() {
        return this.school
    }
}

module.exports = Intern
