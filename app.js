window.addEventListener("load", () => {
    let long;
    let lat;

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const proxy ="https:/cors-anywhere.herokuapp.com";
            const api = `http://api.weatherapi.com/v1/current.json?key=58a408c65940441daab164353221605&q=London&aqi=no`;

            fetch(api)
                .then(response =>  {
                    return response.json();
                })
                .then(data => {
                    console.log(data);
                    const { condition, feelslike_c } = data.current;
                });
         });
    }
});







