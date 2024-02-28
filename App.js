let button= document.querySelector('button')
let inputValue = document.querySelector('input')
let temp = document.querySelector('.temp')
let humidity = document.querySelector('.humidity')
let wind = document.querySelector('.wind')
let nameVal = document.querySelector('.nameval')

button.addEventListener('click', ()=>{
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue.value}&units=metric&appid=884f41c07c72b8cb33ed54303c5870d1`)
    .then(response=>response.json())
    .then (displayData)
    .catch(err=>alert('Wrong city name'))
    
})

const displayData= (weather)=>{
    temp.innerHTML=`${weather.main.temp}°C`
    nameVal.innerHTML=`${weather.name}`
    humidity.innerHTML=`${weather.main.humidity}%`
    wind.innerHTML=`${weather.wind.speed}m/s`
    console.log(weather);
}
