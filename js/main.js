
var submit=document.querySelector("#submit");


var search = document.querySelector("#search");


async function getData(get) {
    var data = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=c522f1889f1c4903bfe173440240812&q=${get}&days=3`)
    var finalData= await data.json()
    console.log(finalData);
    //مصفوفة بأسماء الأيام
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
     // مصفوفة بأسماء الشهور
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    // استخراج التواريخ
    var todayDate = new Date(finalData.forecast.forecastday[0].date); // اليوم الأول
    var day2Date = new Date(finalData.forecast.forecastday[1].date); // اليوم الثاني
    var day3Date = new Date(finalData.forecast.forecastday[2].date); // اليوم الثالث

    // تحويل التاريخ إلى اسم اليوم
    var todayName = days[todayDate.getDay()];
    var day2Name = days[day2Date.getDay()];
    var day3Name = days[day3Date.getDay()];

    // تحويل التاريخ إلى اسم الشهر مع تاريخ اليوم
    var todayFormatted = `${todayDate.getDate()}${months[todayDate.getMonth()]}`;

    // حالة الطقس اليوم
    document.querySelector("#day1").innerHTML = todayName
    document.querySelector(".date").innerHTML = todayFormatted
    document.querySelector(".location").innerHTML = finalData.location.name;
    document.querySelector(".num").innerHTML = finalData.current.temp_c + `<span><sup>o</sup>C</span>`
    document.querySelector("#icon1").innerHTML = `<img src="https:${finalData.current.condition.icon}" alt="Weather Icon">`
    document.querySelector(".custom").innerHTML = finalData.current.condition.text
    document.querySelector(".icon-umberella").innerHTML = `<img src="./image/icon-umberella.png" alt="">` + finalData.current.wind_mph + `%`
    document.querySelector(".icon-wind").innerHTML = `<img src="./image/icon-wind.png" alt="">` + finalData.current.wind_kph + ` km/h`
    document.querySelector(".icon-compass").innerHTML = `<img src="./image/icon-compass.png" alt="">` + finalData.current.wind_dir


    //حالة طقس اليوم الثاني
    document.querySelector("#day2").innerHTML = day2Name
    document.querySelector("#icon2").innerHTML = `<img src="https:${finalData.forecast.forecastday[1].day.condition.icon}" alt="Weather Icon">`;
    document.querySelector("#degree1").innerHTML = finalData.forecast.forecastday[1].day.maxtemp_c + `<span><sup>o</sup>C</span>`
    document.querySelector(".small1").innerHTML = finalData.forecast.forecastday[1].day.mintemp_c + `<span><sup>o</sup></span>`
    document.querySelector("#custom1").innerHTML = finalData.forecast.forecastday[1].day.condition.text


    //حالة طقس اليوم الثالث
    document.querySelector("#day3").innerHTML = day3Name
    document.querySelector("#icon3").innerHTML =  `<img src="https:${finalData.forecast.forecastday[2].day.condition.icon}" alt="Weather Icon">`;
    document.querySelector("#degree2").innerHTML = finalData.forecast.forecastday[2].day.maxtemp_c + `<span><sup>o</sup>C</span>`
    document.querySelector(".small2").innerHTML = finalData.forecast.forecastday[2].day.mintemp_c +`<span><sup>o</sup></span>`
    document.querySelector("#custom2").innerHTML = finalData.forecast.forecastday[2].day.condition.text
}

//لأخذ القيمة من input
search.addEventListener("input" , function(e){
    var value = e.target.value.toLowerCase();
    getData(value) 
})










getData("cairo")























