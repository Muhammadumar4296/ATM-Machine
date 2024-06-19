// ............ ATM Machine Project .............
import inquirer from 'inquirer';
const answers = await inquirer.prompt([
    {
        type: "input",
        name: "userId",
        message: "Kindly Enter Your Id ",
    },
    {
        type: "number",
        name: "userPin",
        message: "Kindly Enter your PIN",
    },
    {
        type: "list",
        name: "accountType",
        choices: ["Current", "Saving"],
        message: "Select your AccountType",
    },
    {
        type: "list",
        name: "transactionType",
        choices: ["fast Cash", "Withdraw"],
        message: "Select your transaction",
        when(answers) {
            return answers.accountType;
        },
    },
    {
        type: "list",
        name: "amount",
        choices: [1000, 2000, 10000, 20000],
        message: "Select your amount",
        when(answers) {
            return answers.accountType == "fast Cash";
        },
    },
    {
        type: "number",
        name: "amount",
        message: "Enter Your Amount",
        when(answers) {
            return answers.transactionType == "Withdraw";
        },
    },
]);
if (answers.userId && answers.userPin) {
    const balance = Math.floor(Math.random() * 10000000);
    console.log(balance);
    const enterdAmount = answers.amount;
    if (balance >= enterdAmount) {
        const remaining = balance - enterdAmount;
        console.log("Your remaining Balance Is", remaining);
    }
    else {
        console.log("Insuficient Balance");
    }
}
