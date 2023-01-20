const days = document.querySelector(".days");
const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");

const year = new Date().getFullYear();
const todaysDate = new Date(`${year}-1-20`);
const openingDate = new Date(`${year}-5-20`);
