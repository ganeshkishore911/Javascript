for (let i=0;i<10;i++){
    console.log(i)
}
for (let i=10;i>0;i--){
    console.log(i)
}
//pre incre
let i=5
console.log(++i) // increatment first as 6
console.log(i) // 6
//post incre
let c=5
console.log(c++) // first is 5 
console.log(c) // as 6

// while loop
let v=5
while (v>0){
    console.log(v)
    v--
}
//while loop
let u=0;
while(u<=5){
    console.log(u);
    u++;
}//0 1 2 3 4 5
 
//do while
i=0;
do{
    console.log(i)  // runs first then check the condition
    i++;
}while(i<3);

//break
for(i=0;i<=5;i++){
    console.log(i,"break");
    if(i==3){
        break
    }
}
 
i=10;
while(i<=15){
    if(i==12){
        i++  // if not increment means its stays 12 and run forever
        continue;
    }console.log(i)
    i++;
}
 
let arr=[1,2,22,4,5]
for (let i of arr){   //for of is arr
    console.log(i)
}
let obj={name:"kishore",age:22,location:"chennai"}
for (let key in obj){
    console.log(key, obj[key])    //for in is objects
}