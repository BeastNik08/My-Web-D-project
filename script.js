//document.addEventListener("DOMContentLoaded", () => {
    
//     function showAlert() {
//         alert("Order Now button clicked!");
//     }

//     const loginButton = document.querySelector(".login1");
//     const signupButton = document.querySelector(".login2");

//     loginButton.addEventListener("click", (event) => {
//         event.preventDefault();
//         alert("Login button clicked!");
//         window.location.href = "login2.html"; 
//     });

//     signupButton.addEventListener("click", (event) => {
//         event.preventDefault();
//         alert("Signup button clicked!");
//         window.location.href = "login.html"; 
//     });

//     const orderButton = document.querySelector(".order");
//     orderButton.addEventListener("click", showAlert);
// });




 


let hrs=document.getElementById("hrs");
let min=document.getElementById("min");
let sec=document.getElementById("sec");

setInterval(()=>{
    let currentTime=new Date();
    hrs.innerHTML=(currentTime.getHours()<10?"0":"")+ currentTime.getHours();
    min.innerHTML=(currentTime.getMinutes()<10?"0":"")+ currentTime.getMinutes();
    sec.innerHTML=(currentTime.getSeconds()<10?"0":"")+ currentTime.getSeconds();
},1000)




// window.onscroll = function() {makeNavbarSticky()};

// var navbar = document.getElementsByID("navbar");
// var sticky = navbar.offsetTop;

// function makeNavbarSticky() {
//     if (window.pageYOffset >= sticky) {
//         navbar.classList.add("sticky");
//     } else {
//         navbar.classList.remove("sticky");
//     }
// }

 