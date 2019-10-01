# Proxy for SimpleSky

WxProxy is a Node application that acts as a proxy for the Simplesky
wrapper to the Dark Sky Weather API.  This is done to secure the API keys so they are not disclosed in the javascript for pages that use the API. 

This program looks for a .env file, and expects these environment variables: 

    GOOGLE_KEY      API Key for Google Geolocation API
    DARK_SKY_KEY    API key for Dark SKY
    LANGUAGE        Language for Dark Sky API calls
    PORT            Port for Express

WxProxy was designed to be used as a nodeapp in an nginx server that also serves the static html, css, javascript and image files that make up the weather forecast pages for a Corsica digital sign server.

See the GitHub repositories for [CorsicaWX](https://github.com/RAMilewski/CorsicaWx) for the weather forcast page code, and [Corsica-CLI](https://github.com/mozilla/corsica-cli) to install the Corsica Server itself.