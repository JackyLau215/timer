const args = process.argv.slice(2);

  for (let arg of args) {
    let numArg = Number(arg);
    if (numArg >= 0 && Number.isInteger(numArg)) {
      setTimeout(() => {
        process.stdout.write('\x07');
      }, numArg * 1000);
    };
  };
