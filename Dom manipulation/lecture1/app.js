// fetching element with id

// let element = document.getElementById("fheading");
// console.log(element);
// element.style.backgroundColor="red";

// let para = document.getElementsByClassName("para");
// para[0].style.backgroundColor="green";
// para[1].style.backgroundColor = "orange";
// para[0].style.fontSize = "1.3rem";
// para[0].style.color = "yellow";
// para[2].style.backgroundColor ="yellow";

// aceesing element with querselector

// let div = document.querySelector("div");
// console.log(div);
// console.log(document.querySelectorAll("div"));
// console.log(document.querySelectorAll("div")[0].outerHTML);
// console.log(document.querySelectorAll("div")[0].innerHTML);
// console.log(document.querySelectorAll("div")[0].innerText);
// console.log(document.querySelectorAll("div")[0].textContent);
// console.log(document.querySelectorAll(".welcome"));
// let myElement = document.querySelectorAll(".welcome");
// console.log(myElement)
// console.log(myElement[1].innerHTML)
// console.log(myElement[1].innerHTML = "hello myself diya");

// innerHTML
// let myElement = document.getElementById("myPara");
// console.log(myElement.innerHTML);//innerHTML shows content also all those tags that comes under it
// console.log(myElement.innerText);//innerText only shows contents
// // console.log(myElement.innerText="hello jee aapka swagat hai")
// console.log(myElement.outerHTML);
// console.log(myElement.textContent);

// let para1 = document.getElementById("codeHelp");
// console.log(para1.textContent);//with textContent we will we able to access to those property those are hidden

// creation of a new element using createElement()method with this we can create para,div,heading

let newElement1=document.createElement("div");
console.log(newElement1);

let newElement2 = document.createElement("h1");
console.log(newElement2);

let newElement3 = document.createElement("p");
// now we will add some content inside these elements that created dynamically
console.log(newElement1.innerText = "hello guys!");
console.log(newElement2.textContent="aapka swagat");

let paragraph = document.createElement("div");
console.log(paragraph);
paragraph.innerText = "aa jao bhai sare! khel shuru hone wala hai";

// adding element here syntax
// parentnode.appendChild(node);

let newChild = document.body.appendChild(paragraph);

let h2 = document.createElement("h2");
console.log(h2);
h2.innerText = "Welcome to coding world!"

document.body.appendChild(h2);

// Adding style inside css
// two ways first through style second cssText
// through style we can add only single property at a time while with cssText we can add multiple property
let element = document.getElementById("myPara");
element.style.fontSize = "30px";
element.style.color = "green";
element.style.fontFamily = "sans-serif";

let element4 = document.querySelector("h2");
// element4.style.color = "blue";
element4.style.cssText = "color:blue;font-size:2rem;font-family:sans-serif;";

// setAttribute()this attribute is used to set or update an existing attribute inside an element
element.setAttribute("id","para1");
element.setAttribute("class","para");