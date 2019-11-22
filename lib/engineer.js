const Employee = require("./employee");

class Engineer extends Employee {
    constructor(number) {
        inquirer.prompt({
            type: "input",
            name: "officeNumber",
            message: "What is your office number?"
        })
    }
}