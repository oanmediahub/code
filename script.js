const deadline = new Date("2024-02-26T09:30:00+03:00").getTime();

const countdown = setInterval(function () {
    const now = new Date().getTime();

    const distance = deadline - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = days + "d: " + hours + "h: " + minutes + "m: " + seconds + "s";

    if (distance < 0) {
        clearInterval(countdown);
        document.getElementById("countdown").innerHTML = "Registration Closed";
    }
}, 1000);
