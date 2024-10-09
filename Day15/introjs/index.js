
// function greeting() {
//     alert("Good morning")
// }
//alert(typeof ("5"));
// console.log(5);
// console.log("5");
// console.log(typeof "5");

// console.log(typeof false);

// let age;
// console.log(typeof age);

// let studentname = "jomiloju";
// console.log(studentname)

//var allows us to reassign and redeclare
//var gender="male"
// gender =female
// console.log(gender);
// var gender = "male";
// console.log(gender);


//let allows us to reassign but not redeclare
// let gender="male"
// gender =female
//const does not allow both reassigning and redeclaring
//cannot allow both

// javascript operators
// Arithmetic operators + - * / %
let num1 = 4;
let num2 = 3;
let num3 = 6;
let num4 = 4;
let output = num1 + num2 + num3 + num4;
console.log(output);
// Assinging operator = += -=
// let x = 6;
// let y = 4;
// x += 2;
// console.log(x);


// The sign = is used to assing value to a variable
 
// comparision operators == === < > >= <=
// let x = 5;
// // let y = "5";        note: ==  only reads the value and not the data type
// let z = x == y;
// console.log(z);

// note: === reads both the value and the data type
// let x = 5;
//  let y = 4;                                                        
//  let z = x <= y;
//  console.log(z);


//  string operator
// Note: strings reads in alphabetical manner
let x = "69";
let y = "8";
let result = x < y;
console.log(result);

//logical operators
// && and 
//|| or
//! not

if(5<8 && 4>3) {
    console.log('my name is xential');
    
}else{
    console.log('bullshit');
    
}
if(9<8 || 4>3) {
    console.log('my name is xential');
    
}else{
    console.log('bullshit');
    
}
//Tenary
let name = true;
console.log(!name);

let fig = 7 > 3 ? 'goodjob' : 'no result';
console.log(fig);

// spacing
let firstName = "Oluwatimileyin";
let lastNames = "Samuel_Oyewole";
let fullName = firstName + " " + lastNames;
console.log(fullName);


function displayName() {
  let myname = document.getElementById('name');  
  myname.innerHTML = '<h1>oyewole oluwatimileyin samuel</h1>';
}

function toggle() {
 let input = document.getElementById('inp');
 input.type == 'text'? input.type = 'password': input.type = 'text';  
}








