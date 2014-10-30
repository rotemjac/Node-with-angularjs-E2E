

mainModule.service('pageDataService' , function($http,$q,portService) {
	
		var portPostfix = portService.port; 
        return {

            getPageData: function (headerOrData,pageName) {
                var deferObj = $q.defer();
                $http({
                    url: portPostfix+'/'+headerOrData+'/'+pageName,
                    method: "GET",
                    contentType: 'application/json; charset=utf-8'
                })
                .success(function (responseData) {
                    deferObj.resolve(responseData);
                })
                .error(function (err) {
                    console.log("Error inside pageDataService.getPageData: " +err);
                });

                return deferObj.promise;
            },
            getAnimalData: function (animalType) {
                var deferObj = $q.defer();
                $http({
                    url: portPostfix+'/animalData/'+animalType,
                    method: "GET",
                    contentType: 'application/json; charset=utf-8'
                })
                    .success(function (responseData) {
                        deferObj.resolve(responseData);
                    })
                    .error(function (err) {
                        console.log("Error inside dataService.getAnimalData: " +err);
                    });

                return deferObj.promise;
            }
        }
	
});
