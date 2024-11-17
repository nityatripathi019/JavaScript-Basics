// foreach()function
// let num = [1,2,3,4,,5,6,7,8,9,10];

//  let value = num.forEach((value)=>{
//    console.log(value);
// })

// we can use foreach on array of object
let student = [
    {
      name:"aman dhattarwal",
      marks:94,
      age:27
    },
    {

        name:"shraddha khapra",
        marks:93,
        age:25
    },
    {
     name:"diya tripathi",
     marks:100,
     age:20
    }
]
student.forEach(function(value){
    // console.log(value);
    // console.log(value.name)
})

// map()this will also work same as foreach but it will return same size of array
let number = [2,4,5,6,7,8,21,23,45];
// let output = number.map(num=>num*num);
// console.log(output);
// let output = number.map((value)=>{});
// console.log(output);//so it will same size of array and each value is undefined

//now we want to create a new array named gpa which will consist the value of student
let marks = student.map((value)=>value.marks);
// console.log(marks);
let gpa = student.map((value)=>{
    return value.marks/10;
})
// console.log(gpa);

// fiter()this will return the array for which value is true and if value is false than those element it will not return

// let output = number.filter((value)=>{
    // return value>5;
// })
// console.log(output);

// every()method in js it will return value true for all values of array if any element of array is false than it will return false
let even = [2,4,6,8,10].every((el)=>el%2==0);
// console.log(even);//so here it return true
//now we do some change 
// even = [2,4,6,8,10,3].every((el)=>el%2==0);
// console.log(even);//it will return false

//some()method is similar to logical or operator
// even= [2,4,6,8,1,3,5].some((el)=>el%2==0);
// console.log(even);//it will retirn true

// reduce()method reduces the array to a single value
//syntax: arr.reduce(reducer function with 2 variable for(accumulator,element));
// let nums = [1,2,3,4];
// let finalValue = nums.reduce((acc,value)=>acc+value);
// console.log(finalValue);

//now we will find maximum value from an array using reduce method

let nums = [2,3,4,56,78,23,45,12,45,67,89,67,90];
let result = nums.reduce((max,el)=>{
    if(el>max){
        return el;
    }
    else{
        return max;
    }
})
// console.log(result);

// practice ques
// check if all numbers in our array are multiple of or not

const arr = [20,10,3050,60,70];
let ans = arr.every((value)=>value%10===0);
// console.log(ans);

//create an array to find the minimum no in an array
let arr2=[10,0,-3,-8,-6,7,3,4,6,8,9,-8.5];

let minimumValue = arr2.reduce((min,el)=>{
if(min<el){
    return min;
}
else{
    return el;
}
})
// console.log(minimumValue);

// default parameters
// these are the parameters when no value assign to the parameter during call than by default we sent some value in temporaray paarameter so they assigned and if value passed than those value assigned in it

function sum(a=4,b=3){
    console.log(a+b);
}

// sum(2);
// sum(2,6);
// sum(8,11);

// spread (...)expands an iterable into multiple values

let arr3 = [2,3,4,5,6,7,9,8,2,10,9,-3,-8,-89,90,89];
console.log(...arr3);//it will return the output same as console
// now we want to find out min value from an array
let minimum = Math.min(...arr3);
console.log(minimum);
let maximum = Math.max(...arr3);
console.log(maximum);
console.log(arr3);

//spread operator with string

let str = "apnacollege";
// console.log(...str);

//spread operator with array literals
//if we want to copy an array without making any change with initial array
let arr4 = [1,2,3,4,5,6,7,8,9,10];

// let newArr = [...arr4];
// console.log(newArr);
// newArr.push(-4);
// console.log(newArr);

//now we want to copy a string
// let chars = [..."apnacollege"];
// console.log(chars);

//spread operator with object literal

const data = {
    email:"xyz@gmail.com",
    password:"pqrst"
}

let datacopy ={...data};
console.log(datacopy);
datacopy.id=23;
console.log(datacopy);
datacopy={...data,id:45,phno:989100000};
console.log(datacopy);
console.log(data);

arr1=[1,4,5,6,7,8,9,4,3];
// we can convert this array into object
let obj = {...arr1};//obj key:value pair so it will use index as key
console.log(obj);
console.log(obj["5"]);

let str2 = "hello welcome ";
let obj1 = {...str2};
console.log(obj1);

//rest operator in javascript
// rest operator allows a function to take an indefinite number of arguments and bundle them in an array
// rest operator is opposite of spread operator //spread opertor spread the iterable values while rest operator combines all the iterable values
//rest operator bundles the indefinite number of arguments into an array

// console.log(Math.min(1,2,4,5,67,89,90,-3,-6,8));//both of them work on rest operator 
// console.log(Math.max(1,2,4,5,67,89,90,-3,-6,8));//

function printSum(...args){
    let sum = 0;
    for(let i=0;i<args.length;i++){
     sum +=args[i];
    }
    console.log(`sum :${sum}`);
}
// printSum(1,3,4,5,6,7,8,9,10,12,23,45,67);

function minValue(a,b,c,d){
    console.log(arguments);//this is not an array it is a collection
    console.log(arguments.length)
    console.log(typeof(arguments));
    console.log(arguments.id=1);
    console.log(arguments);
}
// minValue(3,4,5,6);

function sum(...args){
    return args.reduce((acc,val)=>acc+val);
}
console.log("sum of all values:",sum(1,2,45,67,-9,67,45));

//we can create our min and max function
function min(...args){
    return args.reduce((acc,el)=>{
        if(acc<el){
            return acc;
        }
        else{
           return el;
        }
    })
}
// console.log("minimum value:",min(1,2,3,4,5,0,-5,-8));

// Destructuring in array
let names = ["peter","bruce","tony","harbhajan","suresh raina","dhoni"];
// let winner = names[0];
// let runnerup=names[1]
// let secondRunnerup =names[2];
let[winner,runnerup,secondRunnerup]=names;//similar thing we have done here
console.log(winner,runnerup,secondRunnerup);

// destructuring with object
const student1 ={
    name:"karan",
    age:14,
    class:9,
    subjects:["hindi","english","math","science"],
    username:"karan123",
    password:"abcde",
   city:"pune"
}

// let {username,password}=student1;


//if we want to store value in some variable than we can do this way
// let{username:user,password:pass}=student1;
// console.log(user);
// console.log(pass);
//if we want to fetch some value that dosent exist in the object
let{name,username,password,city="mumbai"}=student1;
console.log(username);
 console.log(password);
console.log(name);
console.log(city);