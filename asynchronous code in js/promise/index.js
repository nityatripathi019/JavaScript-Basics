// let newPromise = new Promise((resolve, reject) => {
//       console.log("hello world");
// })//when we pass no value to it than it shows output alonwith pending promise
// console.log(newPromise);

//now we send some values with promise

// newPromise = new Promise((resolve,reject)=>{
//     console.log("hello world");
//     resolve(10001);
// })
// console.log(newPromise); //here it shows promise fulfilled

//now we can throw some error when our promise is not fulfilled
// newPromise = new Promise((resolve,reject)=>{
//     console.log("hello jee apka swagat h")
//     reject(new Error("unexpected error has found"));
// })
// console.log(newPromise);

// function printName(){
//     console.log("hello my name is diya tripathi");
// }
// setTimeout(printName,10000);//10s//this is asynchronomus task

//so when we want to parallaly run a synchronum and asynchronomus part than we put asynchronous task inside aprmise and it will return value fulfilled,pending and rejected

// let firstPromise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//      console.log("welcome to virat world");
//     },5000);
//     resolve(1);
// })
// console.log(firstPromise);

//then and catch in promise
//if our promise get fulfilled than we than will excuted if promise reject than catch will executed ..here are the code

// let promise1 = new Promise((resolve,reject)=>{
//     let success = false;
//     if(success){
//         resolve("promise fulfilled");
//     }
//     else{
//         reject("internal server error");
//     }
// });
// promise1.then((msg)=>{
//     console.log("than ka msg h:",msg);
// }).catch((msg)=>{
//     console.log("catch ka msg:",msg);
// })
// 

//we can use multiple then and this concept reffered to as promise chaining
// promise1.then((msg)=>{
//     console.log("first msg:",msg);
//     return "promise fulfilled second msg"
// }).then((msg)=>{
//     console.log("second msg:",msg);
//     return "promise fulfilled third msg";
// }).then((msg)=>{
//     console.log("third msg:",msg);
// }).catch((error)=>{
//     console.error(error);
// }).finally((msg)=>{
//     console.log("mai to final hu mai to chalunga hi chalunga");
// })
// console.log(promise1);


//we can create multiple promisese and if we want to run them parallay for that we can use Promise.all
 let promise2 = new Promise((resolve,reject)=>{
    setTimeout(resolve,1000,"first");
})
 let promise3 = new Promise((resolve,reject)=>{
    setTimeout(resolve,2000,"second");
})
let promise4 = new Promise((resolve,reject)=>{
    setTimeout(resolve,4000,"third");
})
console.log("**************************");

// Promise.all([promise2,promise3,promise4])
// .then((values)=>{
//     console.log(values);
// })

// order of calling is very important in this
Promise.all([promise3,promise4,promise2])
.then((values)=>{
    console.log(values);
})
//if any of the promise is rejected than whole promise will get rejected and it will thorw rejected or error
// promise2 = new Promise((resolve,reject)=>{
//     setTimeout(resolve,1000,"hello");
// })
// promise3 = new Promise((resolve,reject)=>{
//     setTimeout(resolve,2000,"welcome")
// })
// promise4 = new Promise((resolve,reject)=>{
//     setTimeout(reject,4000,"unexpected error");
// }).then((value)=>{
//     console.log(value);
// }).catch((error)=>{
//     console.log("error:",error);
// })

// setTimeout(()=>{
//     console.log("hello jee aapka swagat h");
// },0);//this will act like synchronous