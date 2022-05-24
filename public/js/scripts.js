// Hamburger Menu

// alert("OMG- Are you ready to see what's going on in this realm of cosmic deliciousness? If you're ready, click ok!");
// console.log("You're doing a great job, Kit");

// DOM Event Steps:

// 1. select hamburger icon --> event target
const hamburgerIcon = document.querySelector(".menu");
const navUl = document.querySelector(".nav-bar");

// 2. event handler --> show/hide

// 3. bind with event listener --> attach hamburger icon to event listener, NOT Menu Items
hamburgerIcon.addEventListener("click", () => {
    console.log("this has been clicked");
    navUl.classList.toggle("open-sesame");
});

// Date Method Test --> works 5/2
// let currentDate = Date();
// alert (currentDate);
