#! /usr/bin/env node
import inquirer from 'inquirer';

const answer = await inquirer.prompt([
    {message: "Please select Language / Zaban ka intikhaab krain", 
        type: "list",
        name: "languageZaban",
        choices: ["English" , "Urdu"]
    }
])
if (answer.languageZaban === "English") {
    const answer = await inquirer.prompt([
        {message: "Enter first number: ", type:"number", name: "firstNumber"},
        {message: "Enter second number: ", type: "number", name:"secondNumber"},
        {message: "Selecte operater to perform operation: ", type: "list", name: "Operator", 
        choices: ["Addition", "Subtraction", "Multiplication", "Division"]
        }
    ])
    if (answer.Operator === "Addition") {
        console.log("Answer is: ", answer.firstNumber + answer.secondNumber)
    } else if (answer.Operator === "Subtraction") {
        console.log("Answer is: ", answer.firstNumber - answer.secondNumber)
    } else if (answer.Operator === "Multiplication") {
        console.log("Answer is: ", answer.firstNumber * answer.secondNumber)
    } else if (answer.Operator === "Division") {
        console.log("Answer is: ", answer.firstNumber / answer.secondNumber)
    } else {console.log("Please select valid operator")}
    console.log() 
    console.log("--THE END--")
}
else if (answer.languageZaban === "Urdu") {
    const answer = await inquirer.prompt([
        {message: "Pehla adad tehreer karain: ", type:"number", name: "firstNumber"},
        {message: "Doosra adad tehreer karain: ", type: "number", name:"secondNumber"},
        {message: "Amal muntakhib karain: ", type: "list", name: "Operator", 
        choices: ["Jama", "Tafreeq", "Zarab", "Taqseem"]
        }
    ])
    if (answer.Operator === "Jama") {
        console.log("Jawab hai: ", answer.firstNumber + answer.secondNumber)
    } else if (answer.Operator === "Tafreeq") {
        console.log("Jawab hai: ", answer.firstNumber - answer.secondNumber)
    } else if (answer.Operator === "Zarab") {
        console.log("Jawab hai: ", answer.firstNumber * answer.secondNumber)
    } else if (answer.Operator === "Taqseem") {
        console.log("Jawab hai: ", answer.firstNumber / answer.secondNumber)
    } else {console.log("Sahi amal muntakhib karain")}
    console.log() 
    console.log("--IKHTITAAM--")
}
