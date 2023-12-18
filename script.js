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

    // funcionalidade do relógio analógico
    const secondDegrees = ((360 / 60) * second) - 90;
    const minuteDegrees = ((360 / 60) * minute) - 90;
    const hourDegrees = ((360 / 12) * hour) - 90;

    secondElement.style.transform = `rotate(${secondDegrees}deg)`;
    minuteElement.style.transform = `rotate(${minuteDegrees}deg)`;
    hourElement.style.transform = `rotate(${hourDegrees}deg)`;
}

function fixZero(time) {
    return time < 10 ? `0${time}` : time;
}

setInterval(updateClock, 1000);
updateClock(); // para não ficar sem informação na tela