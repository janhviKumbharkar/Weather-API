const express=require("express");
const https = require("https");
const app=express();

app.get("/",function(req,res){
    const url = "https://api.openweathermap.org/data/2.5/weather?q=nagpur&appid=c07210f950560706ba3f4ae5b3746e20";

https.get(url,function(response){
    console.log(response.statusCode);

    response.on("data",function(data){
     const weatherdata=JSON.parse(data) 
     const temp=weatherdata.main.temp
     const weatherDescription=weatherdata.weather[0].description
     console.log(weatherDescription);
       })
})
 res.send("server is running");
})

app.listen(3000,function(){
    console.log("server is running on port 3000.");
})
