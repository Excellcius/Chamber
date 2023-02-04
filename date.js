// Display current date in header
const currentDate = document.querySelector("#current-date");
const date = new Date();
const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
currentDate.textContent = date.toLocaleDateString("en-US", options);

// Update copyright year in footer
const year = document.querySelector("#year");
year.textContent = new Date().getFullYear();

// Display last modification date in footer
const lastModified = document.querySelector("#last-modified");
lastModified.textContent = document.lastModified;