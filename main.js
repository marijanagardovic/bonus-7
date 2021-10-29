const pomodor = document.querySelector('.pomodoro');
const shortBreak = document.querySelector('.short-break');
const longBreak = document.querySelector ('.long-break');
const settings = document.querySelector('.settings');
const iconClose = document.querySelector('.close');
const displaySettings = document.querySelector('.display-settings');
const fontOne = document.querySelector('.first-font');
const fontTwo = document.querySelector('.second-font');
const fontThree = document.querySelector('.third-font');
const body = document.querySelector('body');
const colorOne = document.querySelector('.pink');
const colorTwo = document.querySelector('.blue');
const colorThree = document.querySelector('.purple');
const applyBtn = document.querySelector('.apply');

const minutesField = document.querySelector('.minutes');
const minutesShort = document.querySelector('.short');
const minutesLong = document.querySelector('.long');

let firstInput = document.querySelector('#input-one');
let secondInput = document.querySelector('#input-two');
let thirdInput = document.querySelector('#input-three');
let restart = document.querySelector('.restart');
let restartShort = document.querySelector('.short-restart');
let restartLong = document.querySelector('.long-restart');

let pause = document.querySelector('.pause');
let pauseShort = document.querySelector('.short-pause');
let pauseLong = document.querySelector('.long-pause');

//buttons switch active

pomodor.addEventListener('click', () => {
    shortBreak.classList.remove('active');
    pomodor.classList.add('active');
    longBreak.classList.remove('active');
    minutesField.style.display = 'flex';
    minutesShort.style.display = 'none';
    minutesLong.style.display = 'none';
    restart.style.display = 'flex';
    restartShort.style.display = 'none';
    restartLong.style.display = 'none';
    pause.style.display = 'none';
    pauseShort.style.display = 'none';
    pauseLong.style.display = 'none';
    minutesField.innerHTML = `${firstInput.value < 10 ? '0'+firstInput.value : firstInput.value}:00`;
})

shortBreak.addEventListener('click', () =>{
    shortBreak.classList.add('active');
    pomodor.classList.remove('active');
    longBreak.classList.remove('active');
    minutesField.style.display = 'none';
    minutesShort.style.display = 'flex';
    minutesLong.style.display = 'none';
    restart.style.display = 'none';
    restartShort.style.display = 'flex';
    restartLong.style.display = 'none';
    pause.style.display = 'none';
    pauseShort.style.display = 'none';
    pauseLong.style.display = 'none';
    minutesShort.innerHTML = `${secondInput.value < 10 ? '0'+secondInput.value : secondInput.value}:00`;
})

longBreak.addEventListener('click', () => {
    shortBreak.classList.remove('active');
    pomodor.classList.remove('active');
    longBreak.classList.add('active');
    minutesField.style.display = 'none';
    minutesShort.style.display = 'none';
    minutesLong.style.display = 'flex';
    restart.style.display = 'none';
    restartShort.style.display = 'none';
    restartLong.style.display = 'flex';
    pause.style.display = 'none';
    pauseShort.style.display = 'none';
    pauseLong.style.display = 'none';
    minutesLong.innerHTML = `${thirdInput.value < 10 ? '0'+thirdInput.value : thirdInput.value}:00`;
})

//display settings

settings.addEventListener('click', () => {
    displaySettings.style.display = 'flex';
})

iconClose.addEventListener('click', () => {
    displaySettings.style.display = 'none';
})

//changing fonts

fontOne.addEventListener('click', () => {
    fontTwo.classList.remove('act');
    fontOne.classList.add('act');
    fontThree.classList.remove('act');
    body.style.fontFamily = 'Kumbh Sans';
})

fontTwo.addEventListener('click', () => {
    fontTwo.classList.add('act');
    fontOne.classList.remove('act');
    fontThree.classList.remove('act');
    body.style.fontFamily = 'Roboto Slab';
})

fontThree.addEventListener('click', () => {
    fontTwo.classList.remove('act');
    fontOne.classList.remove('act');
    fontThree.classList.add('act');
    body.style.fontFamily = 'Space Mono';
})

//button apply

applyBtn.addEventListener('click', () => {
    displaySettings.style.display = 'none';
    minutesField.innerHTML = `${firstInput.value}:00`;
    minutesShort.innerHTML = `${secondInput.value}:00`;
    minutesLong.innerHTML = `${thirdInput.value}:00`;
})



// changing colors

colorOne.addEventListener('click', () => {
    document.documentElement.style.setProperty('--pink', '#F87070');
    colorOne.innerHTML = '✓';
    colorTwo.innerHTML = '';
    colorThree.innerHTML = '';
})

colorTwo.addEventListener('click', () => {
    document.documentElement.style.setProperty('--pink', 'rgba(112, 243, 248, 1)');
    colorOne.innerHTML = '';
    colorTwo.innerHTML = '✓';
    colorThree.innerHTML = '';
})

colorThree.addEventListener('click', () => {
    document.documentElement.style.setProperty('--pink', 'rgba(216, 129, 248, 1)');
    colorOne.innerHTML = '';
    colorTwo.innerHTML = '';
    colorThree.innerHTML = '✓';
})


//pomodoro counting

let minutes = firstInput.value - 1;
let seconds = 60;
let clear;
function countFunc () {
    clear = setInterval(() => {
        if(seconds <= 60 && seconds > 00) {
            seconds -= 1;
            }
            if(minutes > 0 && seconds == 0){
                minutes -= 1;
                seconds = 59;
            }
            if(minutes == 0 && seconds == 0){
                minutes = 0;
                seconds = 0;
                minutesField.innerHTML = `${minutes}0:${seconds}0`;
            }
            minutesField.innerHTML = `${minutes < 10 ? '0'+minutes : minutes}:${seconds < 10 ? '0'+seconds : seconds}`;   

    },1000);
    restart.style.display = 'none';
    pause.style.display = 'flex';
}

restart.addEventListener('click', countFunc);
function stopCount () {
    clearInterval(clear);
    restart.style.display = 'flex';
    pause.style.display = 'none';
}

pause.addEventListener('click', stopCount);

//short break 

let minutesTwo = secondInput.value - 1;
let secondsTwo = 60;
let clearTwo;

function countFuncTwo () {
    clearTwo = setInterval(() => {
        if(secondsTwo <= 60 && secondsTwo > 00) {
            secondsTwo -= 1;
            }
            if(minutesTwo > 0 && secondsTwo == 0){
                minutesTwo -= 1;
                secondsTwo = 59;
            }
            if(minutesTwo == 0 && secondsTwo == 0){
                minutesTwo = 0;
                secondsTwo = 0;
                minutesShort.innerHTML = `${minutesTwo}0:${secondsTwo}0`;
            }

            minutesShort.innerHTML =  `${minutesTwo < 10 ? '0'+minutesTwo : minutesTwo}:${secondsTwo < 10 ? '0'+secondsTwo : secondsTwo}`;      
    },1000);
    restartShort.style.display = 'none';
    pauseShort.style.display = 'flex';

}

restartShort.addEventListener('click', countFuncTwo);
function stopCountTwo () {
    clearInterval(clearTwo);
    restartShort.style.display = 'flex';
    pauseShort.style.display = 'none';
}

pauseShort.addEventListener('click', stopCountTwo);


//long break 

let minutesThree = thirdInput.value - 1;
let secondsThree = 60;
let clearThree;

function countFuncThree () {
    clearThree = setInterval(() => {
        if(secondsThree <= 60 && secondsThree > 00) {
            secondsThree -= 1;
            }
            if(minutesThree > 0 && secondsThree == 0){
                minutesThree -= 1;
                secondsThree = 59;
            }
            if(minutesThree == 0 && secondsThree == 0){
                minutesThree = 0;
                secondsThree = 0;
                minutesLong.innerHTML = `${minutesThree}0:${secondsThree}0`;
            }
            minutesLong.innerHTML = `${minutesThree < 10 ? '0'+minutesThree : minutesThree}:${secondsThree < 10 ? '0'+secondsThree : secondsThree}`;
        },1000);

        pauseLong.style.display = 'flex';
        restartLong.style.display = 'none';
}
 
restartLong.addEventListener('click', countFuncThree);
function stopCountThree () {
    clearInterval(clearThree);
    restartLong.style.display = 'flex';
    pauseLong.style.display = 'none';
}

pauseLong.addEventListener('click', stopCountThree);



 