(function() {
  'use strict';

  angular.module('app').component('weather', {
    bindings: {
      weather: '<'
    },
    controller: WeatherController,
    controllerAs: 'vmw',
    templateUrl: 'app/weather/weather.view.html',
  });

  /** @ngInject */
  function WeatherController($log, $rootScope, $translate, weatherAPI) {
    const vmw = this;
    // Initialize logger object for custom logs
    const logger = $log.getInstance('app.weather.WeatherController');
    
    // Initialize weather component variables
    const weather_data = undefined;
    vmw.weather_loaded = false;

    vmw.getWeatherDataByWOEID = getWeatherDataByWOEID;
    vmw.switchLanguage = switchLanguage;

    // Call activate function on complete
    // initialization of weather component
    vmw.$onInit = function() {
      activate();
    }

    // Calls the weatherAPI using the woeid supplied
    // Sets the weather_loaded flag to true and
    // pulls todays weather data from the consolidated_data
    function getWeatherDataByWOEID(){
      weather_data = weatherAPI.getWeatherByLocation(vmw.weather.woeid);
      
      weather_data
      .then(function(data){
        // Uncomment this to view the weather metadata
        logger.debug("Weather data for ", data.data.title, ": ", data.data);

        vmw.weather_loaded = true;
        vmw.city_name = data.data.title;
        vmw.today_weather_data = data.data.consolidated_weather[0];
        vmw.today_weather_data.weather_state_abbr = "state-"+vmw.today_weather_data.weather_state_abbr;
      })
      .catch(function(error){
        vmw.weather_loaded = false;
        logger.error("Could not get weather data for ", vmw.weather.city_name, ". Error: ", error);
      });
    }

    function activate() {
      getWeatherDataByWOEID(vmw.weather.woeid);
    }

    function switchLanguage(language) {
      $translate.use(language);
    }

  }

})();
