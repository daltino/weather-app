(function() {
  'use strict';

  angular.module('app').component('search', {
    controller: SearchController,
    controllerAs: 'vmws',
    templateUrl: 'app/search/search.view.html',
  });

  /** @ngInject */
  function SearchController($log, $rootScope, $translate, $stateParams) {
    const vmws = this;
    vmws.stateParams = {};
    vmws.stateParams.keyword = $stateParams.keyword;

    // Initialize logger object for custom logs
    const logger = $log.getInstance('app.search.SearchController');
    logger.info("Keyword: ",vmws.stateParams.keyword);
    
    // Call activate function on complete
    // initialization of search component
    vmws.$onInit = function() {
      activate();
    }

    function activate() {
      
    }

    function switchLanguage(language) {
      $translate.use(language);
    }

  }

})();
