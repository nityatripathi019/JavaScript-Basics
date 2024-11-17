// square and sum the array eleemnts using the arrow function and then find the average of the array

let arr = [1,2,3,4,5,6,7,8,9,10];

let square = arr.map((value)=>value*value);
console.log(square);
let sum = square.reduce((acc,val)=>acc+val);
console.log(sum);
let avg = sum/(arr.length);
console.log(avg);

// create an array using map function whose each element is equal to the element plus 5

let updatedArr = arr.map((value)=>value+5);
console.log(updatedArr);

// an array whose elements are in uppercase 

let names = ["peter","parkar","hulk","spiderman","shktiman"];
let updatedName = names.map((name)=>name.toUpperCase());
console.log(updatedName);

// q4 
function doubleAndReturnArgs(arr,...args){//very very imp ques
 let output = [...arr,
    ...args.map((val)=>val*2)
 ];
 console.log(output);
}
doubleAndReturnArgs([1,2,3,4,5],4,5,6);
doubleAndReturnArgs([34],4,5,6);

//practice ques qu5 part8
let obj1={
    name:"Rohan kumar",
    age:23,
    desg:"SDE"
}
let obj2={
    email:"rohankumar19@gmail.com",
    phoneno:8787399031
}
let mergeObj = {...obj1,...obj2};
console.log(mergeObj);