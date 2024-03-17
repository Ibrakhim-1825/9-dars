// 1-masala
// let arr = String(prompt("son kiriting"));

// const x = (a) => {
//      let count = 0;
//   for( let i = 0; i <= a.length ; i++){
//     count = count + i

// }
// return count ;
// }

// console.log(x(arr));

// 2-masala

// let arr = [1 , 2, 34,10];

// const x = (a) => {
//     let b = '';
//     let c = '';
//     let arr1 = [];
//     let arr2 = [];
//     let newArr = [];
//     let count = 0 ;
//     for( let i = 0; i < a.length; i++) {
//         count = count + a[i];
//     }
//     if(count !== 0 ){
//         newArr.push(count)
//     }
//     b = parseInt(count / 10);
//     c = count % 10;
//     if(b !== 0 && c !== 0){
//         arr1.push(b);
//         arr2.push(c)

//     }


//     return {
//         All : [b,c]  ,  
//         firstNum: b ,
//         secondNum: c, 

//     };
// }

// console.log(x(arr));

// 3-masala

let num = prompt("Ixtiyoriy son kiriting:");

function isPalindrome(num) {
    let numString = num.toString();
    
    for (let i = 0; i < numString.length / 2; i++) {
        if (numString[i] !== numString[numString.length - 1 - i]) {
            return false; 
        }
    }
    return true; 
}

if (isPalindrome(num)) {
    console.log(num + "- ning kvadrati" +  " - palindrome.");
} else {
    console.log(num + "- ning kvadrati" + "- palindrome emas.");
}


// 4-masala

// let str = prompt("so'z kiriting");

// const x = (a) => {
//     let idf = "";
//     for ( let i = a.length-1 ; i >= 0 ; i--){
//         idf += a[i];
//     }
//     return idf == a;
// }

// console.log(x(str));

// 5-masala 
// let obj = {
//     a: 4,
//     b: 2,
//     c: 8,
// }
// const x = (a) => {
//     let yigindi = Object.values(a).reduce((a, b, c) => a + b , 0);

//     let sum = yigindi.toString().split("").reduce((a, b, c) => parseInt(a) + parseInt(b));
//     return sum;
// }
// console.log(x(obj));







