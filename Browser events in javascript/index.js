//onclick(when an element is clicked)
//onmoseenter(when mouse enters an element)
// let btn = document.querySelector("button");
// btn.onclick = function(){
//     console.log("button has clicked");

// }

// function sayHello(){
//     console.log("hello jee!");
// }
// btn.onclick=sayHello;
let btn = document.querySelectorAll("button");
// function btnClick(sayHello) {
//     for (let i = 0; i < btn.length; i++) {

//         btn[i].onclick = sayHello;
        
//     }
// }
// for(btn of btn){
//     btn.onclick=sayHello;
//     // console.dir(btn);
//     // btn.onmouseenter=()=>{
//     //     alert("you have entered");
//     // }
// }
function sayHello() {
console.log("button clicked")
}
function sayName(){
    console.log("apna college");
}
// btnClick(sayHello);
//
//addEventListener:syntax element.addElementListener(event,callbackfunction) jb bhi hme koi eventlistene krana hota tb hm iska use krte h
// we can add multiple eventlitener but we can add multiple onclick on same element
for(btn of btn){
//     btn.addEventListener("click",()=>{
    
//     console.log("button has clicked");
//     alert("button click hogya hai jee");
//     }      

// )
// btn.addEventListener("click",sayHello);
// btn.addEventListener("click",sayName);
// btn.onclick=sayHello;//iss case me jb hm multiple onclclick lgate h to sirf ek property dusre ko overlap kr le rhi h aur second wala fn chl raha h
// btn.onclick = sayName;
btn.addEventListener("dblclick",function(){
    console.log("you have double click me");
})
}

