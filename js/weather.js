const API_KEY = "3eac06b0d1f41a3e979009c22efe985e";

function onGeoOk(position) {
    console.log(position);
    
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&cnt=1&appid=${API_KEY}`;
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const weatherText = document.querySelector("#weather span:first-child");
        const cityText = document.querySelector("#weather span:nth-child(2)");
        const tempText = document.querySelector("#weather span:last-child");
        
        weatherText.innerText = data.weather[0].main;
        cityText.innerText = data.name;
        tempText.innerText = `${parseInt(Math.floor(data.main.temp)-273.15)} ˚C`})
        //Javascript가 브라우저에 요청하여 API url에 방문하지 않아도 url내부의 자체정보를 브라우저로 가져옴(Network 탭에서 확인)
}

function onGeoError() {
    console.log("Cannot fint your location");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
