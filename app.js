const days = document.querySelector(".days");
const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");

const year = new Date().getFullYear();

const updateCountdown = () => {
  const todaysDate = new Date();
  const openingDate = new Date(`${year}-5-20`);

  const diff = openingDate - todaysDate;

  const remainingDays = Math.floor(diff / 1000 / 60 / 60 / 24);
  const remainingHours = Math.floor(diff / 1000 / 60 / 60) % 24;
  const remainingMinutes = Math.floor(diff / 1000 / 60) % 60;
  const remainingSeconds = Math.floor(diff / 1000) % 60;

  days.innerText = remainingDays;
  hours.innerText = remainingHours < 10 ? "0" + remainingHours : remainingHours;
  minutes.innerText =
    remainingMinutes < 10 ? "0" + remainingMinutes : remainingMinutes;
  seconds.innerText =
    remainingSeconds < 10 ? "0" + remainingSeconds : remainingSeconds;
};

setInterval(updateCountdown, 1000);
