const questions = module.exports = {

    confirmStart: {
        type: "confirm",
        message: "You are here to build your engineering team roster. Let's begin?",
        name: "start"
    },

    managerQuestions: [
        {
            type: "input",
            message: "What is the manager's name?",
            name: "manager"
        },

        {
            type: "input",
            message: "What is the manager's ID?",
            name: "managerID"
        },
        {
            type: "input",
            message: "What is the manager's email?",
            name: "managerEmail"
        },
        {
            type: "number",
            message: "What is the manager's phone number?",
            name: "manager"
        }
    ],

    employeePick: {
        type: "list",
        message: "Pick the following to add on your team roster.",
        name: "select",
        choices: [
            "Engineer",
            "Intern",
            "I am done adding."
        ]
    },

    engineerQuestions: [
        {
            type: "input",
            message: "What is the engineer's name?",
            name: "engineer"
        },
        {
            type: "input",
            message: "What is the engineer's ID?",
            name: "engineerID"
        },
        {
            type: "input",
            message: "What is the engineer's email?",
            name: "engineerEmail"
        },
        {
            type: "input",
            message: "What is the manager's GitHub username?",
            name: "engineerGitHub"
        },
    ],

    internQuestions: [
        {
            type: "input",
            message: "What is the intern's name?",
            name: "intern"
        },
        {
            type: "input",
            message: "What is the intern's ID?",
            name: "internName"
        },
        {
            type: "input",
            message: "What is the intern's email?",
            name: "internEmail"
        },
        {
            type: "input",
            message: "What is the intern's school?",
            name: "internName"
        },
    ]
}