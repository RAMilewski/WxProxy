#!/usr/bin/env nodejs

'use strict';

/* This program expects these environment variables: 
    GOOGLE_KEY      API Key for Google Geolocation API
    DARK_SKY_KEY    API key for Dark SKY
    LANGUAGE        Language for Dark Sky API calls
    PORT            Port for the Express HTTP server
*/

require('dotenv-defaults').config();
const simplesky = require('simplesky');
const express = require('express');
const app = express();
const PORT = (process.env.PORT || 5000);
const wxAPI = new simplesky(process.env.GOOGLE_KEY, process.env.DARK_SKY_KEY, process.env.LANGUAGE, 'auto');

app.get('/:lat/:lng/:exclude', (req, res) => {
    console.log(req.params);
    let lat = req.params.lat;
    let lng = req.params.lng;
    let location =  null;                 // Google API still a mystery
    let exclude = [req.params.exclude];   // Optional
    
    wxAPI.getWeather(location, lat, lng, exclude).then((wx) => {
        res.json(wx);
    }).catch((err) => {
        console.log(err); 
    });
});

// listen for requests :)
app.listen(PORT, () => console.log(`Wx API is listening on port ${PORT}`));
