let temp = 80
let isFreezing = temp <= 31
let isHot = temp >= 110

if (isFreezing) {
    console.log("It is freezing outside!")
}

if (isHot) {
    console.log("It's hot!");
}

//Challenge

let age = 95
let message = ""

if (age <= 7) {
    message = "child"
}
if (age >= 65) {
    message = "senior"
}

console.log(`You qualify for the ${message} discount`);