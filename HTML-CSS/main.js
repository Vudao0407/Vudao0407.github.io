//Select element function

const selectElement = function (element) {
  return document.querySelector(element);
};
let menuToggler = selectElement(".menu-toggle");
let body = selectElement("body");

menuToggler.addEventListener("click", function () {
  body.classList.toggle("open");
});

//croll
window.sr = ScrollReveal();
sr.reveal(".animate-left", {
  origin: "left",
  duration: 1000,
  distance: "25rem",
  delay: 300,
});
sr.reveal(".animate-right", {
  origin: "right",
  duration: 1000,
  distance: "25rem",
  delay: 600,
});
sr.reveal(".animate-top", {
  origin: "top",
  duration: 1000,
  distance: "25rem",
  delay: 600,
});
sr.reveal(".animate-bottom", {
  origin: "bottom",
  duration: 1000,
  distance: "25rem",
  delay: 600,
});

var breakfast = document.getElementById("breakfast");
var lunch = document.getElementById("lunch");
var snacks = document.getElementById("snacks");
var dinner = document.getElementById("dinner");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");
var btn5 = document.getElementById("btn5");
var contact = document.getElementById("contact");

function openBreakfast() {
  breakfast.style.transform = "translateX(0)";
  lunch.style.transform = "translateX(100%)";
  snacks.style.transform = "translateX(100%)";
  dinner.style.transform = "translateX(100%)";
  btn2.style.color = "#c59d5f";
  btn3.style.color = "#000";
  btn4.style.color = "#000";
  btn5.style.color = "#000";
  breakfast.style.transitionDelay = "0.3s";
  lunch.style.transitionDelay = "0s";
  snacks.style.transitionDelay = "0s";
  dinner.style.transitionDelay = "0s";
}

function openLunch() {
  debugger;
  breakfast.style.transform = "translateX(100%)";
  lunch.style.transform = "translateX(0)";
  snacks.style.transform = "translateX(100%)";
  dinner.style.transform = "translateX(100%)";
  btn3.style.color = "#c59d5f";
  btn2.style.color = "#000";
  btn4.style.color = "#000";
  btn5.style.color = "#000";
  breakfast.style.transitionDelay = "0s";
  lunch.style.transitionDelay = "0.3s";
  snacks.style.transitionDelay = "0s";
  dinner.style.transitionDelay = "0s";
}

function openSnacks() {
  breakfast.style.transform = "translateX(100%)";
  lunch.style.transform = "translateX(100%)";
  snacks.style.transform = "translateX(0)";
  dinner.style.transform = "translateX(100%)";
  btn4.style.color = "#c59d5f";
  btn3.style.color = "#000";
  btn2.style.color = "#000";
  btn5.style.color = "#000";
  breakfast.style.transitionDelay = "0s";
  lunch.style.transitionDelay = "0s";
  snacks.style.transitionDelay = "0.3s";
  dinner.style.transitionDelay = "0s";
}
function openDinner() {
  breakfast.style.transform = "translateX(100%)";
  lunch.style.transform = "translateX(100%)";
  snacks.style.transform = "translateX(100%)";
  dinner.style.transform = "translateX(0)";
  btn5.style.color = "#c59d5f";
  btn3.style.color = "#000";
  btn4.style.color = "#000";
  btn2.style.color = "#000";
  breakfast.style.transitionDelay = "0s";
  lunch.style.transitionDelay = "0s";
  snacks.style.transitionDelay = "0s";
  dinner.style.transitionDelay = "0.3s";
}
function showContact() {
  contact.style.display = "block";
}
