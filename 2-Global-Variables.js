// # GLOBALS - NO WINDOW !!!!

// 1. _dirname - path to current directory
// 1. _filename - file name
// 1. require - function to use modules (CommonJS)
// 1. module - info about current module (file)
// 1. process - info about env where the program is being

console.log(__dirname);
console.log(__filename);

setInterval( function() {
    console.log('Hello world');

}, 1000)