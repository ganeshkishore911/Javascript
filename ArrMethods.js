let arr=[1,2,3]
arr.push(4)   //add at last
console.log(arr)
arr.pop()     //remove at last
console.log(arr)
arr.shift() //remove first one
console.log(arr)
arr.unshift(1)   //add at first
console.log(arr)
console.log(arr.indexOf(2)) //find the index
console.log(arr.includes(1)) // check is the element is there
console.log(arr.slice(1,2)) // return the index to index value
arr.reverse(arr) // reverse the arr
console.log(arr)
let fruits = ["Apple", "Banana", "Cherry", "Mango"]
fruits.sort()
console.log(fruits,)
fruits.splice(1,2)  //splice( start index, delcount, add items)
console.log(fruits)
fruits.splice(1,0,"Banana","Cherry")
console.log(fruits)
fruits.forEach(( element,index)=> console.log(index, element))  //it doesnt create a new array
new_arr=fruits.forEach((element)=>element) // if we forEach in new arr it will became undefined
console.log(new_arr)
new_arr=fruits.map((element)=>element) // its create a new array and original arr are unchanged
console.log(new_arr)
arrr=arr.map(x=>x*2)
console.log(arrr)
new_arr=arrr.filter(x=>x>3) // need new space like map
console.log(new_arr)
console.log(arr.join("<"))