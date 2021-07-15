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
var off = document.getElementById("contact");
var viewMore = document.getElementById("menu-hidden");

function showContact() {
  contact.style.display = "block";
}
function modalOff() {
  contact.style.display = "none";
}
function showMore() {
  viewMore.style.display = "block";
}
