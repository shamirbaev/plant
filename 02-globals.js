// GLOBALS  - NO WINDOW !!!!

// __dirname  - path to current directory
// __filename - file name
// require    - function to use modules (CommonJS)
// module     - info about current module (file)
// process    - info about env where the program is being executed


const timer = setInterval(() => {
  console.log('Running...');
}, 1000);

setTimeout(() => {
  clearInterval(timer); // stops the interval after 5 sec
}, 5000);

module.exports = timer;