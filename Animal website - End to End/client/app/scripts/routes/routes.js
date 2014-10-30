mainModule.config(function($routeProvider) {
	
	$routeProvider.when('/',
		{
			templateUrl:'scripts/templates/RouteTemplates/mainView.html'
			//controller:'menuCtrl'
		}		
	);
	
	$routeProvider.when('/ticketsAndHours',
		{
			templateUrl:'scripts/templates/RouteTemplates/tickets_and_hours_View.html'
			//controller:'menuCtrl'
		}		
	);
	
	$routeProvider.when('/zooMap',
		{
			templateUrl:'scripts/templates/RouteTemplates/zoo_map.html'
		}
		
	);	
	$routeProvider.when('/directionsAndParking',
		{
			templateUrl:'scripts/templates/RouteTemplates/directions_and_parking_View.html'
		}	
	);	
	$routeProvider.when('/faq',
		{
			templateUrl:'scripts/templates/RouteTemplates/faq.html'
		}	
	);
	$routeProvider.when('/animals_search',
		{
			templateUrl:'scripts/templates/RouteTemplates/animals_search.html'
		}	
	);
	$routeProvider.when('/zooCamp',
		{
			templateUrl:'scripts/templates/RouteTemplates/zooCamp.html'
		}	
	);			
	
			
});