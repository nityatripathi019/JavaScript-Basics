
// function saveData(data,success,failure){
// let internetSpeed = Math.floor(Math.random()*10)+1;
// if(internetSpeed>3){
//     // console.log(`your data was saved:${data}`);
//     success();
// }
// else{
//     // console.log("your connection is too weak....data not saved");
//     failure();
// }
// }

// saveData("apna college",()=>{
//     console.log(" success: your 1 data is successfully saved")
//     saveData("shraddha khapra",()=>{
//         console.log(" success2: your second data is saved");
//         saveData("diya tripathi",()=>{
//             console.log(" succes3:your 3rd data is saved");
//         },()=>{
//             console.log(" failure3:your 3rd data is failed to save")
//         })
//     },()=>{
//         console.log(" failure2: your 2nd data is failed to save");
//     })
// },()=>{
//      console.log(" failure: weak connection data is not saved");
// })

// function saveToDb(data){
    
//     return new Promise((resolve,reject)=>{
//         let internetSpeed = Math.floor(Math.random()*10 + 1);
//         if(internetSpeed>3){
//             resolve("success:data was saved");
//         }
//         else{
//             reject("failure:internal server problem");
//         }
        
//     });
// }

// let promise = saveToDb("apna college");

// promise.then((msg)=>{
    // console.log("resovle msg:",msg);
// }).catch((msg)=>{
//     console.log("reject ka msg:",msg);
    
// })
// console.log(promise);
// saveToDb("apna college")
// .then(()=>{
//     console.log("data1 saved");
//     return saveToDb("shraddha khapra");
// }).then(()=>{
//     console.log("data2 saved");
// })
// .catch(()=>{
//     console.log("data rejected");
// })

// saveToDb("apna college")
// .then((result)=>{
//     console.log("data1 saved");
//     console.log("result of promise:",result)
//     return saveToDb("diya tripathi");
// }).then((result)=>{
//     console.log("data2 saved");
//     console.log("result of promise:",result);
//     return saveToDb("shraddha khapra");
// }).then((msg)=>{
//     console.log("data3 saved");
//     console.log("result of promise:",msg);
// }).catch((error)=>{
//     console.log("promise was rejected");
//     console.log("result of promise:",error);
// })

// let h1 = document.querySelector("h1");

// function changeColor(color,delay){
// return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         h1.style.color=color;
//         resolve("color changed");
//     },delay);
// })
// }
// changeColor("red",1000)
// .then((msg)=>{
//     console.log("color1 has changed");
//     return changeColor("green",1000);
// }).then((msg)=>{
//     console.log("color2 has changed");
//     return changeColor("blue",1000)
// }).then((msg)=>{
//     console.log("color3 has changed");
// })

// async code in js
// async function greet() {
//     console.log("hello world");
// throw("internal server error");
   
// }

// async function greet(){
//     // throw "page 404 not found";
//     return "hello";
// }

// greet().then((result)=>{
//     console.log("promise fullfiled ")
//     console.log("result:",result);
// }).catch((err)=>{
//     console.log("error found :",err );
// })

// let demo = async ()=>{
//   console.log("hello jee");
// }

//chnage color function
let h1 = document.querySelector("h1");

// function changeColor(color,delay){
//    return new Promise((resolve,reject)=>{
//       setTimeout(()=>{
//       h1.style.color = color;
//       resolve("color changed");
//       },delay);
//    })
  
// }

// async function show() {
//    await changeColor("red" , 1000);
//    await  changeColor("green" , 1000);
//    await  changeColor("cadetblue" , 1000);
//    await  changeColor("blue" , 1000);
//    await  changeColor("chocolate" , 1000);
// }

// function getNum (){
//     // console.log(10);
//     return new Promise((resolve,reject)=>{
//        setTimeout(()=>{
//         let randNo = Math.floor( Math.random()*10)+1;
//         console.log(randNo);
//         resolve();
//        },1000)
//     })
// }
// async function demo(){
//    await getNum();
//   await  getNum();
//   await  getNum();
//   await  getNum();
//   await  getNum();
//          getNum();
// }

function getNum(){
   return  new Promise((resolve,reject)=>{
     setTimeout(()=>{
      let randNo = Math.floor( Math.random()*10)+1;
      console.log(randNo);
      resolve();
     },1000)
   })
}

async function print(){
   await getNum();
   await getNum();
}

// function changeColor(color,delay){
//    return new Promise((resolve,reject)=>{
//       setTimeout(()=>{
//      let num = Math.floor( Math.random()*5)+1;
//      if(num>3){
      
//       reject("promise rejected");
//      }
//       h1.style.color = color;
//       console.log(`color changed ${color}`);
//       resolve("color changed");
      
//       },delay);
//    })
  
// }
// async function show() {
//    await changeColor("red" , 1000);
//    await  changeColor("green" , 1000);
//    await  changeColor("cadetblue" , 1000);
//    await  changeColor("blue" , 1000);
//    await  changeColor("chocolate" , 1000);

//    let a = 5;
//    console.log(a);
//    console.log("sum:",a+3);
// }

// handling rejections with await
function changeColor(color,delay){
   return new Promise((resolve,reject)=>{
      setTimeout(()=>{
     let num = Math.floor( Math.random()*5)+1;
     if(num>3){
      
      reject("promise rejected");
     }
      h1.style.color = color;
      console.log(`color changed ${color}`);
      resolve("color changed");
      
      },delay);
   })
  
}
async function show() {
   try{
      await changeColor("red" , 1000);
      await  changeColor("green" , 1000);
      await  changeColor("cadetblue" , 1000);
      await  changeColor("blue" , 1000);
      await  changeColor("chocolate" , 1000);
   
   }catch(err){
      console.log("error caught");
      console.log(err);
   }
   
   let a = 5;
   console.log(a);
   console.log("sum:",a+3);
}

//json k andr jo key hoti h vo string hoti json lgta js object ki tarh but ye alg h js me undefined but isme udefined error throw krega genrally hme apis json format me milegi//www.json.org


// let randFact = '{"fact":"Many Egyptians worshipped the goddess Bast, who had a woman\u2019s body and a cat\u2019s head.","length":84}';
// // console.log(randFact);
// let result = JSON.parse(randFact);
// console.log(result);
// console.log(result.fact);
// console.log(result.length);

// let json = JSON.stringify(result);
// console.log(json);
// console.log(typeof json);

// let student = {
//    name:"shraddha khapra",
//    cgpa:9.3,
//    rollno:45,
//    address:"delhi"
// }
// console.log(student);
// console.log(JSON.stringify(student));//ab ye json object bn gya h generally json.stringify ka use hm apni api se ko create krne k liye use krte h

//api

let url ="https://catfact.ninja/fact";
fetch(url);