/* alternative means of getting the model in the backend
call an api which then calls teh model saved in the server side
but if we already have tensorflow.js in the frontend, is there a need?

var tfjs = require('tensorflowjs');
var express = require('express');
var app = express();

app.get('/emotion', function(request, response) {
    //model = await tfjs.
})
*/