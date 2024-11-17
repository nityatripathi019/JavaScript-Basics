// high order functions in javascript imp for interview purpose
// forEach
// filter
// map
// sort
// reduce

const companies = [
    {
        name:"Google",
        category:"Product Based",
        start:1981,
        end:2024
    },
    {
        name:"Amazon",
        category:"Product Based",
        start:1992,
        end:2008
    },
    {
        name:"Paytm",
        category:"Product Based",
        start:1999,
        end:2007
    },
    {
        name:"Coforge",
        category:"Service Based",
        start:1989,
        end:2010
    },
    {
        name:"Mindtree",
        category:"Service Based",
        start:1989,
        end:2010
    }
];







// traditional method of accessing elemnets from js
// for(let i =0;i<companies.length;i++){
//     console.log(companies[i]);
// }
// forEach()in js
// now accessing element with the help of forEach()in js
// companies.forEach(function(company,index){
//     console.log(company);
//     console.log(index , company.name , company.castegory);
    
    
// });

// companies.forEach((company,index)=>{
//     console.log(index,company.name)
// });

// companies.forEach((company,index)=>(console.log(index , company.name , company.category)));

//   let sb = companies.filter((company,index)=>{
//     return company.category=="Service Based";
//   });
// console.log(sb);

// const sb  = companies.filter(company => company.category==="Service Based");
// console.log(sb);


// map function in javascript

// const output = companies.map(function(company,index){
//     return `${company.name} ${company.category} ${index}` ;
// });
// console.log(output);

// sort function in javascript

// let sorted = companies.sort((c1,c2)=>{
//     if(c1.start>c2.start){
//         return 1;
//     }
//     else{
//         return -1;
//     }
// });
// console.log(sorted);

//  const sorted = companies.sort((c1,c2)=>c1.start>c2.start);
//  console.log(sorted);

// const sorted = companies.sort((c1,c2)=>(c1.start>c2.start?1:-1));
// console.log(sorted);







const ages = [33,12,45,10,20,56,89,100,78,23,27];

// show ages whose value is greater than 21
// for(let i = 0 ;i<ages.length;i++){
//     if(ages[i]>21){
//         console.log(ages[i]);
//     }
// }
// let output = ages.filter((age , index)=>{
//    return age>21 ;
// })
// console.log(output);

// const output = ages.filter(age => age>=20);
// console.log(output);

// reduce method in javascript
// let totalAge = ages.reduce((total,age)=>{
//     return total+age;
// },0);
// console.log(totalAge);
// let totalAge = ages.reduce((total,age)=>(total+age),0);
// console.log(totalAge);