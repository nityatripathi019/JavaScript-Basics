// callback hell in js
let h1 = document.querySelector("h1");
// changing color

// setTimeout(()=>{
//     h1.style.color="red";
// },1000);
// setTimeout(()=>{
//     h1.style.color="orange";
// },2000);
// setTimeout(()=>{
//     h1.style.color="green";
// },3000);
//above code is not much appropriate

// function changeColor(color,delay){
//     setTimeout(()=>{
//         h1.style.color=color;
//     },delay)
  
// }
// changeColor("red",1000);
// changeColor("green",2000);
// changeColor("blue",3000);

// accha code
// function changeColor(color,delay,nextChangeColor){
//     setTimeout(()=>{
//         h1.style.color=color;
//         if(nextChangeColor)nextChangeColor();
//     },delay)
  
// }
// changeColor("red",1000,()=>{
//     changeColor("orange",1000,()=>{
//         changeColor("green",1000,()=>{
//             changeColor("pink",1000,()=>{
//                 changeColor("violet",1000);
//             })
//         })
//     })
// })