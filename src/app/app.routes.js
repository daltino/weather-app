(function() {
  'use strict';

  angular.module('app').config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
      url: '/',
      component: 'home',
    })
    .state('search', {
      url:'/search/:keyword',
      component:'search'
    });

    $urlRouterProvider.otherwise('/');
  }

})();
