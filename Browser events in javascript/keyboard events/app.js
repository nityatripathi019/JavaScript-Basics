//mouse events
//iss function k andr hm event pass kr skte h jisse hm e aur event se denote krte h ye iske through hme kuch events milte h
let btn = document.querySelector("button");
// btn.addEventListener("click",function(event){
//     console.log(event);//click ek pointerevent h
//     console.log("btn was clicked");
// })
//  btn.addEventListener("dblclick",function(event){
//     console.log(event);//dblclick  mouseevent deta h
//     console.log("btn was clicked");
// })

let input = document.querySelector("#input");
//keydown this event is used when we press the key and it goed inside and for up we use keyup event
// input.addEventListener("keydown",function(){//hm koi bhi key press krenge hmara keydown wala event trigger hoga
//     console.log("key was pressed");
// })

// input.addEventListener("keyup",function(event){//jaise hm key ko release krenge hmara ye event trigger ho jayega
//         // console.log("key was released");
//         // console.log(event);
//         console.log("key:",event.key);
//         console.log("code:",event.code);
//     })
    //byusing keycode and key we can create our game too
    input.addEventListener("keyup",function(event){
    //    console.log("code:",event.code);
       if(event.code=="ArrowUp"){
        console.log("character move forward");
       }
       else if(event.code=="ArrowDown"){
        console.log("character move backward");
       }
       else if(event.code=="ArrowLeft"){
        console.log("character move leftWard");
       }
       else if(event.code=="ArrowRight"){
        console.log("character move rightward");
       }
       else{
        console.log("dont move");
       }
    })