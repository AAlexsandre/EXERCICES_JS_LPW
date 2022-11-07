/**
 * This function create the digital clock
 */
function startClock() {
    let clock = new Date;
    let tabOfClock = [clock.getHours(), clock.getMinutes(), clock.getSeconds()].map(leadingZeros);
    document.getElementById("clock").textContent = tabOfClock.join(":");
    setTimeout(startClock, 1000);
}
startClock();

/**
 * This function add a leading zero to a digit
 * @param {number} digit 
 */
function leadingZeros(digit) { return (digit < 10) ? "0" + digit : digit; } 