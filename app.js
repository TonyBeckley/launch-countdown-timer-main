function countdown () {
    const endDate = new Date("August 15; 2022 00:00:00").getTime();
    const now = new Date().getTime();

    const diff = endDate - now ;

    const seconds = 1000;
    const minutes = seconds * 60;
    const hours = minutes * 60;
    const days = hours * 24;

    let timeDays = Math.floor(diff / days);
    let timeHours = Math.floor((diff % days) / hours);
    let timeMinutes = Math.floor((diff % hours) / minutes);
    let timeSeconds = Math.floor((diff % minutes) / seconds);
    
    document.getElementById("days").innerHTML = timeDays;
    document.getElementById("hours").innerHTML = timeHours;
    document.getElementById("minutes").innerHTML = timeMinutes;
    document.getElementbyId("seconds").innerHTML = timeSeconds;
}

setInterval(countdown(), 1000);