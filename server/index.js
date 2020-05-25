var express = require('express');
var app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

var SpotifyWebApi = require('spotify-web-api-node')

var client_id = '9d583449efba428abdccef4978f3f87a'
var client_secret = '70629c95044a4d79901a0ff48a87d9e5'

var spotifyApi = new SpotifyWebApi({
    clientId: client_id,
    clientSecret: client_secret
});

spotifyApi.clientCredentialsGrant()
    .then(function(data) {
        spotifyApi.setAccessToken(data.body['access_token']);
    })
    .catch(function(err) {
        console.log('Something went wrong when retrieving an access token', err.message);
    })

app.get('/recommend', function(request, response) {
    console.log(request.body)
    var mood = "happy"
    spotifyApi.searchPlaylists(mood, { limit: 5 })
        .then(function(data) {
            response.send(data.body)
        })
        .catch (function(err) {
            console.error(err)
        })
})

var listener = app.listen(5000, function () {
    console.log('Your app is listening on port ' + 5000)
})