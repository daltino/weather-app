(function() {
  'use strict';

  angular.module('app').component('search', {
    controller: SearchController,
    controllerAs: 'vmw',
    templateUrl: 'app/search/search.view.html',
  });

  /** @ngInject */
  function SearchController($log, $rootScope, $translate) {
    const vmw = this;
    // Initialize logger object for custom logs
    var logger = $log.getInstance('app.search.SearchController');
    
    // Call activate function on complete
    // initialization of search component
    vmw.$onInit = function() {
      activate();
    }

    function activate() {
      
    }

    function switchLanguage(language) {
      $translate.use(language);
    }

  }

})();
