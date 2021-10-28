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
const root = document.querySelector('root');

let firstInput = document.querySelector('#input-one');
const minutesField = document.querySelector('.minutes');

let secondInput = document.querySelector('#input-two');
let thirdInput = document.querySelector('#input-three');

//buttons switch active

pomodor.addEventListener('click', () => {
    shortBreak.classList.remove('active');
    pomodor.classList.add('active');
    longBreak.classList.remove('active');
    minutesField.innerHTML = `${firstInput.value}:00`;
})

shortBreak.addEventListener('click', () =>{
    shortBreak.classList.add('active');
    pomodor.classList.remove('active');
    longBreak.classList.remove('active');
    minutesField.innerHTML = `${secondInput.value}:00`;
})

longBreak.addEventListener('click', () => {
    shortBreak.classList.remove('active');
    pomodor.classList.remove('active');
    longBreak.classList.add('active');
    minutesField.innerHTML = `${thirdInput.value}:00`;
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

