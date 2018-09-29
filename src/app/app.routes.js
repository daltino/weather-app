(function() {
  'use strict';

  angular.module('app').config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
      url: '/',
      component: 'home',
    })
    .state('weather', {
      url:'weather',
      component:'weather'
    });

    $urlRouterProvider.otherwise('/');
  }

})();
