const EventEmitter = require('events');

class myEmitter extends EventEmitter{
    constructor() {
        super()
            this.greeting="hello"
    }
    greet(name) {
        console.log(`greeting ${this.greeting} ${name}`)
    }
}
const myComstemEmitter = new myEmitter();
myComstemEmitter.on("greet", (input) => {
    console.log(`greeting event ${input}`)
});
myComstemEmitter.greet("leose")