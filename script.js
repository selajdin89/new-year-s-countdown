const daysEL = document.getElementById("days");
const hoursEL = document.getElementById("hours");
const minsEL = document.getElementById("mins");
const secondsEL = document.getElementById("seconds");

const newYears = "31 December 2023";

const countdown = function () {
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();

  const totalSeconds = (newYearsDate - currentDate) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const mins = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  console.log(days, hours, mins, seconds);

  daysEL.innerHTML = days;
  hoursEL.innerHTML = `${hours}`.padStart(2, 0);
  minsEL.innerHTML = `${mins}`.padStart(2, 0);
  secondsEL.innerHTML = `${seconds}`.padStart(2, 0);
};

setInterval(countdown, 1000);
