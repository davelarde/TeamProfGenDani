const inquirer= require("inquirer");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const Manager = require("../lib/Manager");
const fs = require("fs");
const teamGen = require("./generateHtml")
const teamArray = []
const askQuestion =()=>{
    inquirer.prompt([
        {
            type:"list",
            name : "employeeChoice",
            message:"What type of employee would you like to add to the team?",
            choices:["Manager", "Engineer","Intern","end"],
        },
    ]).then(answers =>{
        console.log(answers)
        switch (answers.employeeChoice){

            case "Manager":
                addManager();
                break;
            case "Engineer":
                addEngineer();
                break;
            case "Intern":
                addIntern();
                break;
            default:
                console.log("Your team is ready!")
                generateHtml(teamArray)
                break;
        }
    })
}
const addManager =()=>{
    inquirer.prompt([
        {
            type:"input",
            name:"managerName",
            message:"What is your name?"

        },
        {
            type:"input",
            name:"managerId",
            message:"What is your Id?",
        },
        {
            type:"input",
            name:"managerEmail",
            message:"What is your E-mail Address?",
        },
        {
            type:"input",
            name:"managerOfficeNumber",
            message:"What is your Office Number?",
        },
    ]).then(answers =>{
        const newManager = new Manager(answers.managerName, answers.managerId , answers.managerEmail, answers.managerOfficeNumber);
        teamArray.push(newManager)
        askManager();
    });
}

    const addEngineer =()=>{
        inquirer.prompt([
            {
                type:"input",
                name:"engineerName",
                message:"What is your name?"
    
            },
            {
                type:"input",
                name:"engineerId",
                message:"What is your Id?",
            },
            {
                type:"input",
                name:"engineerEmail",
                message:"What is your E-mail Address?",
            },
            {
                type:"input",
                name:"githubUsername",
                message:"What is your Github username?",
            },
        ]).then(answers =>{
            const newEngineer = new Engineer(answers.engineerName, answers.engineerId , answers.engineerEmail, answers.githubUsername);
            teamArray.push(newEngineer)
            askQuestion();
        });
    }
    const addIntern =()=>{
        inquirer.prompt([
            {
                type:"input",
                name:"internName",
                message:"What is your name?"
    
            },
            {
                type:"input",
                name:"internId",
                message:"What is your Id?",
            },
            {
                type:"input",
                name:"internEmail",
                message:"What is your E-mail Address?",
            },
            {
                type:"input",
                name:"schoolName",
                message:"What is your school's name?",
            },
        ]).then(answers =>{
            const newIntern = new Intern(answers.internName, answers.internId , answers.internEmail, answers.schoolName);
            teamArray.push(newIntern)
            askQuestion();
        });
        
    }
    const askManager =()=>{
        inquirer.prompt([
            {
                type: "confirm",
                name:"managerAnswer",
                message:"Do you want to add another team member?",
            },
           
        ]).then(answers=>{
            if(answers.managerAnswer){
               askQuestion() 
            }else{
                console.log("Your team is ready!")
                generateHtml(teamArray)
            }

        }
       
        )}
        function generateHtml(answers){
            fs.writeFile("./index.html", teamGen(answers),(err)=>{
                if(err){
                    throw err;
                } console.log('Your team has been generated!')
    
            })

        }
        askQuestion()
       