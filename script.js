const daysCard = document.querySelector("#days");
const hoursCard = document.querySelector("#hours");
const minutesCard = document.querySelector("#minutes");
const secondsCard = document.querySelector("#seconds");

let launch = 777351000;

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

const padNumbers = (number) => {
    let str = '' + number;
    while (str.length < 2) {
        str = '0' + str;
    }

    return str
}


const setCountdown = () => {

    let dayCount = Math.floor(launch / day)
    let hourCount = Math.floor((launch % day) / hour)
    let minuteCount = Math.floor((launch % hour) / minute)
    let secondCount = Math.floor((launch % minute) / second)

    daysCard.textContent = padNumbers(dayCount);
    hoursCard.textContent = padNumbers(hourCount)
    minutesCard.textContent = padNumbers(minuteCount)
    secondsCard.textContent = padNumbers(secondCount)

    launch = launch - 1000
};

setInterval(setCountdown, 1000);

