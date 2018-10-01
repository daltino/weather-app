(function() {
  'use strict';

  angular.module('app').component('weather_details', {
    controller: WeatherDetailsController,
    controllerAs: 'vmwd',
    templateUrl: 'app/weather_details/weather_details.view.html',
  });

  /** @ngInject */
  function WeatherDetailsController($log, $rootScope, $translate, $stateParams) {
    const vmwd = this;
    vmwd.stateParams = {};
    vmwd.stateParams.woeid = $stateParams.woeid;

    // Initialize logger object for custom logs
    const logger = $log.getInstance('app.weather_details.WeatherDetailsController');

    logger.info("Keyword: ", vmwd.stateParams.woeid);
    
    // Initialize weather_details component variables
    

    vmwd.switchLanguage = switchLanguage;

    // Call activate function on complete
    // initialization of weather component
    vmwd.$onInit = function() {
      activate();
    }

    function activate() {
      
    }

    function switchLanguage(language) {
      $translate.use(language);
    }

  }

})();
