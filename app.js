let Employee = require("./lib/Employee");
let Engineer = require("./lib/Engineer");
let Intern = require("./lib/Intern");
let Manager = require("./lib/Manager");
let questions = require("./lib/questions");
let inquirer = require("inquirer")
let fs = require("fs");
let util = require("util");

const readFileSync = util.promisify(fs.readFile);
const writeFileSync = util.promisify(fs.writeFile);

let teamRoster = [];

promptUser()
//console.log(questions)
function promptUser() {
    inquirer.prompt(questions.confirmStart).then(function ({ start }) {
        //console.log(start)
        if (start === false) {
            return
        }
        inquirer.prompt(questions.managerQuestions).then(function ({ manager, managerID, managerEmail, managerNum }) {
            //console.log(manager, managerID, managerEmail, managerNum)
            let managerObj = new Manager(manager, managerID, managerEmail, managerNum)
            console.log(managerObj)
            teamRoster.push(managerObj);
            buildTeam();
        }, function (err) {
            console.log(err);
        })
    })
}

function buildTeam() {
    inquirer.prompt(questions.employeePick).then(function (res) {
        switch (res.select) {
            case "Engineer":
                buildEngineer();
                break;
            case "Intern":
                buildIntern();
                break;
            default:
                buildHTML();
                break;
        }
    }, function (err) {
        console.log(err)
    })
}

function buildEngineer() {
    inquirer.prompt(questions.engineerQuestions).then(function ({ engineer, engineerID, engineerEmail, engineerGitHub }) {
        let engineerObj = new Engineer(engineer, engineerID, engineerEmail, engineerGitHub)
        console.log(engineerObj)
        teamRoster.push(engineerObj);
        buildTeam();
    }, function (err) {
        console.log(err);
    })
}

function buildIntern() {
    inquirer.prompt(questions.internQuestions).then(function ({ intern, internID, internEmail, internSchool }) {
        let internObj = new Intern(intern, internID, internEmail, internSchool)
        console.log(internObj)
        teamRoster.push(internObj);
        buildTeam();
    }, function (err) {
        console.log(err);
    })
}

function buildHTML() {
    let html = fs.readFileSync("./templates/main.html", "utf8");
    let 
}