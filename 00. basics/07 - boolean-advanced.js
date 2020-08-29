let isAccountLocked = false
let userRole = 'user'

if (isAccountLocked) {
    console.log("Is account locked");
} else if (userRole === 'admin') {
    console.log("Welcome Admin")
} else {
    console.log("Welcome!");
}

//Challenge
let temp = 80
let isFreezing = temp <= 32
let isHot = temp >= 110

if (isFreezing) {
    console.log("It is freezing outside!")
} else if (isHot) {
    console.log("It's hot!");
} else {
    console.log("It's perfect outside!")
}

