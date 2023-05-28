// API key: d49b1f6a58f01678d1f0b70e468590c6

var searchBtn = document.querySelector('#searchBtn');
var locationInput = document.querySelector('#location');
var tempEl = document.querySelector('#main-city-temp');
var humidityEl = document.querySelector('#main-city-humid');
var windEl = document.querySelector('#main-city-wind');
var locationName = document.querySelector('#main-city-name');
var forecastCardEl = document.querySelector('#five-day');
var historyEl = document.querySelector('#search-history');





// fetch data from API url


//
function apiCall(search) {

    var key = 'd49b1f6a58f01678d1f0b70e468590c6';
    var queryURL =
      "http://api.openweathermap.org/data/2.5/forecast?units=imperial&q=" + search + "&appid=" + key;

      fetch(queryURL)
        .then(function(response) {
            if (response.ok) {
                response.json().then(function (data) {
                    displayForecast(data, search)
                })
            } else {
                alert('Invalid Input')
            }
        })
  };

 



// create event listener that saves input and appends to "search history"

// fetch lat and long based on name of location to attain weather data

// append data to dashboard and five day weather forecast cards


searchBtn.addEventListener('click', function(event) {
    event.preventDefault();
    var search = locationInput.value.trim();

    if (search) {
        apiCall(search)
    }

});
