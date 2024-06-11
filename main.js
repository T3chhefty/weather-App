
// this will store wether Icons;
const wetherImages = {
    sunny: "https://cdn-icons-png.flaticon.com/128/1163/1163661.png",
    rainy: "rainy",
    cloudy: "cloudy"
}
// this will store wether Icons ends here;

// varriables from the form:
const degCent = "°C"
const form = document.querySelector("form");
const userInputedArea = document.querySelector(".input");
const address = document.querySelector(".address");
const town = document.querySelector(".town");
const dateAndTime = document.querySelector(".date");
const temprature = document.querySelector(".temperature");
const humidity = document.querySelector(".humidity");
const weatherDescription = document.querySelector(".weather-description")
// const wetherIcon = document.querySelector("img").src = wetherImages.sunny;
// adding a submit event to the form element

form.addEventListener("submit", (e) => {
    e.preventDefault();
    // converting UserIputedArea to LowerCase
    console.log("form submited");
    console.log("fetching from Server...");
    const userInput = userInputedArea.value.toLowerCase();
    // here the API CALLS GOES

    // making an API CALL FOR THE WEATHER APP
const APIKEY = "PA7KR7UHTFWP6ADM92Q4TGQ4C";
let area = userInput;
const URL= `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${area}?unitGroup=metric&key=${APIKEY}&contentType=json`;

// fetch from server
fetch(URL)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        console.log(data.address);
        console.log(data.resolvedAddress);
        console.log(data.currentConditions.temp);
        console.log(data.currentConditions.icon);
        console.log(data.currentConditions.humidity);
        // Varriable passed values

        town.innerHTML = data.address.toUpperCase();
        address.innerHTML = data.resolvedAddress;
        humidity.innerHTML = data.currentConditions.humidity;
        temprature.innerHTML = `${data.currentConditions.temp}${degCent}`;
        weatherDescription.innerHTML = data.currentConditions.icon;
      
})
    
    
    
}); 

/*
Keys to use


°C

cloudcover: 50
conditions: "Partially cloudy"
datetime: "16:00:00"
datetimeEpoch: 1710082800
dew: 27
feelslike: 46.6
humidity: 63.3
icon: "partly-cloudy-day"
moonphase: 0
precip: null
precipprob: 0
preciptype: null
pressure: 1007
snow: 0
snowdepth: 0
solarenergy: 1.3
solarradiation: 361
source: "obs"
stations: ['DNBE']
sunrise: "06:43:28"
sunriseEpoch: 1710049408
sunset: "18:47:00"
sunsetEpoch: 1710092820
temp: 35
uvindex: 4
visibility: 10
winddir: 290
windgust: null
windspeed: 


*/
