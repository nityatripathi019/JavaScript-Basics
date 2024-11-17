//Asynchronomus code//json placeholder website 
 async function getdata(){
    setTimeout(function(){
     console.log("i am  your first async code");
    },3000)//3s
 }

 //to execute this function we need to call them
//  getdata();
 //aync-await hmesha ek promise return krta h 
//  let output = getdata();
//  console.log(output);

//fetch api:it provides an interface to fetch resources from internet
async function printData(){
    //get request ->async//aur awit tbhi lgeega jb function async ho ab jb tk hme response nhi aa jata next line nhi execute hogi
    let response =  await fetch('https://jsonplaceholder.typicode.com/posts/2/comments');//get request
     //  console.log(response);
    //json parses the data ye bhi ek async code h isliye ko bhi await krna pdega
    let data = await  response.json();
   
     console.log(data);
}
printData();
//scenario
//prepare url/apin endpoint =>sync
//fetchdata=>sync//agr hm isme await mhi lgaayenege to process nhi chl payega kynki data fetch hone me time lg skta h aur code next line pr chla jayega//pr chahe to code ko yhi pr rok skte h awit ki help se jb tk output nhi aayega tb vonext line pr nhi jayega
//process data =>sync code h//

