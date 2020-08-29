//Global (name)
    //Local (name)
        //Local
    //Local

let name = 'Andrew'

if (true) {
    /* variable shadowing
     - When a variable in a local scope uses its value, instead of the
        global one*/
    let name = 'Mike' 

    if (true) {
        name = 'Jen' /* Stops as soon as it finds first instance of name
        if it doesn't find one it creates a new global variable of name- known
        as 'leaked global'*/
        console.log(name)
    }
}

if (true) {
    console.log(name)
}