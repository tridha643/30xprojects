const monthNameEl = document.getElementById("month-name");
const dayNameEl = document.getElementById("day-name");
const dayNumEl = document.getElementById("day-number");
const yearEl = document.getElementById("year");

const date = new Date();
const month = date.getMonth();
monthNameEl.innerText = date.toLocaleDateString("en",{month:"long"})//strings
dayNameEl.innerText = date.toLocaleDateString("en",{weekday:"long"})//strings
dayNumEl.innerText = date.getDate()//number
yearEl.innerText = date.getFullYear()//number value 