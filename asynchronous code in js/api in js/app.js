
// let url = "https://catfact.ninja/fact";

// fetch(url)
// .then((res)=>{
//     console.log(res);
    
//     res.json()
//     .then((data)=>{
//         console.log(data);
//     })

// })
// .catch((err)=>{
//     console.log(err);
// })

// fetch(url)
// .then((res)=>{
    
//     return res.json();
// })
// .then((data)=>{
    
//     console.log(data.fact);
//     return fetch(url);
    
// })
// .then((res2)=>{
   
//     return res2.json();
// })
// .then((data2)=>{
//     console.log("data2-",data2.fact);
//     return fetch(url);
// })
// .then((res)=>{
//     return res.json();
// })
// .then((data)=>{
//     console.log("data3-",data.fact);
// })
// .catch((err)=>{
//     console.log("Error:",err);
// })

// console.log("heloo jee");

//apis call with async await

// async function getData(){
//     // let data = fetch(url);
//     // console.log(data);//isme promise me output undefined ayega kyunki jaise hi hm fn ko call kreneg vo hme output de dega wait nhi krega
//   let data = await fetch(url);
//   console.log(data);
//   let res = await data.json();
//   console.log(res);
//   console.log(res.fact);
// }

// async function getData(){
//    await fetch(url)
//     .then((res)=>{
//         console.log(res);
//         return res.json();
//     })
//     .then((data)=>{
//         console.log(data);
//         console.log(data.fact);
//     })
// }

// async function fetchData(){
//  try{
//     let data = await fetch(url);
//     let res = await data.json();
//     console.log(res.fact)
    
//     let data2 = await fetch(url);
//     let res2 =  await data2.json();
//     console.log(res2.fact);
//  }
//  catch(err){
//   console.log(err);
//  }
//}

//axios in js

// async function getdata(){
//    try{
//     let res = await axios.get(url);
//     // console.log(res);
//     // console.log(res.data);
//     console.log(res.data.fact);
//    }
//   catch(err){
//     console.log(err);
//   }

// //   console.log("i am done");
// }
// getdata();
//facts about cat
// let btn = document.querySelector("button");
// btn.addEventListener("click", async ()=>{
//     // console.log("button was clicked");
//     let data = await getData();
//     // console.log(data);
//     let para = document.querySelector("#result");
//     para.innerHTML=data;

// })

// async function getData(){
//     try{
//         let res = await axios.get(url);
//         return (res.data.fact);
//     }
//     catch(err){
//         console.log("err",err);
//         return "data not found";
//     }
// }
//dog img generator
// let url2 ="https://dog.ceo/api/breeds/image/random";

// let btn = document.querySelector("button");

// btn.addEventListener("click",async function(){
//     let link = await getImage();
//     let img = document.querySelector("#dgimg");
//     img.setAttribute("src",link);
// })

// async function getImage(){
//     try{
//         let res = await axios.get(url2);
//       return(res.data.message);
//     }
//     catch(err){
//         console.log("err",err);
//         return "img not found";
//     }
// }
// getImage();
//code of joke
// let url3 = "https://icanhazdadjoke.com/";

// async function getJkes(){
//     try{
//         const config = {headers:{Accept:"application/json"}};
//         let res = await axios.get(url3,config);
//         console.log(res.data);
//         console.log(res.data.joke);

//     }
//     catch(err){
//         console.log(err);

//     }
// }
// getJkes();

//get list of univeristiy by entering country name

// let url="http://universities.hipolabs.com/search?name=";

// let country ;

// let btn = document.querySelector("button");
// btn.addEventListener("click",async function(){
//     let input = document.querySelector("input");
//     country = input.value;
//  let output = await getUniversity(country);
// //  console.log(output)
//  showCountry(output);

// })

// function showCountry(output){
//     let ul = document.querySelector("#clgs");
//     ul.innerText="";
//     for(list of output){
//         //   console.log(list);  
//         //  console.log(list.name);
//          let li = document.createElement("li");
//          li.innerHTML= list.name;
         
//          ul.insertAdjacentElement("afterbegin",li);
//     }
// }

// async function getUniversity(country){
// try{
//     let res = await axios.get(url + country);
//     return(res.data);
// }catch(er){
//     console.log(er);
//     return "data not found";
// }
// }
// // getUniversity();

//fetch university name using api

let url="http://universities.hipolabs.com/search?name=";
let country = "india";

let btn = document.querySelector("button");
btn.addEventListener("click",async()=>{
 let output = await fetchStateData();
 let ul = document.querySelector("#clgs");
 for(let list of output){
 console.log(list.name);
//  let li = document.createElement("li");

 }
})

async function fetchStateData(){
    try{
   let res = await axios.get(url + country);
   return(res.data);
     
    }
    catch(err){
        console.log(err);
        return "data not found";
    }
}

