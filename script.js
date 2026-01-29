document.addEventListener("DOMContentLoaded", function () {
var chips = document.querySelectorAll(".chip");
var projectCards = document.querySelectorAll(".project-card");
chips.forEach(function (chip) {
chip.addEventListener("click", function () {
var filter = chip.getAttribute("data-filter");
chips.forEach(function (c) {
c.classList.remove("chip-active");
});
chip.classList.add("chip-active");
projectCards.forEach(function (card) {
var genre = card.getAttribute("data-genre");
if (filter === "all" || genre === filter) {
card.style.display = "";
card.style.opacity = "1";
card.style.transform = "translateY(0)";
} else {
card.style.opacity = "0";
card.style.transform = "translateY(8px)";
setTimeout(function () {
card.style.display = "none";
}, 160);
}
});
});
});
var observer;
if ("IntersectionObserver" in window) {
observer = new IntersectionObserver(function (entries) {
entries.forEach(function (entry) {
if (entry.isIntersecting) {
entry.target.classList.add("animated-in");
observer.unobserve(entry.target);
}
});
}, {
threshold: 0.12
});
document.querySelectorAll("section, .project-card, .member-card, .contact-panel, .contact-form").forEach(function (el) {
el.setAttribute("data-animate", "");
observer.observe(el);
});
} else {
document.querySelectorAll("[data-animate]").forEach(function (el) {
el.classList.add("animated-in");
});
}
var fakeSubmit = document.getElementById("fakeSubmit");
var toast = document.getElementById("toast");
if (fakeSubmit && toast) {
fakeSubmit.addEventListener("click", function () {
toast.classList.add("toast-visible");
setTimeout(function () {
toast.classList.remove("toast-visible");
}, 2600);
});
}
});

