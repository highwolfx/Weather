// Declare global variables
var cityArray = [];
var city;


// Checks if there are saved cities and renders in history
if (localStorage.getItem("Saved Cities") !==null){
    cityArray = JSON.parse(localStorage.getItem("Saved Cities"));
};
renderHistory();


// Button listeners for search and clear history
$("#search-button").click(weatherCheck);
$("#clear-history").click(clearStorage);
$("#city-input").keyup(function (e) {
    var key = e.which;
    if(key == 13) {
        weatherCheck();
    };
});


// Shows error modal upon invalid input
function error() {
    if($("#city-input").val()===""){
        $("#errorModal").modal("show");
    }
};


// Renders the city history tab and makes it clickable
function renderHistory(){
    $(".list-group").empty();
    for(var i = 0; i<cityArray.length;i++){
        $("<a>").html(cityArray[i]).addClass("list-group-item list-group-item-action").attr({"data-toggle":"list","data-city":cityArray[i],"role":"tab"}).appendTo(".list-group");
    }
    $(".list-group-item").click(cityHistory);
}


// Searches weather in with the city name from city history tab
function cityHistory(){
    city = $(this).data("city");
    clearResults();
    weatherSearch();
}


// Checks city input, then searches for the city
function weatherCheck(){
    error();
    clearResults();
    city = $("#city-input").val();
    weatherSearch();
}


// Queries city and retrieves data from OpenWeather API, then displays the weather info
function weatherSearch(){
    
    //Ajax query for OpenWeather API 
    let queryURL =  "https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=imperial&appid=9959721991e903910394c4c620fcea64"
    $.ajax({
        url: queryURL,
        method: "GET",
        error: function (ajaxResponse){
            if (ajaxResponse.status===404) {
                $("#errorModal").modal("show");
            };
        }
    }).then(function(response) {
        // console.log(response);
        
        // Current Weather Data rendering
        $("#display-city").html(response.name);
        $("#display-time").html("["+dayjs(response.dt*1000).format("MMM DD, YYYY")+"]");
        $("#current-weather-icon").attr("src", "http://openweathermap.org/img/wn/"+response.weather[0].icon+"@2x.png");

        $("<h5>").html("Temperature: "+response.main.temp+"&#176;F").appendTo("#current-conditions");
        $("<h5>").html("Humidity: "+response.main.humidity+"%").appendTo("#current-conditions");
        $("<h5>").html("Wind Speed: " + response.wind.speed+" mph").appendTo("#current-conditions");


        // API Call to a different OpenWeather API for UV Index and 5-day forecast info
        secondURL = "https://api.openweathermap.org/data/2.5/onecall?lat="+response.coord.lat+"&lon="+response.coord.lon+"&units=imperial&appid=9959721991e903910394c4c620fcea64"
        $.ajax({
            url: secondURL,
            method: "GET"
        }).then(function(response2) {
            
            // Checks UV Index, then renders it along with a color to show conditions
            let uvi = response2.current.uvi;
            
            $("<h5>").html("UV Index: ").attr("id", "uvi").appendTo("#current-conditions");
            $("<span>").html(uvi).attr("id","current-uv").addClass("uvi").appendTo("#uvi");
            $("#current-uv").css("background-color","")
            if (uvi<2.5) {
                $(".uvi").css("background-color","green");
            }else if ((2.5<=uvi)&&(uvi<5.5)) {
                $(".uvi").css("background-color","yellow");
            }else if ((5.5<=uvi)&&(uvi<7.5)) {
                $(".uvi").css("background-color","orange");
            }else if ((7.5<=uvi)&&(uvi<10)) {
                $(".uvi").css("background-color","red");
            }else if (10<=uvi) {
                $(".uvi").css("background-color","purple");
            };


            // 5-Day Forecast render
            for(var i=1; i<6; i++){
                $("<h5>").html(dayjs(response2.daily[i].dt*1000).format("DD/MM/YY")).appendTo(`#forecast-${i}`)
                $("<img>").attr("src","http://openweathermap.org/img/wn/"+response2.daily[i].weather[0].icon+".png").css({"object-fit":"contain", "padding-bottom":"1rem"}).appendTo(`#forecast-${i}`);
                $("<p>").html("Temp: "+response2.daily[i].temp.day+" &#176;F").appendTo(`#forecast-${i}`);
                $("<p>").html("Humidity: "+response2.daily[i].humidity+"%").appendTo(`#forecast-${i}`);
            };
        });


        // Checks if city has been searched, then adds to array for city history rendering
        if (cityArray.includes(response.name)){
        } else {
            cityArray.push(response.name);
            localStorage.setItem("Saved Cities", JSON.stringify(cityArray));
        }
        renderHistory();
    });
};


// Empties current data to be replaced with new data
function clearResults(){
    $("#current-conditions").empty();
    $(".forecast-card").empty();
}


// Clears City History function from list and localStorage
function clearStorage(){
    clearResults();
    localStorage.removeItem("Saved Cities");
    $(".list-group").empty();
    cityArray = [];
}
