//types of fn
// fn declaration
greet()
function greet(){
    console.log("hello")
}
// fn expression
let add=function(a,b){
    console.log(a+b)
}
add(2,9)
// arrow fn
let sub= (a,b)=> console.log(a-b)
sub(2,9)

//callback fn
function dosomething(callbackk,hh){
    console.log(hh+"kishore")
    callbackk
}
function greeting(){
    console.log("hi")
}
dosomething(greeting(),"Mr.")