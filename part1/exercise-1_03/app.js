let uuid = require('uuid');

const my_hash = uuid.v4();

function printHash() {
    console.log(new Date() + ": " + my_hash);
}

setInterval(printHash, 5000);

printHash();