// === Majburiy masalalar === //

//     1 - masala
// let arr = 'alijonov shohjahon'
// function ism(arr) {
//     let res = arr.toLowerCase().split(' ')
//     for (let i = 0; i < res.length; i++) {
//         res[i] = res[i][0].toUpperCase() + res[i].slice(1)
//     }
//     return res.join(' ')
// }
// console.log(ism(arr));

// 2 - masala

// let arr = 'Salom'
// function soz(arr) {
//     return arr.split('').reverse().join('')
// }
// console.log(soz(arr));

// 3 - masala

// let arr = [1, 2, 3, 4, 5, 6]
// function raqama(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i]
//     }
//     return Math.trunc(sum / arr.length)
// }
// console.log(raqama(arr));

// 4 - masala

// let arr = ['Salom', 'MIrzatillo']
// function soz(arr) {
//     let res = []
//     for (let i = 0; i < arr.length; i++) {
//         res.push(arr[i].length)
//     }
//     return res
// }
// console.log(soz(arr));

// 5 - masala

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// function raqama(arr) {
//     let res = []
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 == 1) {
//             res.push(arr[i])
//         }
//     }
//     return res
// }
// console.log(raqama(arr));

// 6 - masala
// let user = { name: 'Shohjahon', age: 16 };
// let user2 = { yashash: 'Fargona', }
// function soz(arr, arr1) {
//     return { ...arr, ...arr1 }
// }
// console.log(soz(user, user2));

// 7 - masala

// let arr = 'Salom bolalar qalaysizlar  '
// console.log(arr.trim());

// 8 - masala

// let user = { name: 'Shohajhon', age: 16 }
// function obj(user) {
//     return Object.values(user)
// }
// console.log(obj(user));


// 9 - masala

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// function raqama(arr) {
//     let max = Math.max(...arr)
//     let min = Math.min(...arr)

//     return { max: max, min: min }
// }
// console.log(raqama(arr));

// 10 - masala

// let arr = 'Salom'
// function harf(arr) {
//     let res = 0
//     let soz = ['a', 'o', 'e', 'u', 'i']
//     for (let i = 0; i < arr.length; i++) {
//         if (soz.includes(arr[i])) {
//             res++
//         }
//     }
//     return res
// }
// console.log(harf(arr));

// 11 - masala

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// function raqama(arr) {
//     let res = []
//     for (let i = 0; i < arr.length; i++) {
//         res.push(arr[i] + 2)
//     }
//     return res
// }
// console.log(raqama(arr));

// 12 - masala

// let arr = ["salom", "olma"];

// function maxArr(arg) {
//     let max = arg[0];

//     for (let i = 1; i < arg.length; i++) {
//         if (arg[i].length > max.length) {
//             max = arg[i];
//         }
//     }
//     return max;
// }

// console.log(maxArr(arr));

// 13 - masala

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// function som(arr) {
//     let sum = 0;
//     let uzullig = arr.length

//     for (let i = 0; i < uzullig; i++) {
//         sum += arr[i]
//     }
//     let orta = sum / uzullig;
//     let res = []
//     for (let i = 0; i < uzullig; i++) {
//         if (arr[i] > orta) {
//             res.push(arr[i])
//         }

//     }
//     return res
// }
// console.log(som(arr));


// 14 - masala

// let arr = 'Salom bolalar'

// function soz(arr) {
//     return arr.slice(1, 12)
// }
// console.log(soz(arr));


// 15 - masala
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// function funk(arr) {
//     let res = []
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         let kvadrat = arr[i] ** 2
//         res.push(kvadrat)
//         sum += kvadrat
//     }
//     return sum
// }
// console.log(funk(arr));

// 16 - masala
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(arr.reverse());

// 17-masalalar

// let arr = 'salom'
// console.log(arr.toUpperCase());

// 18-masala

// let user = [
//     {name :'John' , age : 18},
//     {name : 'Alex' , age : 19},
//     {name : 'Alisa', age : 20}
// ]
// let res = user.filter(function(v){
//     return v.age > 18
// })
// console.log(res);

// 19-masala

// let arr = 'JavaScript'
// function funk(arr){
//     let count = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i] == 'a'){
//             count++
//         }        
//     }
//     return count
// }
// console.log(funk(arr));

// 20-masala
// let arr1 = 'kitob'
// let arr2 = 'tokcha'
// function fun(arr1,arr2){
//     let res = []

//     for (let i = 0; i < arr1.length; i++) {
//         let harf = arr1[i]
//         if (arr2.includes(harf) && !res.includes(harf)){
//             res.push(harf)
//         }
//     }
//     return res
// }
// console.log(fun(arr1,arr2));

// === Ixtiyoriy masalalar === //

// 1-masala

// let str = "JavaScript";

// function funk(arr) {
//     let kopsoz = '';
//     let kopson = 0;
//     let son = new Array(26).fill(0);

//     for (let i = 0; i < arr.length; i++) {
//         let belgi = arr[i].toLowerCase();
//         let index = belgi.charCodeAt(0) - 'a'.charCodeAt(0);

//         if (index >= 0 && index < 26) {
//             son[index]++;
//         }
//     }

//     for (let i = 0; i < son.length; i++) {
//         if (son[i] > kopson) { 
//             kopson = son[i];
//             kopsoz = String.fromCharCode(i + 'a'.charCodeAt(0)); 
//         }
//     }

//     return kopsoz;
// }

// console.log(funk(str)); 


// 2-masala

// let arr1 =[1, 2, 3, 4, 5]
// let arr2 =[4, 5, 6, 7, 8]

// function funk(arr1,arr2){
//     let res = []
//     for (let i = 0; i < arr1.length; i++) {
//         let elemnt = arr1[i];


//         if(arr2.includes(elemnt) && ! res.includes(elemnt)){
//             res.push(elemnt)
//         }

//     }
//     return res
// }
// console.log(funk(arr1,arr2));

// 3-masala

// let talaba =[
//     {name : 'Alex', age : 18},
//     {naem : 'John', age : 21},
//     {name : 'ALisa' , age : 20}
// ]
// let res = talaba.sort((a,b) => b.age - a.age);
// console.log(res);

// 4-masala

// let obj ={
//     a:1,
//     b:2,
//     c :3
// }
// function funk(obj){
//     let res = {}
//     for (const key in obj) {
//         if (typeof obj[key] === 'number') {
//             res[key]= n=obj[key]*2
//         }else{
//             res[key]=obj[key]
//         }
//     }
//     return res
// }
// console.log(funk(obj));

// 5-masala

// function number(massiv) {
//     let son = {}; 
//     let res = 0;
//     for (let i = 0; i < massiv.length; i++) {
//         let number = massiv[i];
//         if (!son[number]) {
//             res[number] = true; 
//             res += number; 
//         }
//     }

//     return res; 
// }

// let natija = takrorlanmasYigindi([1, 2, 2, 3, 4, 4]);
// console.log(natija); 
