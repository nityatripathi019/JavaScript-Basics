// call stack in js

// function hello() {
//     console.log("inside hello function");
//     console.log("hello jee apka swagat h")
// }

// function demo(){
//     console.log("calling hello fn from demo fn");
//     hello();
// }

// console.log("calling demo fn");
// // demo();
// console.log("calling done!bye!");

// visualising call stack
function one(){
    return 1;
}
function two(){
    return one()+one();
}
function three(){
    let ans = two()+one();
    console.log(ans);
}
three();

//js breakpoint part11
// js is single threaded mtlb ek time pe ek hitask excute krti h