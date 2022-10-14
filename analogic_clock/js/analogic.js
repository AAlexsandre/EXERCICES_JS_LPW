function coordinate() {
    let moment = new Date();
    let second = moment.getSeconds() * 6;
    let minute = moment.getMinutes() * 6;
    let hour = moment.getHours() * 30 + Math.round(minute / 12);
    display_the_coordinate(hour, minute, second);

}

function display_the_coordinate(hour, minute, second) {
    document.getElementById("second").style.transform = "rotate(" + second + "deg)";
    document.getElementById("minute").style.transform = "rotate(" + minute + "deg)";
    document.getElementById("hour").style.transform = "rotate(" + hour + "deg)";
}

coordinate();
setInterval(coordinate, 1000);