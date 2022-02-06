class Employee {

    constructor(firstName, lastName, id, email, role) {
        this.firstName = firstName
        this.lastName = lastName
        this.id = id
        this.email = email
        this.role = role
    }

    getFirstName() {
        return this.firstName
    }

    getLastName() {
        return this.lastName
    }

    getId() {
        return this.id
    }

    getEmail() {
        return this.email
    }

    getRole() {
        return "Employee"
    }
}

module.exports = Employee