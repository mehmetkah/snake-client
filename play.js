const connect = require("./client");
const {input}  = require("./input");
console.log("Connecting");
const conn = connect();
input(conn)
