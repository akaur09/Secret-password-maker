
// Assignment Code
var number;
number = ["1","2","3","4","5","6","7","8","9","0"]
var Lower;
Lower = ["a","b","c","d","e","f","g","h","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var Upper;
Upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var Character;
Character = ["!","@","#","$","%","^","&","*","-","_","+","="]
var user; 
var useranswer;
var user2;

// Write password to the #password input
function writePassword() {
  useranswer = prompt("how many characters would you like to use for password? choose between 8 and 125");
  if (!useranswer) {
      alert("you need to enter a value");
  } else if(useranswer < 8 || useranswer > 126){
      user2 = prompt ("Please choose between 8 and 125 characters only");
  }else{
      number = confirm("Will you like this to contain numbers?");
      Lower = confirm("Will you like this to contain lowercase letters?");
      Upper = confirm("will you like this to contain uppercase letters?");
      Character = confirm("Will you like this to contain special characters?");
  }
//   if choices are confirmed
  if (!number && !Lower && !Upper && !Character){
      user = alert("You must choose a critria");
  } else if (Lower && number && Upper && Character){
      user = (Lower, number,Upper,Character);
  } else if (Character && Lower && Upper){
      user = Character.concat (Lower,Upper);
  } else if (Character && number && Lower){
      user = Character.concat (number,Lower);
  } else if (Character && Upper && number){
      user = Character.concat (Upper,number);
  } else if (number && Lower && Upper){
      user = number.concat (Lower,Upper);
  } else if (Character && number){
      user = Character.concat (number);
  } else if (Character && Lower){
      user = Character.concat (Lower);
  } else if (Character && Upper){
      user = Character.concat (Upper);
  } else if (Lower && number){
      user = Lower.concat (number);
  } else if (Lower && Upper){
      user = Lower.concat (Upper);
  } else if (Upper && number){
      user = Upper.concat (number);
  } else if (Upper){
      user = Upper;
  } else if (Lower){
      user = Lower;
  } else if (Character){
      user= Character;
  } else if (number){
      user = number;
  }
// puts password together
    var passwordText = document.querySelector("#password");
    passwordText.value= password
    var password=[];
    for (var i = 0; i < user; i++){
        var answers = user[Math.floor(Math.random()* user.length)];
        password.push(answers);
    }

     var pass = password.join("");
     UserInput(pass);
     return pass;        
       
}   


// Add event listener to generate button
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);
function UserInput(pass){
    document.getElementById("password").textContent= pass;
}
