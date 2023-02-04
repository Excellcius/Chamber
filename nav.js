// Toggle navigation menu on small and medium views
const hamburger = document.querySelector(".hamburger");
const navigation = document.querySelector("nav");

hamburger.addEventListener("click", function() {
navigation.classList.toggle("show");
});
