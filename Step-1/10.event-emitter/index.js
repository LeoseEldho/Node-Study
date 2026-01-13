const eventEmitter = require('events');

const myEvent = new eventEmitter();

myEvent.on("greet", (name) => {
    console.log("hai",name)
});
myEvent.emit("greet","leo")