const digitalElement = document.querySelector('.digital');
const secondElement = document.querySelector('.p_s');
const minuteElement = document.querySelector('.p_m');
const hourElement = document.querySelector('.p_h');

function updateClock() {
    const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();

    digitalElement.innerHTML = `
        ${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}
    `;

}

function fixZero(time) {
    return time < 10 ? `0${time}` : time;
}

setInterval(updateClock, 1000);