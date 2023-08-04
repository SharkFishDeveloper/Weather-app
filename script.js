
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&appid=66bf510dde97a1f83ed8a9525c01655f&units=metric&q=";

const enterButton = document.querySelector(".enter");
const entertextInput = document.querySelector(".entertext");
const weatherIcon = document.querySelector(".checkweather");

document.querySelector(".hide").style.display = "none";
document.querySelector(".error").style.display = "none";


async function fetchweather(city){
    document.querySelector(".error").style.display = "none";
    const response = await fetch(apiUrl+city);
    var data = await response.json();
    if(response.status ==404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".hide").style.display = "none";
    }
    else{
    let message = "";
    document.querySelector(".hide").style.display = "block";
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+"°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity+"%";
    document.querySelector(".wind").innerHTML = data.wind.speed+"km/h";

    if(data.weather[0].main=="Clouds"){
        weatherIcon.src = 'images/cloudy.png';
        message = "Cloudy";
    }
    else if(data.weather[0].main=="Clear"){
        weatherIcon.src = "images/sunny.png";
        message = "Clear";
    }
    else if(data.weather[0].main=="Rain"){
        weatherIcon.src = "images/rain.png";
        message = "Rain";
    }
    else if(data.weather[0].main=="Drizzle"){
        weatherIcon.src = "images/drizzle.png";
        message = "Drizzle";
    }
    else if(data.weather[0].main=="Snow"){
        weatherIcon.src = "images/snow.png";
        message = "Snow";
    }
    else if(data.weather[0].main=="Mist"){
        weatherIcon.src = "images/mist.png";
        message = "Misty";
    }
    document.querySelector(".message").innerHTML = message;
    }
    
    entertextInput.value ="";
   
    
}

enterButton.addEventListener("click",()=>{
    fetchweather(entertextInput.value);
})