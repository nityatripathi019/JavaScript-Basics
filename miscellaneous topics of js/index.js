// this keyword in js
// this keyword ka hm use krte h jb hm koi object k andr function define krte h aur vo function object k andr k hi parameter use krta to un parameter ko access krne k liye hm this keyword vaise js this keyword ka different diff jagh diff use hota h

const student = {
    name : "shraddha khapra",
    eng : 80,
    math:95,
    phy:90,
    chem:56,
    cs:98,
   getAvg(){
    let avg = (this.eng+this.math+this.phy+this.chem+this.cs)/5;
    // console.log(`average marks:${avg}`);
    console.log(`${this.name} got avg marks:${avg} `);
   }

}
// console.log(student.getAvg());

// try and catch //in try we write those line of code that may through error and than catch will execute

// console.log("hello world");
// console.log("hello world");
// console.log("hello world");
// console.log("hello world");
// try{
//     console.log(a);
// }catch(e){
//  console.log("this line may through error");
//  console.log(e);
// }
// console.log("hello world");
// console.log("hello world");
// console.log("hello world");

// arrow function in js

// let print = () =>{
//     console.log("welcome to this pyari duniya");
// };


let print = ()=>console.log("hello jee aapka swagat hai");
// print();

// const sum = (a,b)=>console.log(a+b);
// sum(3,5);
const mul =(a,b)=>{
    console.log(a*b)
}
// mul(33,89);

const cube = (a)=>console.log(Math.pow(a,3));
// cube(89);

const sub =(a,b)=>a-b;
// console.log(sub(5,3));

// practice question

const number = [34,10,23,45,80];

const arrAverage = (number)=>{
    let sum=0;
    let length=number.length;
    for(number of number){
        sum += number;
        
    }
    return sum/length;
   
}
// console.log(arrAverage(number));

// const even = (num)=>num%2==0?"even no":"odd";
// console.log(even(67));

// setTimeout()function
// syntax setTimeout(function,timeout)

// console.log("hello appka hmari iss duniya me swagat h");
// console.log("namaste duniya");
// setTimeout(function(){
//     console.log("apna college")
// },4000);//1000ms=1s
// console.log("welcome to");
// setTimeout(()=>{
//     console.log("hello jee apka swagat h");
// },3000);
// console.log("hello world");

// setInterval(function,interval) ye function bhi vaise hi kaam krega jaise settimeout krta h but isme cheeje baar excuted after that interval of time so to stop this we need to use clearInterval for this every function has diff id has assigned

// let id =setInterval(()=>{
//     console.log("hello my name is diya");
// },2000);
// console.log(id);
// console.log(clearInterval(id));
// console.log("hello jee");

// this with arrow function
//imp lecture  part 7js
const student1 = {
 name:"aman dhattarwal",
 marks:95,
 prop:this,
 getName : function(){  //this with normal function
  console.log(this);
  console.log(this.name);
 },
 getMark: ()=>{
    console.log(this); //parent k scope ko dekhega jo ki global scope yani iss time it comes under window object
    console.log(this.mark);//aur window object me marks to define h hi   //jo this keyword h vo arrow function k sath lexical scope behave krta h 
 },
 
 getInfo1:function(){
  setTimeout(()=>{
    console.log(this);
  },2000)
 },
 getInfo2:function(){
  setTimeout(function(){
    console.log(this);
  },2000)
 }
 
}
// student1.getName();
// student1.getMark();
// student.getInfo1;
// student.getInfo2;

// practice question
// write an arrow function that returns the saquare of a number"n"

// let square = (num)=>num*num;
// // console.log(square(45));

// let id2 = setInterval(()=>{
//     console.log("Hello World")
// },2000);

// setTimeout(()=>{
//     clearInterval(id2);
// },12000);

// const object = {
//     message:"hello,world!",
//     logMessage(){
//         console.log(this.message);
//     }
// };
// setTimeout(object.logMessage,1000);

