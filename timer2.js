// The user can press b and it should beep right away
// The user can input any number from 1 to 9 and it should
// immediately output "setting timer for x seconds...", 
// and beep after that number of seconds has passed
// The user can use ctrl + c to exit the program, at which point the program should say "Thanks for using me, ciao!" before terminating

const stdin = process.stdin;
// don't worry about these next two lines of setup work.
stdin.setRawMode(true);
stdin.setEncoding('utf8');

stdin.on('data', (key) => {
  if ( key === 'b') {
    process.stdout.write('\x07');
  };

  let isNumber = Number(key);
  if (Number.isInteger(isNumber) && isNumber > 0) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, key * 1000);
  }
    
  if (key === '\u0003') {
    process.stdout.write('Thanks for using me, ciao! \n');
    process.exit();
  }

});