
// let form = document.querySelector("form");
// form.addEventListener("submit",function(event){
// event.preventDefault();
// let user = document.querySelector("input");
// let passwd = document.querySelector("#pass");
// console.dir(user)
// console.log(user.value);
// console.dir(passwd)
// console.log(passwd.value)
// alert(`Hi ${user.value} your password is ${passwd.value}` );
// })

// form.addEventListener("submit",function(event){
//     event.preventDefault();
    // console.dir(form);
    // // console.log(form.elements[0].value);
    // // console.log(form.elements[1].value);
    // let user = this.elements[0];//form.elements[0]
    // let pass = this.elements[1];
    // console.log(user.value);
    // console.log(pass.value);
// })

//more events
//change events:the change event occurs when the value of an element has been changes(only works on <input>,<textarea>and<select>elements)
// let user = document.querySelector("#user");
// user.addEventListener("change",function(){//ye change value initail aur final value ko track krti h
//     console.log("change event");
//     // console.log(user.value);
//     console.log(this.value);
// })

// user.addEventListener("input",function(){
//     console.log("input event");//ye ek ek changes pr trigger ho jayega hm input k andr koi bhi single word bhi chnage ya fir backspace bhi krenge ye usko bhi notice krega jabki change event finaly changed value show krta h
//     console.log(this.value);
// })

//Activity
let userInput = document.querySelector("#user");
let para = document.createElement("p");
para.style.cssText="font-size:2rem;color:green;";
userInput.insertAdjacentElement("afterend",para);
userInput.addEventListener("input",function(){
    para.innerText = userInput.value;
})

