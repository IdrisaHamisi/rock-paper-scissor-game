const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')

let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  userChoice = e.target.id
  userChoiceDisplay.innerHTML = userChoice
  generateComputerChoice()
  getResult()
}))

// var x=3;
// var y=7;
// var t=4

// document.write("addition\n", x+y-t);

// var y=40;
// var x=(y<=30)?"juma is too old":"juma is too young";
// document.write(x);

// var i=28;
// if(i>28)
// {
//     document.write("the value of i is greater than 29");
// }
// else if(i=28){
//     document.write("the value of i is equal to 28");
// }
// else{
//     document.write("the value of i is less than 29");
// }

//switch statements
// var month=2
// switch(month){
//     case 1:
//         document.write("january");
//         break;
//     case 2:
//         document.write("february");
//         break;

// }

