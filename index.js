// Javascript console API
// console.log("Hello World", 4 + 6, "Another log");
// alert("me");
// document.write("this is document write")
// console.warn("This is a warning")
// console.error("This is an error");
var number1 = 34;
var number2 = 56;
// console.log(number1 + number2);

//  Datatypes
// Numbers
var num1 = 455;
var num2 = 56.76;

//String
var str1 = "This is also a string";
var str2 = 'This is a string';

//Objects
var marks = {
    ravi: 34,
    shubham: 78,
    harry: 99.977
}

// console.log(marks);

var a = true;
var b = false;

// console.log(a, b);

//  var und = undefined;

// console.log(undefined);
var und;
//  console.log(und);

var n = null;
//  console.log(n);

//  At a very high level, there are two types of datatypes in JavaScript
//  1. Primitive data types:
//  2. Reference data types:

var arr = [1, 2, "abc", 3, 4, 5]
//operators


function avg(a, b) {
    c = (a + b) / 2;
    return c;
}

c1 = avg(4, 6);
c2 = avg(14, 16);
//console.log(c1, c2);

//Conditionals in JavaDcript
/*
var age = 34;
// if (age > 8){
//     console.log('You are not a kid');
// }
// else{
//     console.log('You are a kid');
// }

if(age < 32){
    console.log("You are not a kid");
}
else if(age<26){
    console.log()
}
else if(age<22){
    console.log("Yes Bacche nahi rahe");
}
else if(age<18){
    console.log("Bachhe rahe");
}
else{
    console.log("Bachhe rahe")
}
console.log("End of ladder")*/

// var arr = [1,2,3,4,5,6,7];
// // console.log(arr);
// for(var i =0; i<arr.length; i++){
//     if(i==2){
//         // break;
//         continue;
//     }
//     console.log(arr[i]);


// arr.forEach(function(element){
//     console.log(element);
// })


// const ac = 0;
// ac++;
// ac = ac+1;

// let j = 0;
// // while(j<arr.length){
// //     console.log(arr[j]);
// //     j++;
// // }

// do{
//     console.log(arr[j]);
//     j++;
// }while(j<arr.length);


let myArr = ["Fan", "Camera", 34,null, true];

//Array Methods

// console.log(myArray.length);
// myArr.pop();
// myArr.push("Harry");
// myArr.shift();
// const newLen=myArr.unshift("Harry")
// console.log(newLen) ;
// console.log(myArr); 
// myArr.toString()
// myArr.sort()//Sorts according to the dictionary

// String methods in JavaScript
// let myLovelyString = "Vaibhavee is a good girl good good";
// console.log(myLovelyString.length);

// console.log(myLovelyString.indexOf("Harry"))
// console.log(myLovelyString.indexOf("good"))
// console.log(myLovelyString.lastIndexOf("good"));
// console.log(myLovelyString.slice(0,3));
// d=myLovelyString.replace("good","bad");
// console.log(d,myLovelyString)

let myDate = new Date();

// console.log(myDate);
// console.log(myDate.getTime);
// console.log(myDate.getFullYear);
// console.log(myDate.getDay());
// console.log(myDate.getHours()); and so on

// DOM Manipulation
let elem = document.getElementById('click');
console.log(elem);

let elemClass = document.getElementsByClassName("container");
console.log(elemClass);
// elemClass[0].style.background = "yellow";
elemClass[0].classList.add("bg-primary");
elemClass[0].classList.add("text-success")
// elemClass[0].classList.remove("text-success");
// elemClass[0].innerHTML
// console.log(elem.innerHTML);
// console.log(elem.innerText);
// elem.innerText
tn = document.getElementsByTagName('button')
console.log(tn);
createdElement = document.createElement('p');
createdElement.innerText = "This is a created para"
tn[0].appendChild(createdElement);
createdElement2 = document.createElement('b');
createdElement2.innerText = "This is a created bold"
tn[0].replaceChild(createdElement2, createdElement);
// removeChild(element);---> removes an element

// Selecting using Query
// sel = document.querySelector('.container')
// console.log(sel)
// sel = document.querySelectorAll('.container')
// console.log(sel)

// // Events in JavaScript 

// function clicked(){
//     console.log('The button was clicked')
// }

// window.onload = function(){
//     console.log('The document was loaded')
// }

// firstContainer.addEventListener('click',function(){
//     document.querySelectorAll('.container')[1].innerHTML = "<b>We have clicked</b>"
//     console.log('Clicked on container')
// })
// firstContainer.addEventListener('mouseover',function(){
//     console.log('Mouse on container')
// })
// firstContainer.addEventListener('mouseout',function(){
//     console.log('Mouse out of Container');
// })

// let prevHTML = document.querySelectorAll('.container')[1].innerHTML;

// firstContainer.addEventListener('mouseup',function(){
//     document.querySelectorAll('.container')[1].innerHTML = prevHTML;
//     console.log('Mouse up when clicked on Container');
// })
// firstContainer.addEventListener('mousedown',function(){
//     document.querySelectorAll('.container')[1].innerHTML = "<b>We have clicked</b>"
//     console.log('Mouse down when clicked on Container');
// })

// Arrow Functions
// function sum(a, b){
//     return a+b;
// }

sum = (a,b)=>{
    return a+b;
}

logKaro = ()=>{
    document.querySelectorAll('.container')[1].innerHTML = "<b>Set interval fired</b>"
    console.log("I am your log")
} 
// SetTimeout and setinterval
// setTimeout(logKaro, 2000);
// clr = setInterval(logKaro, 5000)
// use clearInterval(clr)/clearTimeout to cancel setInterval/setTimeout
//clr = setInterval(logKaro, 2000);


// JavaScript localStorage
// localStorage.setItem('name','Harry')
// // undefined
// localStorage
// // Storage { name: "Harry", length: 1 }

// localStorage.getItem('name')
// // "Harry" 
// localStorage.removeItem('name')
// localStorage.clear();

//Json
// obj = {name: "harry", length: 1, a: {this: "that"}}
// jso = JSON.stringify(obj);
// console.log(typeof jso)
// console.log(jso)

// parsed = JSON.parse{"name":"harry","length":1,"a":{"this":"tha\\t"}}
// console.log(parsed);
//Template literals - Backticks

a = 34;
console.log("this is my "${a}); 
