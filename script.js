AOS.init({
duration:1000,
once:true
});


/* HAMBURGER MENU */

const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");
const closeMenu = document.querySelector(".close-menu");

hamburger.addEventListener("click", () => {
mobileMenu.classList.add("active");
});

closeMenu.addEventListener("click", () => {
mobileMenu.classList.remove("active");
});


/* MOBILE DROPDOWN */

const mobileLink = document.querySelector(".mobile-link");
const mobileSubmenu = document.querySelector(".mobile-submenu");

mobileLink.addEventListener("click", () => {

if(mobileSubmenu.style.display === "block"){
mobileSubmenu.style.display = "none";
}else{
mobileSubmenu.style.display = "block";
}

});







document.getElementById("subscribeForm").addEventListener("submit",function(e){

e.preventDefault();

let email=document.getElementById("email").value.trim();
let error=document.getElementById("emailError");

let pattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(email===""){
error.innerText="Please fill the field";
return;
}

if(!pattern.test(email)){
error.innerText="Enter valid email address";
return;
}

error.innerText="";
window.location.href="404.html";

});







/* SCROLL TO TOP */

let scrollBtn = document.getElementById("scrollTopBtn");

window.onscroll = function(){

if(document.body.scrollTop > 300 || document.documentElement.scrollTop > 300){

scrollBtn.style.display="flex";

}else{

scrollBtn.style.display="none";

}

};


scrollBtn.onclick = function(){

window.scrollTo({
top:0,
behavior:"smooth"
});

};








const faqQuestions = document.querySelectorAll(".stackly-faq-question");

faqQuestions.forEach(question => {

question.addEventListener("click", () => {

const answer = question.nextElementSibling;

if(answer.style.display === "block"){
answer.style.display = "none";
}
else{
answer.style.display = "block";
}

});

});





document.getElementById("stacklyContactForm")
.addEventListener("submit", function(e){

e.preventDefault();

let name = document.getElementById("name");
let email = document.getElementById("email");
let subject = document.getElementById("subject");
let phone = document.getElementById("phone");
let message = document.getElementById("message");

let valid = true;

/* NAME VALIDATION */
let nameError = name.nextElementSibling;
let namePattern = /^[A-Za-z\s]+$/;

if(name.value.trim() === ""){
name.classList.add("error-border");
nameError.innerText = "Name is required";
valid = false;
}
else if(!namePattern.test(name.value)){
name.classList.add("error-border");
nameError.innerText = "Only alphabets allowed";
valid = false;
}
else{
name.classList.remove("error-border");
nameError.innerText = "";
}

/* EMAIL VALIDATION */
let emailError = email.nextElementSibling;
let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(email.value.trim() === ""){
email.classList.add("error-border");
emailError.innerText = "Email is required";
valid = false;
}
else if(!emailPattern.test(email.value)){
email.classList.add("error-border");
emailError.innerText = "Enter valid email";
valid = false;
}
else{
email.classList.remove("error-border");
emailError.innerText = "";
}

/* SUBJECT VALIDATION */
let subjectError = subject.nextElementSibling;

if(subject.value.trim() === ""){
subject.classList.add("error-border");
subjectError.innerText = "Subject is required";
valid = false;
}
else{
subject.classList.remove("error-border");
subjectError.innerText = "";
}

/* PHONE VALIDATION */
let phoneError = phone.nextElementSibling;
let phonePattern = /^[0-9]{10}$/;

if(phone.value.trim() === ""){
phone.classList.add("error-border");
phoneError.innerText = "Phone number required";
valid = false;
}
else if(!phonePattern.test(phone.value)){
phone.classList.add("error-border");
phoneError.innerText = "Enter valid 10 digit number";
valid = false;
}
else{
phone.classList.remove("error-border");
phoneError.innerText = "";
}

/* MESSAGE VALIDATION */
let messageError = message.nextElementSibling;

if(message.value.trim() === ""){
message.classList.add("error-border");
messageError.innerText = "Message is required";
valid = false;
}
else{
message.classList.remove("error-border");
messageError.innerText = "";
}

/* SUCCESS */

if(valid){
alert("Form submitted successfully!");
}

});

