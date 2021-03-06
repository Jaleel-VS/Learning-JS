// Multiple argments
let add = function(a, b, c) {
    return a + b + c
}

let result = add(10, 1, 5)
console.log(result)

// Default arguments

let getScoreText = function(name = "Anon", score = 0) {
    console.log(`Name: ${name}\nScore: ${score}`)
}

//You have to pass in undefined to be able to pass in the other arguments if you don't want to use the first
getScoreText("Steve", 50)


// challenge
let tipCalc = function(total, tipPercent = 20) {
    let tip = total * (tipPercent / 100)
    return `A ${tipPercent}% tip on $${total} would be $${tip}`
}

let tip = tipCalc(40, 25)
console.log(tip)