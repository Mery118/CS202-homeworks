const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("eded daxil et: ", (input) => {
  let number = parseInt(input);
  let count = 0;

  for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
      count++;
    }
  }

  console.log("bolenlerinin sayi:", count);
  readline.close()
});