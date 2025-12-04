// const addFn = require("./app.js")

// console.log("Hello java script");

// const sum =(1,2)
// const sum2 = (2,6)
// console.log(sum)
// console.log(sum2)


// require("./batman")
// require("./superman")

// const superHero = require("./superHero");
// console.log(superHero.getName())

// superHero.setName("Superman")
// console.log(superHero.getName())

// const NewsuperHero = require("./superHero");
// console.log(NewsuperHero.getName())

const superHero = require("./superHero.js");

const batman = new superHero("Batman")
console.log(batman.getName())
batman.setName("SpiderMan")
console.log(batman.getName())

const superman = new superHero("SuperMan")
console.log(superman.getName())