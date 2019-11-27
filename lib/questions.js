const questions = module.exports = {

    confirmStart: {
        type: "confirm",
        message: "You are here to build your engineering team roster. Let's begin?",
        name: "start",
        validate: (input) => {
            if (input.toUpperCase() !== "Y") {
                return false
            }
        }
    },

    managerQuestions: [
        {
            type: "input",
            message: "What is your team name?",
            name: "teamName",
            validate: (input) => {
                if(input.trim().length > 0) {
                    return true
                } else {
                    console.log("\nPlease enter a valid team name")
                    return false
                }
            }
        },
        {
            type: "input",
            message: "What is the manager's name?",
            name: "manager",
            validate: (input) => {
                if (input.trim().length > 0) {
                    return true
                } else {
                    console.log("\nPlease enter a valid name")
                    return false
                }
            }
        },

        {
            type: "input",
            message: "What is the manager's ID?",
            name: "managerID",
            validate: (input) => {
                if (isNaN(input)) {
                    console.log("\nPlease enter a valid number ID")
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: "input",
            message: "What is the manager's email?",
            name: "managerEmail",
            validate: (input) => {
                var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                if (!input.match(re)) {
                    console.log("\nPlease enter a valid email address");
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: "number",
            message: "What is the manager's office number?",
            name: "managerNum",
            validate: (input) => {
                if (isNaN(input)) {
                    console.log("\nPlease enter a valid office number")
                    return false;
                } else {
                    return true;
                }
            }
        }
    ],

    employeePick: {
        type: "list",
        message: "Pick the following to add on your team roster.",
        name: "select",
        choices: [
            "Engineer",
            "Intern",
            "I am done adding. Generate HTML"
        ]
    },

    engineerQuestions: [
        {
            type: "input",
            message: "What is the engineer's name?",
            name: "engineer",
            validate: (input) => {
                if (input.trim().length > 0) {
                    return true
                } else {
                    console.log("\nPlease enter a valid name")
                    return false
                }
            }
        },
        {
            type: "input",
            message: "What is the engineer's ID?",
            name: "engineerID",
            validate: (input) => {
                if (isNaN(input)) {
                    console.log("\nPlease enter a valid number ID")
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: "input",
            message: "What is the engineer's email?",
            name: "engineerEmail",
            validate: (input) => {
                var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                if (!input.match(re)) {
                    console.log("\nPlease enter a valid email address");
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: "input",
            message: "What is the manager's GitHub username?",
            name: "engineerGitHub",
            validate: (input) => {
                if(input.trim().length > 0) {
                    return true
                } else {
                    console.log("\nPlease enter a valid GitHub username")
                    return false
                }
            }
        },
    ],

    internQuestions: [
        {
            type: "input",
            message: "What is the intern's name?",
            name: "intern",
            validate: (input) => {
                if (input.trim().length > 0) {
                    return true
                } else {
                    console.log("\nPlease enter a valid name")
                    return false
                }
            }
        },
        {
            type: "input",
            message: "What is the intern's ID?",
            name: "internID",
            validate: (input) => {
                if (isNaN(input)) {
                    console.log("\nPlease enter a valid number ID")
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: "input",
            message: "What is the intern's email?",
            name: "internEmail",
            validate: (input) => {
                var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                if (!input.match(re)) {
                    console.log("\nPlease enter a valid email address");
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: "input",
            message: "What is the intern's school?",
            name: "internSchool",
            validate: (input) => {
                if(input.trim().length > 0) {
                    return true
                } else {
                    console.log("\nPlease enter a valid school name")
                    return false
                }
            }
        },
    ]
}