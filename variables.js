var x=3
console.log(x)

let y=4
console.log(y)

let carName
carName= "volvo"

console.log(carName)

var a=0
console.log(a)
// let b=0
// let b=9
// console.log(b)   SyntaxError: Identifier 'a' has already been declared

//hosting - we can assihn the value before declare but only for var
name_="kish"
var name_
console.log(name_)

// nae_="kish"
// let nae_
// console.log(nae_)  // refence error - cant acess the 'nae' before initialized

const arr=[1,2,3,4,5]
arr[1]=3
console.log(arr)   // for const we update value only in arr ,obj