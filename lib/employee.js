class Employee {
    constructor(name, id, title) {
        this.name = name;
        this.id = id;
        this.title = title;
    }

    getName(name) {
        inquirer.prompt({
            type: "input",
            name: "name",
            message: "What is your name?"
        })
    }

    getID(id) {
        inquirer.prompt({
            type: "input",
            name: "id",
            message: "What is your ID?"
        })
    }

    getEmail() {
        inquirer.prompt({
            type: "input",
            name: "email",
            message: "What is your email?"
        })
    }

    getRole() {
        inquirer.prompt({
            type: "list",
            name: "role",
            message: "What is your role?",
            choices: [
                "Employee",
                "Manager",
                "Engineer",
                "Intern"
            ]
        })
    }
}

module.exports = Employee;