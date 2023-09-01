const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active')
})

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active')
})

btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup')
})

iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup')
})

window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");

    loader.classList.add("loader-hidden");

    loader.addEventListener("transitioned", () => {
        document.body.removeChild("loader");
    })
})

// Set the date and time to countdown to (September 11th, 2023)
var countdownDate = new Date("2023-09-11 00:00:00").getTime();

// Update the countdown clock every second
var countdownInterval = setInterval(function() {
    var currentDate = new Date().getTime();
    var timeRemaining = countdownDate - currentDate;

    // Calculate days, hours, minutes, and seconds
    var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // Display the countdown or anniversary message
    var countdownElement = document.getElementById("countdown");
    if (timeRemaining <= 0) {
        clearInterval(countdownInterval);
        countdownElement.innerHTML = "Happy 1 Year Anniversary Project Studios Developing Games For Others To Enjoy";
    } else {
        countdownElement.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    }
}, 1000); // Update every second
