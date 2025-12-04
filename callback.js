function greet(name){
    console.log(`hello ${name}`)
}

function greetAdhi(greetFn){
    const name = "adhi";
    greetFn(name)
}

greetAdhi(greet)