function clock() {
    const date = new Date()
    let years = date.getFullYear()
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()


minutes = update(minutes)
seconds = update(seconds)

document.getElementById('year-id').innerHTML = years;
document.getElementById('hour-id').innerHTML = hours;
document.getElementById('min-id').innerHTML = minutes;
document.getElementById('sec-id').innerHTML = seconds;
setTimeout(clock,1000);

}

function update(zero) {
    if(zero < 10) {
        zero = '0' + zero;
    }
    return zero;
}