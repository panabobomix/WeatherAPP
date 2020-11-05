window.addEventListener('load', ()=> {
    let lon;
    let lat;

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position =>{
            lon = position.coords.longitude;
            lat = position.coords.latitude;

            const api = 'https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid={52371bd8010c3c057e6fa1a598e72259}';
            fetch (api)
            .then(Response =>{
                return Response.json();

            })
            .then(data =>{
                console.log(data);
            })
        })
        

    }
});