
const request = require('request')


//Geocoding
//Address -> lat/lan -> Wheather

const geoLocation = (address, callback) => {
    const geoCodeUrl =`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1Ijoicml0aWthc2luZ2giLCJhIjoiY2sxYTk4aHhnMDY1dDNkcGk1dHg1czd3OSJ9.sELmsNwktG7AhIpi5PaI_g&limit=1`
    request({url:geoCodeUrl, json:true}, (err,response) => {
        if(err){
            callback('unable to connect to server', undefined)
        } else if(response.body.features.length === 0){
            callback('unable to find location', undefined)
        } else{
           callback(undefined, {
             latitude : response.body.features[0].center[1],
             longitude : response.body.features[0].center[0],
             location :  response.body.features[0].place_name
           }) 
        }
    })
}

module.exports = geoLocation