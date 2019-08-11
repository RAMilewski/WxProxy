# Proxy for SimpleSky

WxProxy is a Node application that acts as a proxy for the Simplesky
wrapper to the Dark Sky Weather API.  This is done to secure the API keys so they are not disclosed in the javascript for pages that use the API. 

This program expects these environment variables: 

    GOOGLE_KEY      API Key for Google Geolocation API
    DARK_SKY_KEY    API key for Dark SKY
    LANGUAGE        Language for Dark Sky API calls
    PORT            Port for Express

WxProxy was designed to be used as a nodeapp in an nginx server that also serves the static html, css, javascript and image files that make up the weather forcast pages for a Corsica digital sign server.

See CorsicaWX for the weather forcast page code, and Corsica-CLI for the Corsica Server itself.