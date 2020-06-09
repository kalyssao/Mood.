var express = require('express');
const cors = require('cors')
var app = express();

app.use(cors())

var client_id = '9d583449efba428abdccef4978f3f87a'
var client_secret = '70629c95044a4d79901a0ff48a87d9e5'

var SpotifyWebApi = require('spotify-web-api-node')
var spotifyApi = new SpotifyWebApi({
    clientId: client_id,
    clientSecret: client_secret,
    redirectUri: 'https://d2xbojkowr794t.cloudfront.net/'
});

function newToken() {
    spotifyApi.clientCredentialsGrant()
    .then(function(data) {
        spotifyApi.setAccessToken(data.body['access_token']);
    })
    .catch(function(err) {
        console.log('Something went wrong when retrieving an access token', err.message);
    })
}

newToken();
tokenRefreshInterval = setInterval(newToken, 1000 * 60 * 60);

app.get('/recommend', function(request, response) {
    // from when the mood is sent via the payload
    var mood = request.query.mood
    spotifyApi.searchPlaylists(mood, { limit: 9 })
        .then(function(data) {
            response.send(data.body)
        })
        .catch (function(err) {
            console.error(err)
            response.send(err.statusCode)
        })
})

/*var listener = app.listen(5000, function () {
    console.log('Your app is listening on port ' + 5000)
})*/

module.exports = app