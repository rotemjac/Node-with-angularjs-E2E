

mainModule.service('navAndFooterService', function($http,$q,portService) {
		var portPostfix = portService.port; 
        return {
            getAllData: function () {
                var deferObj = $q.defer();
                $http({
                    url: portPostfix+'/navAndFooter',
                    method: "GET",
                    contentType: 'application/json; charset=utf-8'
                })
                .success(function (responseData) {
                    deferObj.resolve(responseData);
                })
                .error(function (err) {
                    console.log("Error inside navAndFooterService: " +err);
                });

                return deferObj.promise;
            }        
        }
});
