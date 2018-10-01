(function() {
  'use strict';

  angular.module('app').config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
      url: '/',
      component: 'home',
    })
    .state('weather_details', {
      url:'/weather/:woeid',
      component:'weather_details'
    })
    .state('search', {
      url:'/search/:keyword',
      component:'search'
    });

    $urlRouterProvider.otherwise('/');
  }

})();
