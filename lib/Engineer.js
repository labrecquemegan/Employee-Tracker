const Employee = require("./Employee")

class Engineer extends Employee {
    constructor(firstName, lastName, id, email, role, github) {
        super(firstName, lastName, id, email, role)
        this.github = github
    }

    getRole() {
        return "Engineer"
    }

    getGithub() {
        return this.github
    }
}

module.exports = Engineer
