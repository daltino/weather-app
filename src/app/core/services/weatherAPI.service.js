// Weather API Service
(function(){
	'use strict'

	angular
		.module('app.core')
		.factory('weatherAPI', weatherAPI);

	weatherAPI.$inject = ['$rootScope','$q','$http','$log'];

	/* @ngInject */
	function weatherAPI($rootScope, $q, $http, $log){
		var logger = $log.getInstance('app.core.services.weatherAPI');
		var base_api_url = "http://localhost/weather-app/weather.php";

		// Services supported by the Weather API
		var service = {
			getWeatherByLocation: getWeatherByLocation,
			getWeatherBySearch: getWeatherBySearch
		}

		return service;
		
		///////////////

		// Returns Consolidated Weather data for a location using its
		// woeid, this would query the weather API and return a JSON object
		// holding 6 days weather forecast of the submitted location 
		function getWeatherByLocation(woeid) {
			var deferred = $q.defer();
			var url = base_api_url + "?command=location&woeid="+woeid;

			if (woeid) {
				$http.get(url)
					.then(function(response) 
					{
						logger.info("Weather data for location ", woeid, ": ", response);
						deferred.resolve(response);
					})
					.catch(function(error)
					{
						logger.error("Request for weather data by woeid:", woeid, " failed with error: ", error);
					});
			} else {
				logger.warn("No location set!")
				return deferred.reject();
			}

			return deferred.promise;
		}

		// Returns Weather data based on a search query
		function getWeatherBySearch() {

		}
	}
})();