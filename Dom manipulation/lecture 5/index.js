// document.querySelector("h1").innerText = "Peter Parker";
let para = document.querySelector("p");
// console.log(para);
// innerText :it shows only that content that is visible on the screen
// console.log(para.innerText);
//textContent:it shows content that is written on markup text excluding all tags in it
//jaise hmari line html wale page me end hogi vaise hi isme show hogi baclslash n ki madad se textcontent data html page se fetch krta h
//isme vo text bhi dikhta ho jiski hm styling hidden ya display none kr dete jo ki textcontent me nhi dikhta h 
// console.log(para.textContent);
//innerHtml isme hme links bgera bhi show  hoti h isme inner tags bhi dikhai dete h
// console.log(para.innerHTML);
//outerHTML:this shows all inner and external html tag too
// console.log(para.outerHTML);
//jb hme normal text dena hota h tb hm innertext use krte h aur jb hme inner tag dene hote h tb hm innerHTML use krte h jaise manlo koi cheej bold krni h uske liye hme bold tag lgana pdega agr ye cheej hm innertext se krenge to ye cheej tag bhi broser pr display honge but yhi cheej hm innerHTML se kr skte h
// para.getAttribute("class");

//classlist ka use krke hm jitni bhi classes lgi hoti h kisi bhi elememnt pr vo uski list show ho jati h jaise ki
//through classlist we can add classes remove classes 
// classlist.add()to add new classes
// classlist.remove()to remove classes
// classlist.contains()to check if class exist
// classlist.toggle()to toggle between add  & remove 
//toggle ka kaam hota h agr element k and class exist kr rhi h to remove kr do aur agr nhi to add kr do

//Navigation : parentElement children previousElementSibling/nextElementSibling

let ul = document.querySelector("ul");
console.log(ul.parentElement);
console.log(ul.children);
console.log(ul.nextElementSibling);
console.log(ul.previousElementSibling);
console.log(ul.childElementCount);

//adding elements 
//appendChild() //append()//prepend()//inserAdjecentElement(position,element)position:beforebegin,afterbegin,beforeEnd.afterEnd

let para2 = document.createElement("p");
para2.innerText = "Hi i am new para";
para2.style.cssText = "color:red;"
let box = document.querySelector(".box");
// box.appendChild(para2);//appendChild append the element at the end of parent element
box.append(para2);
//with append we not only add the element but we can also append text whenever we want to insert or any tag inside it append bhi last me cheeje insert krta h
let btn = document.createElement("button");
btn.innerText="click me";
//  para2.append(btn);
para2.append(",welcome to my channel");

//prepend iski madad se hm cheeje starting me add kr skte h
para2.prepend(btn);
box.prepend(para2);
para2.prepend("hello jee aapka swagat h");

//insertAdjecentElement(position,element)

let para3 = document.createElement("p");
para3.innerText="Hi, I am third para";
para3.style.cssText = "color:green;font-size:25px;"
// beforebegin ye hme element k shuruat hone se phele hi cheeje insert kr deta h
box.insertAdjacentElement("beforebegin",para3); //beforebegin se aap element k shuru hone se phele usse place kr skte ho 
//afterbegin se aapuss element k andr uske content ks tart hone se phele place kr skte ho
// box.insertAdjacentElement("afterbegin",para3);
// box.insertAdjacentElement("beforeend",para3);//before end element k end hone se phle usse place kr skte ho
// box.insertAdjacentElement("afterend",para3);//agr app element k baad add krna chahte ho to afterend ka use krte h

//Removing elements:removeChild(element) ,remove(element);
// removechild appendchild ki tarh kaam krta h aur remove append ki tarh
//jaise manlo hm para3 ko remove Krna chahte h to uske liye hme parent element chayie hoga
//but remove se hm directly remove kr skte h kisi bhi element ko

let body = document.querySelector("body");
// body.removeChild(para3);
para3.remove();
para2.remove();
// body.remove();

