const pomodor = document.querySelector('.pomodoro');
const shortBreak = document.querySelector('.short-break');
const longBreak = document.querySelector ('.long-break');
const settings = document.querySelector('.settings');
const iconClose = document.querySelector('.close');
const displaySettings = document.querySelector('.display-settings');

//buttons switch active

pomodor.addEventListener('click', () => {
    shortBreak.classList.remove('active');
    pomodor.classList.add('active');
    longBreak.classList.remove('active');
})

shortBreak.addEventListener('click', () =>{
    shortBreak.classList.add('active');
    pomodor.classList.remove('active');
    longBreak.classList.remove('active');
})

longBreak.addEventListener('click', () => {
    shortBreak.classList.remove('active');
    pomodor.classList.remove('active');
    longBreak.classList.add('active');
})

//display settings

settings.addEventListener('click', () => {
    displaySettings.style.display = 'flex';
})

iconClose.addEventListener('click', () => {
    displaySettings.style.display = 'none';
})

