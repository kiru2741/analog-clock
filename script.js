let hr = document.getElementById('hr')
let min = document.getElementById('min')
let sec = document.getElementById('sec')

setInterval(function(){
    let now = new Date()
    let seconds = now.getSeconds()
    let minutes = now.getMinutes()
    let hours = now.getHours()
    sec.style.transform = `rotate(${seconds * 6 + 180}deg)`
    min.style.transform = `rotate(${minutes * 6 + seconds / 10 + 180}deg)`
    hr.style.transform = `rotate(${hours * 30 + (minutes / 10) * 5 + 180}deg)`

    const obj = {
        month:'short',
        day: 'numeric',
        weekday:'short',
    }
    let formattedDateDay = new Intl.DateTimeFormat('en-IN', obj).format(now);
    document.querySelector('h1').textContent = formattedDateDay;
},1000)