let d= new Date();
let time = d.toLocaleTimeString();

let intervalID = setInterval(callback, 1000, time);

function callback(time){
    console.log(time);
}

