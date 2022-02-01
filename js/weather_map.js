'use strict'
$(function () {
    // API Key Variable
    const key = WEATHER_MAP_KEY
    // API Call that logs the JSON Object for Abilene weather by lat/long
    $.get("https://api.openweathermap.org/data/2.5/onecall", {
        APPID: key,
        lat: 32.448734,
        lon: -99.733147,
        units: "imperial",
        exclude: "current,minutely,hourly,alerts"
    }).done(function (data) {
        console.log(data);
        // Create variable that will get passed to HTML
        let weatherData = "";
        // Shorten array from 8 to 5 days
        let dataSliced = data.daily.slice(0,5);
        console.log(dataSliced);
        // Start forEach loop
        $.each(dataSliced, function (i) {
            // Make date readable
            let day = new Date(data.daily[i].dt * 1000).toLocaleDateString("en", {
                weekday: "long"
            })
            let lowTemp = data.daily[i].temp.min  //Low Temp Variable
            let highTemp = data.daily[i].temp.max  //High Temp Variable
            let description = data.daily[i].weather[0].description  ///Weather Description
            let humidity = data.daily[i].humidity  ///Humidity
            let wind = data.daily[i].wind_speed  ////Wind Speed
            let pressure = data.daily[i].pressure  ////Barometric Pressure
            let weatherIcon = data.daily[i].weather[0].icon  ///Icon Code
            // console.log(weatherIcon);
            // Adds each html tag and classes in string..... there's probably a better way
            weatherData += "<div class='col'>";
            weatherData += "<div class='card'>";
            weatherData += "<div class='card-header bg-primary text-center'>" + day + "</div>";
            weatherData += "<div class='card-body'>";
            weatherData += "<p class='text-center'>" + lowTemp.toFixed(1) + " &#8457" + " / " + highTemp.toFixed(1) + " &#8457" + "</p>";
            weatherData += "<ul class='list-group list-group-flush'>";
            weatherData += "<li class='list-group-item list-unstyled text-center'>"  + "<img src='https://openweathermap.org/img/wn/" + weatherIcon + ".png'/>" +  "</li>";
            weatherData += "<li class='list-group-item list-unstyled'>" + "Description:  " + description + "</li>";
            weatherData += "<li class='list-group-item list-unstyled'>" + "Humidity:  " + humidity + "</li>";
            weatherData += "<li class='list-group-item list-unstyled'>" + "Wind:  " + wind + "</li>";
            weatherData += "<li class='list-group-item list-unstyled'>" + "Pressure:  " + pressure + "</li>";
            weatherData += "</ul>";
            weatherData += "</div>";
            weatherData += "</div>";
            weatherData += "</div>";
        })
        // console.log(weatherData);
        $("#weather").html(weatherData)
    })
    // MAP

    mapboxgl.accessToken = MAPBOX_KEY;
    let map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v9',
        zoom: 10,
        center: [-99.733147, 32.448734]
    });


})
