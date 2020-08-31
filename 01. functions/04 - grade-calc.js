// students score, total possible score
// 15/20 -> You got a C (75%)

//A 90 -100, B 80-89, C 70 - 79, D 60 -69, F 0 - 59

let getGrade = function(studentScore, totalScore) {
    let letterGrade
    let percentage = studentScore / totalScore * 100
    if (percentage >= 90) {
        letterGrade = "an A"
    } else if (percentage >= 80) {
        letterGrade = "a B"
    } else if (percentage >= 70) {
        letterGrade = "a C"
    } else if (percentage >= 60) {
        letterGrade = "a D"
    } else {
        letterGrade = "an F"
    }

    return `${studentScore}/${totalScore} -> You got ${letterGrade} (${percentage}%)`
}

console.log(getGrade(9, 20))

