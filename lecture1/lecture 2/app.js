// odd number 
// for(let i = 1;i<=15;i++){
//     if(i%2!=0){
//         console.log(i);
//     }
// }

// print multiplication table of n
// let n = 5;
// for(let i=1;i<=10;i++){
//     console.log(n*i);
// }
// printing table from 1 to 20
// for(let i=1 ;i<=30;i++){
//     for(let j=1;j<=10;j++){
//         console.log(i*j);
//     }
//     console.log(" ");
// }

// guess movie game

// let movie = "avatar" ;
// let guess = prompt("guess the movie name");
 
// while((guess!=movie)&&(guess!="quit")){
//   guess = prompt("wrong guess!please try again");
// }
// if(guess==movie){
//     console.log("congrats!you have guessed right movie");
// }
// else{
//     console.log("you have quited the game");
// }

// let number = 1345678987 ;
// let count = 0;
// while(number>=1){
//     number = number/10;
//     count++;
// }

// console.log(count);

// find the sum of digits in an array
// let number = 287152 ;
// let sum = 0;
// while(number>0){
//      sum = sum + number%10;
//      number = Math.floor(number/10); 
// }
// console.log(sum);

// let num = 7 ;
// let fact = 1;
// if(num==0){
//     console.log("factorial of 0 :" , 1);
// }
// else{
//     for(let i = 1 ;i<=num;i++){
//          fact = fact*i;
//     }
//     console.log(`factorial of ${num} :` , fact);
// }

// const numbers = [10,-67,87,56,45,34,80,90];
// let largest = 0 ;
// for(let i = 0;i<numbers.length;i++){
//     if(numbers[i]>largest){
//         largest = numbers[i];
//     }
// }
// console.log("largest element of an array: " , largest);

// loops with arrays
// nested loop with nested arrays
// let heros = [["ironman","spiderman","thor"],["supermen","wonder womwn","shaktiman","batman"]];
// for(let i = 0 ; i<heros.length;i++){
//     console.log(`List #${i}`);
//     for(let  j=0 ; j<heros[i].length;j++){
//         console.log(heros[i][j]);
//     }
// }

// for of loop in javascript
// let fruits = ["mango","papaya","banana","litchi","orange"];
// for( fruit of fruits){
//    console.log(fruit);
// }

// let str = "apnacollege";
// for(let char of str){
//     console.log(char);
// }

// for of loop over nested array
// let heros = [["ironman","spiderman","thor"],["supermen","wonder womwn","shaktiman","batman"]];
// for(list of heros){
//     // console.log(list);
//     for(hero of list){
//         console.log(hero);
//     }
// }