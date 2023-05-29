// API key: d49b1f6a58f01678d1f0b70e468590c6

var searchBtn = document.querySelector('#searchBtn');
var locationInput = document.querySelector('#location');
var tempEl = document.querySelector('#main-city-temp');
var humidityEl = document.querySelector('#main-city-humid');
var windEl = document.querySelector('#main-city-wind');
var locationName = document.querySelector('#main-city-name');
var forecastCardEl = document.querySelector('#five-day');
var historyEl = document.querySelector('#search-history');
var searchList = [] // an array that gets added to the local storage to added subsequent inputs into
                    // local storage without overwriting the previous input

init()

function init() {
    var storedSearch = JSON.parse(localStorage.getItem('searchList'));
    if (storedSearch !== null) {
        searchList = storedSearch;
    }

    renderHistory()
}

function storeHistory() {
    localStorage.setItem('searchList',JSON.stringify(searchList))
}

function renderHistory() {
    for (var i = 0; i < searchList.length; i++) {
        var search = searchList[i];




    }


    if (!search) {
        return;
    } else {
        callWeather(search)
        callForecast(search)
    };
}



// fetch data from API url for forecast
function callForecast(search) {

    var key = 'd49b1f6a58f01678d1f0b70e468590c6';
    var queryURL =
      "http://api.openweathermap.org/data/2.5/forecast?units=imperial&q=" + search + "&appid=" + key;

      fetch(queryURL)
        .then(function(response) {
            if (response.ok) {
                response.json().then(function (data) {
                    console.log(data);
                    console.log(data.city.name);
                    console.log(data.list[0].main.temp)
                    displayForecast(data,search);
                });
            } else {
                alert('Invalid Input');
            }
        })
  };


// fetch data for weather of current day
function callWeather(search) {
    var key = 'd49b1f6a58f01678d1f0b70e468590c6';
    var weatherURL = "http://api.openweathermap.org/data/2.5/weather?units=imperial&q=" + search + "&appid=" + key;

    fetch(weatherURL)
    .then(function(response) {
        if (response.ok) {
            response.json().then(function(data) {
                console.log(data)
            })
        }
    })
}

var displayWeather = function (search,) {

}

var displayForecast = function () {
    
}



// create event listener that saves input and appends to "search history"

// fetch lat and long based on name of location to attain weather data

// append data to dashboard and five day weather forecast cards


searchBtn.addEventListener('click', function(event) {
    event.preventDefault();
    var search = locationInput.value.trim()

    if (search === '') {
        return
    } 
    searchList.push(search);
    storeHistory();
    renderHistory();
});
