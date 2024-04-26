const EventEmitter = require('events');//events returns a class so create an object

const emitter = new EventEmitter();

emitter.on("Order products", (type,quantity) => { // reponse ti the event
    console.log(`${quantity} ${type} is ordered`);
})

emitter.on("Order products", (type) => {
    if (type === "Book") {
        console.log("Delivery will be delayed");
    }
})

console.log("Waiting for event...");

emitter.emit("Order products","Book","2");// emitting an event