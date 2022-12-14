let connection;

const handleUserInput = function (key) {
  if (key === "\u0003") {
    process.exit();
  }

  if (key === "w") {
    connection.write("Move: up");
  }
  if (key==="s") {
    connection.write("Move: down")
  }
  if (key==="d") {
    connection.write("Move: right")
  }
  if (key==="a") {
    connection.write("Move: left")
  }
    if (key==="k") {
      connection.write("Say: HI!")
    }
  
};
const setupInput = function (conn) {
  const stdin = process.stdin;
  connection = conn;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = {
  input: setupInput,
  handleuser: handleUserInput,
};
