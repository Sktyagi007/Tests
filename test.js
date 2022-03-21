// Q1
// const num = 5;
// console.log(num+5);
// let a = 6;
// a = a+num;
// console.log(num-a);

// Q2
// let a =2;{let a =3;{let a=4;{let a = 5; console.log(a);}console.log(a);}console.log(a);}console.log(a);

// Q3
// let arr = [ { name: "Delhi", rainfall: [2.3, 4, 3.1, 5.5, 1.1, 1.2, 7] }, { name: "Noida", rainfall: [6.3, 0, 0.1, 3.5, 1, 2.6, 0.7] }, { name: "Dehradun", rainfall: [12, 5.6, 3.1, 0.55, 11, 16.2, 19] }, { name: "Nanital", rainfall: [8, 1.4, 0.61, 15.5, 6.6, 2, 9.82] }, ]

// for(let  i =0 ; i<arr.length; i++){
//     // console.log(arr[i]);
//     for(key in arr[i]){
//         let newArr = arr[i][key];
//         // console.log(newArr);
//         for(let j = 0; j<newArr.length; j++){
//             console.log(newArr[j]);
//         }
//     }
// }
// [ { name: "Roorkee", rainfall: [5, 6, 5, 5, 4, 7, 8] }, { name: "Pauri", rainfall: [3, 3, 3, 1, 2, 2, 2] }, ];
// function rainDance(rainfall) {
//     let reqAns = [];
//     for (x in rainfall) {
//       let cityObj = { name: rainfall[x].name };
//       let currCityRainfall = rainfall[x].rainfall;
//       let rainfallSum = 0;
//       for(x in currCityRainfall) rainfallSum+= currCityRainfall[x]
//       let avgRainfall =
//         rainfallSum / currCityRainfall.length;
//       cityObj.avgRainfall = avgRainfall;
//       reqAns.push(cityObj);
//     }
//     return reqAns;
//   }
//   let ans = rainDance();
//   console.log(ans);

// Q4
// let arr = [1, 2, 3]; 
// (function () { 
//     for (x in arr) 
//     arr.unshift(arr.pop()); 
//     console.log(arr); 
// })();

// let randomAdder = function (arr = ["a", "b"]) { 
//     arr[arr.length * arr.length] = arr.length * arr.length; 
// };

// randomAdder(arr);
// randomAdder();

// console.log(arr[9]); 
// console.log(arr[8]);

// Q5

// (function () { 
//     if ((-100 && 100 && "0") || [] === true || 0) { 
//         console.log(1); 
//         if ([] || (0 && false)) { 
//             console.log(2); 
//         }

// if (Infinity && NaN && "false") {
//   console.log(3);
//   if ("") {
//     console.log(4);
//   }
// } else {
//   console.log(5);
//   if (({} || false === "") && !(null && undefined)) {
//     console.log(6);
//   }
// }
// } else { 
//     console.log(7); 
// } 
// })();

// Q6
// let a = "This only works if and only if";
// console.log(a.indexOf("only"));
// let b = a.slice(a.indexOf("only"));
// console.log(b);

// let c = b.lastIndexOf("only");
// console.log(c);

// b[c] = "i";

// console.log(a); console.log(b);

// Q7 Decimal to binary
// program to convert decimal to binary
// function convertToBinary(x) {
//     let bin = 0;
//     let rem;
//     while(x!=0){
//         rem = x%2;
//         x = Math.floor(x/2);
//         bin = bin*10+rem;
//     }
//     console.log(bin);
// }

// convertToBinary(9);
// function convertToBinary(x) {
//     const res = x.toString(2);
//     console.log(res);
// }

// convertToBinary(3672);

// Q8
// function spoon(str){
//     str = str.split(" ");
//     firstWord = str[0];
//     secondWord = str[1];

//     let spoon1 = secondWord[0] + firstWord.substring(1);
//     let spoon2 = firstWord[0] + secondWord.substring(1);
//     console.log(spoon1,spoon2)
// }

// spoon("horse riding");


// Q9
// function f() { console.log(arguments); }

// function f(a, b) { return a + b; }

// console.log(f(2, 3, 4, 5));

// function f(x, y, z, t) { return x + y + z + t; }

// console.log(f(2, 3, 4, 5));

// Q10

// console.log(a); 
// f(2, 3, 4, 5);

// var a = 1; 
// var a = 2; 
// console.log(a); 
// console.log(b); 
// let b = 2;

// function f() { 
//     console.log(arguments); 
// }

// Q11
// let obj = {"concept":""};
// console.log( JSON.parse( JSON.stringify(obj).slice(0, 12) + "JSON" + JSON.stringify(obj).slice(12) ).concept );

// Q12
// let a;

// console.log(a);

// function A() { let a = 2; console.log(a);

// function C() { console.log(a);

// function D() {
//   console.log(a);

//   a = 2;
// }
// D();
// a = 3;
// } C(); }

// function B() { let a; console.log(a);

// function E() { a = 6; console.log(a);

// }

// a = 2; E(); console.log(a); }

// function F() { console.log(a); a = 2; }

// a = 3;

// F(); B(); A();

// Q13

// let users = [ { name: "Rajneesh", age: 34, address: { local: "22 Alaknanda", city: "Dehradun", 
// state: "UK", }, orders: [{ id: 1, name: "GOT Book Series" }], }, { name: "Bhavesh", age: 37, 
// address: { local: "48 DT Row", city: "Hyderabad", state: "AP", }, }, { name: "Jasbir", age: 38, 
// address: { local: "196 Lama Bhavan", city: "Gangtok", state: "Sikkim", }, orders: [ { id: 1, name: "Chair" }, 
// { id: 2, name: "PS5" }, ], }, ];
// for(let i = 0; i<users.length; i++){
//     users[i].address.state="uk";
//     users[i].address.city="Dehradun";
//     users[i].address.local="25 Iroda";

//     console.log(users[i]);
// }
