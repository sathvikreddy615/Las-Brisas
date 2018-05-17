//let daysList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let now = new Date();
let day = now.getDay();
let hour = now.getHours();
let min = now.getMinutes();

const hoursHeader = document.getElementById("hoursTitle");

const timeKeeper = () => {
  if ((day === 0) && (hour >= 11 && hour <= 21)) {
    hoursHeader.innerHTML = "Welcome, We're Open!";
  } else if ((day === 6) && (hour >= 11 && hour <= 15)) {
    hoursHeader.innerHTML = "Welcome, We're Open!";
  } else if ((day >= 1 || day <= 6) && ((hour === 6 && min >= 30) || (hour > 6)) && (hour <= 21)) {
    hoursHeader.innerHTML = "Welcome, We're Open!";
  } else {
    hoursHeader.innerHTML = "Bummer, We're Closed!";
  } 
};

timeKeeper();

