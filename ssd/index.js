const lastModified = new Date(document.lastModified);
const formattedDate = lastModified.toLocaleString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
});

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("lastUpdated").innerHTML += formattedDate;
});

function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML = today;
    setTimeout(startTime, 1000);
}

function checkTime(i) {
    if (i < 10) { i = "0" + i; }
    return i;
}