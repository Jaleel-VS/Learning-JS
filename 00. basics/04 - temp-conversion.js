let fahrenheit = 50
let celcius = (fahrenheit - 32) * 5 / 9
let kelvin = (fahrenheit - 32) * 5 / 9 + 273.15
let tempStringC = `${fahrenheit}°F = ${celcius}°C`
let tempStringK = `${fahrenheit}°F = ${kelvin}°K`

console.log(tempStringC)
console.log(tempStringK)