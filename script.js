// API
const apiKey = "0628c5a844250f06a1dd39db9e68ec1b";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

// date, month and time 
let now = new Date();

function formatDate(Date) {

    // Array of days 
    let days = [
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
        "Monday",
        "Tuesday",
    ];

let dayOfWeek = days[now.getDay()]; 

// months

let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
];

let currentMonth = months[now.getMonth];

let currentDay = now.getDate()

// format hour and minutes

let hour = now.getHours();
// to have to digits it our/minutes is less than 10
if (hour < 10) {
    hour = `0${hour}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
    minutes = `0${minutes}`;
}

// combine everything using interpolation and then set inner HTML to formatted date 

let currentDate = `${dayOfWeek}, ${currentDay} ${currentMonth} - ${hour}h${minutes}`;
let currentDateTime = document.querySelector("#current-time");
currentDateTime.innerHTML = `${currentDate}`;
}

formatDate();

// For weekly forecast

// converting Unix timestamp (in seconds) to a JavaScript Date Object 
function formatDay(timestamp) {
    let date = new Date(timestamp * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day]; // returns day name corresponding to number of date.getDay()
}


function displayWeeklyForecast(response) {
    let forecast = response.data.daily.slice(1, 7); // forecast for 6 days except current day
    let forecastElement = document.querySelector("forecastweek");
    let forecastHTML = `<div class="day">`;
    forecast.forEach(function(forecastDay) { // repeats forecast everyday
        forecastHTML = forecastHTML + ``
    });

    forecastHTML
}


// API by city

function searchCity(city) {

    // wrong city
}