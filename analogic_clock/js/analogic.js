/**
 * This function recup the coordinate 
 */
function coordinate() {
    let moment = new Date();
    let second = moment.getSeconds() * 6;
    let minute = moment.getMinutes() * 6;
    let hour = moment.getHours() * 30 + Math.round(minute / 12);
    displayTheCoordinate(hour, minute, second);
    setInterval(coordinate, 1000);
}

/**
 * This function display the coordinate from the clock
 * @param {number} hour 
 * @param {number} minute 
 * @param {number} second 
 */
function displayTheCoordinate(hour, minute, second) {
    document.getElementById("second").style.transform = "rotate(" + second + "deg)";
    document.getElementById("minute").style.transform = "rotate(" + minute + "deg)";
    document.getElementById("hour").style.transform = "rotate(" + hour + "deg)";
}

coordinate();
