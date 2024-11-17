

let inputBtn = document.createElement("input");
inputBtn.setAttribute("type","text");
inputBtn.innerText = "click me";

let body = document.querySelector("body");

let label = document.createElement("label");
label.innerText="Name:";
label.setAttribute("id","fname");
body.appendChild(label);
body.appendChild(inputBtn);
let btn = document.createElement("button");
btn.setAttribute("class","fbtn");
btn.textContent="click me";
body.appendChild(btn);
btn.style.cssText="margin:10px; padding:10px;background-color:blue;color:white;"

inputBtn.setAttribute("placeholder","username");
inputBtn.setAttribute("id","fname");
btn.setAttribute("id","btn");

let btn1 = document.querySelector("#btn");
console.log(btn1);
btn1.style.cssText="background-color:pink;color:white;margin-left:10px;";

let h1 = document.createElement("h1");
h1.innerText = "DOM Practice";
body.appendChild(h1);
h1.style.textDecoration="underline";
h1.style.color="purple";

let para = document.createElement("p");
para.innerHTML="Apna College <span>Delta</span> Practice";
body.appendChild(para);

let span = document.querySelector("span");
span.style.fontWeight= "900";

// practice question

let para2 = document.createElement("p");
para2.innerText = "Hey I'm red!";
para2.style.color="red";
body.append(para2);

let h3 = document.createElement("h3");
h3.innerText="I'm a blue h3!";
h3.style.color="blue";
body.append(h3);

let div = document.createElement("div");
body.append(div);
let h1tag = document.createElement("h1");
h1tag.innerText="I'm in a div";
div.append(h1tag);
let para3 = document.createElement("p");
para3.innerText="ME TOO!";
div.append(para3);
div.style.cssText="border:1px solid black;background-color:pink;" 