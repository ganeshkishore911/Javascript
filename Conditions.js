age=18
if (age<18){
    console.log("you are eligible ")
}else if(age>=18 && age<=30){
    console.log("you are waiting")
}else{
    console.log("not eligible")
}
//ternary op
result= (age>=18)? "yes":"No"
console.log(result)
// nested if else
let username = "kisore"
const password="1234gk"
if (username =="kishore"){
    if (password== "1234gk"){
        console.log("logined in successfully")
    }else{
        console.log(" wrong password try again!")
    }
}else{
    console.log("you are not a user")
}
//switch case
let day = 3;

switch (day) {
  case 1:
    console.log("Monday"); // if the break is not there means it print all cases down
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Invalid day"); 
}