// 1

const h2 = document.querySelector('h2.ml-5')//.contains("Exercice");

console.log(h2.innerText); 

// 2
h2.innerHTML+=" 1";


// 3 
const p1 = h2.nextElementSibling; 
p1.innerHTML = h2.innerHTML; // ???? 

// 4

const sec1 = document.querySelectorAll('section')[0];

console.log(sec1.getAttribute('id')); 

// 5 

const h11 = document.querySelectorAll('h1')[0]; 

console.log(h11.getAttribute('class')); 
console.log(h11.classList); 

// 6

console.log('----');
const h1s = document.querySelectorAll('h1'); 

Array.from(h1s).forEach( (e) =>{
    console.log(e.classList); 
    //console.log(e.getAttribute('class'));
})

console.log('----');

// 7 

const input1 = document.querySelectorAll('input')[0]; 

console.log(input1.attributes); 

console.log('----');


// 8
//for([key, val] in input1.attributes){
 //   console.log(`${key} => ${val}`);
//}

Array.from(input1.attributes).forEach( (e) => {
    console.log(e.value); // nodeValue; 
});


// 9

const inp3pass = document.querySelector("input#inputPassword3"); 

inp3pass.setAttribute('type','password'); 



