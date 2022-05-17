

window.addEventListener("load", () => {
    let long;
    let lat;
    let temperatureDescription = document.querySelector(".temperature-description");
    let temperatureDegree = document.querySelector(".temperature-degree");
    let locationTimezone = document.querySelector(".location-timezone");
    //let displayIcon = document.querySelector(".display-icon");

    
    

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;

           
            const api = `http://api.weatherapi.com/v1/current.json?key=58a408c65940441daab164353221605&q=London&aqi=no/${lat},${long}`;
            

            fetch(api)
                .then(response =>  {
                    return response.json();
                })
                .then(data => {
                    console.log(data);
                    const {condition, feelslike_f, icon} = data.current;
                    const {current} = condition;
                    //Set DOM elements from API
                    temperatureDegree.textContent = feelslike_f;
                    temperatureDescription.textContent = condition.text;
                    locationTimezone.textContent = data.location.name;
                    showIcon(condition.icon, document.querySelector(".display-icon"));
             });
         });
    }

    function showIcon(icon, iconID){
        const weather = new weather({color: "white"});
        const currentIcon = current.condition.icon;
        weather.play();
        return weather.set(iconID, weather[currentIcon]);
    }
});







