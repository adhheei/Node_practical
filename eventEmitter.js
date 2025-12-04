// const EventEmitter = require ("node:events")

// const emitter = new EventEmitter();

// emitter.on("order-pizza", (size,toppings) => {
//     console.log(`Order recevied! Baking a ${size} pizza with ${toppings}`)
// });

// emitter.emit ("order-pizza","large","Mashroom")



// const { log } = require('console');
// const EventEmitter = require('events');
// const emitter = new EventEmitter();

// emitter.on('greet',() => {
//     console.log('Hello, welcome!');
    
// });

// emitter.emit('greet')

// console.log(__dirname)
// console.log(__filename)
// console.log(module)


const EventEmitter =require('events')
const emitter = new EventEmitter()

emitter.on('greet', () => {
    console.log("hello node.js")
})

emitter.emit('greet')