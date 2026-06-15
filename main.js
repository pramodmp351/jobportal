const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");
const closeMenu = document.getElementById("closeMenu");

hamburger.addEventListener("click",()=>{
navMenu.classList.add("active");
});

closeMenu.addEventListener("click",()=>{
navMenu.classList.remove("active");
});





function searchJob(){

let keyword = document.getElementById("keyword");
let city = document.getElementById("city");
let category = document.getElementById("category");
let message = document.getElementById("searchMessage");

keyword.classList.remove("error");
city.classList.remove("error");
category.classList.remove("error");

let valid = true;

if(keyword.value === ""){
keyword.classList.add("error");
valid = false;
}

if(city.value === ""){
city.classList.add("error");
valid = false;
}

if(category.value === ""){
category.classList.add("error");
valid = false;
}

if(!valid){
message.style.color = "red";
message.innerText = "⚠ Please fill the fields";
return;
}

message.style.color = "green";
message.innerText = "Searching Jobs...";

setTimeout(()=>{
window.location.href="404.html";
},1000);

}
/* SCROLL ANIMATION */

const observer=new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add("show");
}
});
});

document.querySelectorAll(".hidden").forEach(el=>{
observer.observe(el);
});



const a = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){
entry.target.classList.add("show");
}

});

});

document.querySelectorAll(".hidden").forEach(el=>{
a.observe(el);
});




const filterButtons=document.querySelectorAll(".filter-btn");
const jobCards=document.querySelectorAll(".job-card");

filterButtons.forEach(btn=>{

btn.addEventListener("click",()=>{

document.querySelector(".filter-btn.active").classList.remove("active");

btn.classList.add("active");

let filter=btn.getAttribute("data-filter");

jobCards.forEach(card=>{

if(filter==="all"){
card.style.display="block";
}

else if(card.classList.contains(filter)){
card.style.display="block";
}

else{
card.style.display="none";
}

});

});

});



const c = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){
entry.target.classList.add("show");
}

});

});

document.querySelectorAll(".hidden").forEach(el=>{
c.observe(el);
});










const d = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){
entry.target.classList.add("show");
}

});

});

document.querySelectorAll(".hidden").forEach(el=>{
d.observe(el);
});









function validateEmail(){

let email = document.getElementById("emailInput");

let pattern = /^[^ ]+@[^ ]+.[a-z]{2,3}$/;

if(email.value === ""){

email.style.border = "2px solid red";
alert("Please enter your email");

}

else if(!email.value.match(pattern)){

email.style.border = "2px solid red";
alert("Please enter a valid email address");

}

else{

email.style.border = "2px solid green";
alert("Subscribed Successfully!");

}

}









let scrollBtn = document.getElementById("scrollTopBtn");

window.onscroll = function(){

if(document.documentElement.scrollTop > 200){

scrollBtn.style.display = "flex";

}else{

scrollBtn.style.display = "none";

}

};

scrollBtn.onclick = function(){

window.scrollTo({

top:0,
behavior:"smooth"

});

};




function revealElements(){

let reveals = document.querySelectorAll(".reveal");

reveals.forEach(function(element){

let windowHeight = window.innerHeight;

let elementTop = element.getBoundingClientRect().top;

if(elementTop < windowHeight - 100){

element.style.opacity = "1";
element.style.transform = "translateY(0px)";

}

});

}

window.addEventListener("scroll", revealElements);







function revealElements(){

let reveals = document.querySelectorAll(".reveal");

reveals.forEach(function(element){

let windowHeight = window.innerHeight;

let elementTop = element.getBoundingClientRect().top;

if(elementTop < windowHeight - 100){

element.style.opacity = "1";
element.style.transform = "translateY(0px)";

}

});

}

window.addEventListener("scroll", revealElements);



function revealScroll(){

let reveals = document.querySelectorAll(".reveal");

reveals.forEach(function(el){

let windowHeight = window.innerHeight;

let elementTop = el.getBoundingClientRect().top;

if(elementTop < windowHeight - 120){

el.classList.add("active");

}

});

}

window.addEventListener("scroll", revealScroll);





function revealOnScroll(){

let reveals = document.querySelectorAll(".reveal");

for(let i = 0; i < reveals.length; i++){

let windowHeight = window.innerHeight;

let elementTop = reveals[i].getBoundingClientRect().top;

let elementVisible = 100;

if(elementTop < windowHeight - elementVisible){

reveals[i].classList.add("active");

}

}

}

window.addEventListener("scroll", revealOnScroll);




function revealElements(){

let reveals = document.querySelectorAll(".reveal");

reveals.forEach((el)=>{

let windowHeight = window.innerHeight;

let elementTop = el.getBoundingClientRect().top;

if(elementTop < windowHeight - 100){

el.classList.add("active");

}

});

}

window.addEventListener("scroll", revealElements);




let faqs = document.querySelectorAll(".faq-question");

faqs.forEach((faq)=>{

faq.addEventListener("click", ()=>{

let parent = faq.parentElement;

parent.classList.toggle("active");

let icon = faq.querySelector(".faq-toggle");

if(parent.classList.contains("active")){

icon.textContent = "-";

}else{

icon.textContent = "+";

}

});

});

document.getElementById("contactForm").addEventListener("submit", function(e){

e.preventDefault();

let name = document.getElementById("name");
let email = document.getElementById("email");
let subject = document.getElementById("subject");
let message = document.getElementById("message");
let terms = document.getElementById("terms");

let valid = true;

function setError(input, message){

let error = input.nextElementSibling;
error.innerText = message;
input.classList.add("error-border");

}

function clearError(input){

let error = input.nextElementSibling;
error.innerText = "";
input.classList.remove("error-border");

}


if(name.value.trim() === ""){
setError(name,"Name is required");
valid = false;
}else{
clearError(name);
}


if(email.value.trim() === ""){
setError(email,"Email is required");
valid = false;
}else{
clearError(email);
}


if(subject.value.trim() === ""){
setError(subject,"Subject is required");
valid = false;
}else{
clearError(subject);
}


if(message.value.trim() === ""){
setError(message,"Message is required");
valid = false;
}else{
clearError(message);
}


let termsError = document.getElementById("termsError");

if(!terms.checked){
termsError.innerText = "Please accept Terms & Conditions";
valid = false;
}else{
termsError.innerText = "";
}


if(valid){

window.location.href = "404.html";

}

});

let searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", function(){

let filter = searchInput.value.toLowerCase();

let cards = document.querySelectorAll(".blog-card");

cards.forEach(card=>{

let text = card.innerText.toLowerCase();

if(text.includes(filter)){

card.style.display="block";

}else{

card.style.display="none";

}

});

});



function reveal(){

let reveals = document.querySelectorAll(".reveal");

reveals.forEach(el=>{

let windowHeight = window.innerHeight;

let elementTop = el.getBoundingClientRect().top;

if(elementTop < windowHeight - 100){

el.classList.add("active");

}

});

}

window.addEventListener("scroll", reveal);




function revealOnScroll(){

let reveals = document.querySelectorAll(".reveal");

reveals.forEach(el=>{

let windowHeight = window.innerHeight;

let elementTop = el.getBoundingClientRect().top;

if(elementTop < windowHeight - 100){

el.classList.add("active");

}

});

}

window.addEventListener("scroll", revealOnScroll);
















function togglePassword(id){

let input = document.getElementById(id);

if(input.type === "password"){
input.type = "text";
}
else{
input.type = "password";
}

}


/* LOGIN */

const loginForm = document.getElementById("loginForm");

if(loginForm){

loginForm.addEventListener("submit",function(e){

e.preventDefault();

let email = document.getElementById("loginEmail").value;
let password = document.getElementById("loginPassword").value;
let error = document.getElementById("loginError");

if(email === "" || password === ""){

error.innerText = "Please fill the form";

}
else{

window.location.href="404.html";

}

});

}


/* REGISTER */

const registerForm = document.getElementById("registerForm");

if(registerForm){

registerForm.addEventListener("submit",function(e){

e.preventDefault();

let name = document.getElementById("regName").value;
let email = document.getElementById("regEmail").value;
let pass = document.getElementById("regPassword").value;
let confirm = document.getElementById("confirmPassword").value;

let error = document.getElementById("registerError");

if(name==="" || email==="" || pass==="" || confirm===""){

error.innerText="Please fill all fields";

}

else if(pass !== confirm){

error.innerText="Passwords do not match";

}

else{

window.location.href="404.html";

}

});

}








function showRegister(){

document.getElementById("loginFormBox").classList.remove("active")
document.getElementById("registerFormBox").classList.add("active")

}

function showLogin(){

document.getElementById("registerFormBox").classList.remove("active")
document.getElementById("loginFormBox").classList.add("active")

}






