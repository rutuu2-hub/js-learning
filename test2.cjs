const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Nasaa oruul: ", function (input) {
  const age = Number(input);

  if (isNaN(age) || age < 0) {
    console.log("Zuv too oruulna uu!");
  } else if (age >= 18) {
    console.log("Arhi uuj bolno.");
  } else {
    console.log("Nas hureegui baina.");
  }

  rl.close();
});
