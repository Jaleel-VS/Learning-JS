// Global scope (convertFTC, tempOne, tempTwo)
    // Local scope (fahrenheit, celcius)
        // Local scope (isFreezing)


let convertFTC = function(temp) {
    let celcius = (temp - 32) * 5 / 9

    if(celcius <= 0) {
        let isFreezing = true
    }


    return celcius
}

let tempOne = convertFTC(32)
let tempTwo = convertFTC(68)

console.log(tempOne)
console.log(tempTwo)
