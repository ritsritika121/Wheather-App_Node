
const geoLocation = require('./utils/geocode')
const forecast = require('./utils/forecast')

geoLocation('new delhi', (error, {latitude,longitude,location}) => {
    if(error){
        return console.log("ERROR", error)
    }
    forecast(latitude, longitude, (error, ForecastData) => {
        if(error){
            return  console.log("Forecast Error", error)
        }
        console.log("DATA",location)
        console.log("ForecastData", ForecastData)
    })
} )



