var express = require('express');
const cors = require('cors')
var app = express();

require('dotenv').config();

app.use(cors())

var client_id = process.env.SPOTIFY_CLIENT_ID
var client_secret = process.env.SPOTIFY_CLIENT_SECRET

var SpotifyWebApi = require('spotify-web-api-node')
var spotifyApi = new SpotifyWebApi({
    clientId: client_id,
    clientSecret: client_secret,
    redirectUri: process.env.SPOTIFY_REDIRECT_DEV_URI
});

async function initialise() {
    await spotifyApi.clientCredentialsGrant()
    .then(function(data) {
        spotifyApi.setAccessToken(data.body['access_token']);
    })
    .catch(function(err) {
        console.log('Something went wrong when retrieving an access token', err.message);
    })
} 

app.get('/recommend', function(request, response) {
    initialise()
    
    // from when the mood is sent via the payload
    var mood = request.query.mood
    spotifyApi.searchPlaylists(mood, { limit: 9 })
    .then(function(data) {
        response.send(data.body)
    })
    .catch (function(err) {
        console.error(err)
        response.sendStatus(err.statusCode)
    })
})

var listener = app.listen(5000, function() {
    console.log('Your app is listening on port 5000')
})

module.exports = app