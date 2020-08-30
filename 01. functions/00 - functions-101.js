// Function - input (argument), code, output (return value)

let greetUser = function () {
    console.log('Welcome user!')
}

greetUser()

let square = function (num) {
    let result = num * num
    return result
}

let value = square(3)
let otherValue = square(10)
console.log(value);
console.log(otherValue);

//Challenge

let convertFTC = function(temp) {
    let celcius = (temp - 32) * 5 / 9
    return celcius
}

let fah = 68
console.log(`${fah}°F = ${convertFTC(fah)}°C`)