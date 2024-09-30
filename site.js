console.log('These are not The droids you\'re looking for.')
const hours = new Date().getHours() // get the current hour

const isMorning = hours >= 4 && hours < 12 // is it morning?
const isAfternoon = hours >= 12 && hours < 17 // is it afternoon?
const isEvening = hours >= 17 || hours < 4 // is it evening?

const message = document.querySelector('#welcome')

function hello(hours){
    if (hours = isMorning) {return "Good Morning"}
    if (hours = isAfternoon) {return "Good Afternoon"}
    if (hours = isEvening) {return "Good Evening"} 
}

message.textContent = hello(hours)

const key = "It's a secret to everybody."
localStorage.setItem(key, 'And it shall remain that way.')