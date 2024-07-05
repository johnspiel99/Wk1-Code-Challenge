//function prompt input of speed
function speedDetector() {
    const speed = prompt("Enter the speed of the car:");
    speed = Number(speed);
//evaluate the speed and demerits
    if (speed < 70) {
        console.log("Ok");
    } else {
        const demeritPoints = Math.floor((speed - 70) / 5);
        if (demeritPoints > 12) {
            console.log("License suspended");
        } else {
            console.log(`Points: ${demeritPoints}`);
        }
    }
}
// callback the points
speedDetector();
