myApp.factory('wikiFactory' , ["$http" , function($http){

	function wikiApiData(itemSearch){

		return $http.jsonp("https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch="+itemSearch+"&callback=JSON_CALLBACK");

	}

	return { wikiApiData }

}]);