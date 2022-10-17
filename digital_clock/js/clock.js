/**
 * This function create the digital clock
 */
function start_clock() {
    let clock = new Date;
    let tab_of_clock = [clock.getHours(), clock.getMinutes(), clock.getSeconds()].map(leadingZeros);
    document.getElementById("clock").textContent = tab_of_clock.join(":");
    setTimeout(start_clock, 1000);
}
start_clock();

/**
 * This function add a leading zero to a digit
 * @param {number} digit 
 */
function leadingZeros(digit) { return (digit < 10) ? "0" + digit : digit; } 