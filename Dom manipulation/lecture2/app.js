
// first we will create new element using dom
let newElement = document.createElement("div");//here we have created new element
newElement.innerText = "welcome to programming";//here we add content inside element
document.body.appendChild(newElement);//we add this element on document
//now we will add attribute inside element such id and class and style
newElement.setAttribute("id","firstdiv");
newElement.setAttribute("class","heading");
// newElement.setAttribute("style","font-size:20px");
// now adding multiple css dynamically
newElement.style.cssText="font-size:20px;font-family:sans-serif;color:blue;";

let h1 = document.getElementById("welcome");
h1.style.color = "green";

let para = document.querySelector("p");
para.style.fontSize="20px";

let btn = document.querySelector("button");
function addAttribute(){
    btn.setAttribute("id","btn");
    btn.setAttribute("style","background-color:blue;padding:1.2rem;border-radius:5px");
}

let getAttributeName = h1.getAttribute("title");
console.log(getAttributeName);