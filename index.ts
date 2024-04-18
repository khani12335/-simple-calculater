#! /usr/bin/env node
import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "enter first number", type: "number", name: "firstnumber" },
  { message: "enter second number", type: "number", name: "secondnumber" },
  {
    message: "select one of the operator to perfoms operation",
    type: "list",
    name: "operator",
    choices:["Addition","Subraction","Multiplication","Division"]
  },
]);
//conditional statement

if(answer.operator==="Addition"){
    console.log(answer.firstnumber+answer.secondnumber)
}else if(answer.operator==="Subraction"){
    console.log(answer.firstnumber-answer.secondnumber)
}else if(answer.operator==="Multiplication"){
    console.log(answer.firstnumber*answer.secondnumber)
}else if(answer.operator==="Division"){
    console.log(answer.firstnumber/answer.secondnumber);
}else{
    console.log("please slaect a valid operator:")
}

