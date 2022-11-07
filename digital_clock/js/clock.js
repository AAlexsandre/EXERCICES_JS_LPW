/**
 * This function add a leading zero to a digit
 * @param {number} digit 
 */
// function leadingZeros(digit) { return (digit < 10) ? "0" + digit : digit; }

const leadingZeros = (digit) => { return (digit < 10) ? "0" + digit : digit; }

/**
 * This function create the digital clock
 */
function startClock() {
    let clock = new Date;
    document.getElementById("clock").textContent = [clock.getHours(), clock.getMinutes(), clock.getSeconds()].map(leadingZeros).join(":");
    setTimeout(startClock, 1000);
}
startClock();