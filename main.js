const pomodor = document.querySelector('.pomodoro');
const shortBreak = document.querySelector('.short-break');
const longBreak = document.querySelector ('.long-break');

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



