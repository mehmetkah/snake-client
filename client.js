

const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '10.0.0.169' ,
    port: 50541
  
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("connect", () => {
   console.log("Succesfully connected!")
  conn.write('Name: Mfk')
  });
  
  return conn;
  
};


module.exports= connect
