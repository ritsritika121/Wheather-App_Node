
const request = require('request')

const wheatherForecast = (lat,long,callback) => {
    const url = `https://api.darksky.net/forecast/c59ae118b4146b04c2719445ba1319bb/${lat},${long}`

    request({url, json:true}, (err, res) => {
        if(err){
            callback('unable to connect to server', undefined)
        } else if(res.body.error){
            callback('unable to find location', undefined)
        } else{
           callback(undefined,res.body.currently.temperature) 
        }
    })
}

module.exports = wheatherForecast