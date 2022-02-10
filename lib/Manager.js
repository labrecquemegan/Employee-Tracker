const Employee = require("./Employee")

class Manager extends Employee {
    constructor(firstName, lastName, id, email, role, officeNumber) {
        super(firstName, lastName, id, email, role)
        this.officeNumber = officeNumber
    }

    getRole() {
        return "Manager"
    }

    getofficeNumber() {
        return this.officeNumber
    }
}

module.exports = Manager
