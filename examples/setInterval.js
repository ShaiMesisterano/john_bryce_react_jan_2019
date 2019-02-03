let seconds = 60;

const tick = () => {
    --seconds
    console.log(seconds);   
};
const interval = 1000; // 1000ms = one second

setInterval( tick, interval );