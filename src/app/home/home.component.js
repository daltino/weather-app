(function() {
  'use strict';

  angular.module('app').component('home', {
    controller: HomeController,
    controllerAs: 'vm',
    templateUrl: 'app/home/home.view.html',
  });

  /** @ngInject */
  function HomeController($log, $rootScope, $translate) {
    const vm = this;
    const logger = $log.getInstance('app.home.HomeController');

    // Scope variables go here:
    vm.defaultCities = [
      {
        city_name:'Istanbul',
        woeid:2344116,  
      },
      {
        city_name:'Berlin',
        woeid:638242,  
      },
      {
        city_name:'London',
        woeid:44418,  
      },
      {
        city_name:'Helsinki',
        woeid:565346,  
      },
      {
        city_name:'Dublin',
        woeid:560743,  
      },
      {
        city_name:'Vancouver',
        woeid:9807,  
      },
    ];

    vm.switchLanguage = switchLanguage;

    activate();

    function activate() {
      logger.debug('Home page loaded, getting weather data for default cities: ', vm.defaultCities);
    }

    function switchLanguage(language) {
      $translate.use(language);
    }

  }

})();
