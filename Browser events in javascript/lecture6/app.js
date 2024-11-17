
let para = document.querySelector("p");
para.style.fontSize="2rem";
para.addEventListener("click",function(){
   
    console.log("para was clicked");
})

let box = document.querySelector(".box");
box.addEventListener("mouseenter",function(){
    console.log("mouse inside div");
})

//this in Event listeners

let para2 = document.querySelector(".para2");
let box2 = document.querySelector(".box2");
let btn = document.querySelector("button");

// para2.addEventListener("click",function(){
//     console.log(this);//yha pe this para object ko denote kr rha h jb hm isko console krenege to para display ho jayega
//     console.log(this.innerText);
//     this.style.backgroundColor = "blue";
//     this.style.fontSize = "2rem";
    
// })
//similarily with div and btn too
//ek cheej aur dhan rakhni h hme normal function use krna hoga agr arrow function use kiya to vo output me window object show krega kymki arrow function ka this parent element ko display krta h whi this ko agr normal function k sath use krenge to vo imeditae wale ko call krega jisme uska use kiya jata h
// box2.addEventListener("click",function(){
//     console.log(this);
//     console.log(this.innerText);
//     this.style.backgroundColor = "blue";
//     this.style.fontSize = "2rem";
    
// })

// btn.addEventListener("click",function(){
//     console.log(this);
//     console.log(this.innerText);
//     this.style.backgroundColor = "blue";
//     this.style.fontSize = "2rem";
    
// })

//aise baar baar same code likhne se behter h hm same cheej iss tarh se achieve kr kr skte h

function changeColor(){
    console.log(this);
    console.log(this.innerText);
    this.style.backgroundColor = "blue";
    this.style.fontSize = "2rem";
    // 
}

para2.addEventListener("click",changeColor);
box2.addEventListener("click",changeColor);
btn.addEventListener("click",changeColor);