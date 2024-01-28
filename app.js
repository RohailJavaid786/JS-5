
//Prompt

function greetUser(userName) {
    return "Hello, " + userName + "! Welcome to the world of JavaScript!";
  }
  
  var user = prompt("What's your name?");
  var greeting = greetUser(user);
  alert(greeting);


  //Prime Number
let num = prompt("Please enter a possitive integer");
var i;
var result;
function isPrime(){
    if(num==1){
    console.log(num,"is neither prime nor composite");
}
else if(num<1){
    console.log("please enter a valid number");
}
else{
    for(i=2; i<num; i++){
        if(num%i==0){
            result = "is not a prime number";
            return false;
        break;
        }
        else{
            result = "is a prime number";
            return true;
        }
    }
 }
}
console.log(isPrime())