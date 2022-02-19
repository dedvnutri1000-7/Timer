const watch = document.querySelector('#watch');
let miliseconds = 0;
let timer;

const startTimer = () => {
    watch.classList.remove('paused');
    clearInterval(timer);
    timer = setInterval(()=> {
        miliseconds += 10;
        let dateTimer = new Date(miliseconds);
        watch.innerHTML = 
        ('0'+dateTimer.getUTCMinutes()).slice(-2) + ":" +
        ('0'+dateTimer.getUTCSeconds()).slice(-2) + ":" +
        ('0'+dateTimer.getUTCMilliseconds()).slice(-3, -1);
    },10);
}

const pausedTimer = () => {
    watch.classList.add('paused');
    clearInterval(timer);
}

const resetTimer = () => {
    watch.classList.remove('paused');
    clearInterval(timer);
    miliseconds = 0;
    watch.innerHTML = '00:00:00';
}

document.addEventListener('click',(e)=>{
    const element = e.target;
    if (element.id === "start") startTimer();
    if (element.id === "pause") pausedTimer();
    if (element.id === "reset") resetTimer();
});