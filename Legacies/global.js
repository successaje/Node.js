// console.log(global)

global.setTimeout(() => {
    console.log("In the timeout")
    clearInterval(int)
}, 3000);

const int = setInterval(() => {
    console.log("Interval")
}, 1000)

console.log(document.querySelector);