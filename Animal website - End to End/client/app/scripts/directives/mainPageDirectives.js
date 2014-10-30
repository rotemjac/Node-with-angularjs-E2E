
mainModule.directive('myNavBar', function() {
	  return {
	      restrict: 'E',
	      templateUrl: "scripts/templates/DirectivesTemplates/navBar.html"
	  };
});

mainModule.directive('myFooter', function() {
	  return {
	      restrict: 'E',
	      templateUrl: "scripts/templates/DirectivesTemplates/footer.html"
	  };
});


mainModule.directive('pageHeader', ['pageDataService' ,function(pageDataService) {
	  return {
	      restrict: 'E',
	      templateUrl: "scripts/templates/DirectivesTemplates/pageHeader.html",
	      link: function ($scope,element, attrs){

				$scope.data = { title:"someTitle",	text:"someText" };

				//Method definition + self execution
		      	$scope.showRelevantData = function (page) {
                    //Get all data from service
                    var promise =  pageDataService.getPageData("pageHeader",page);
                    promise.then(
                        //Success callback
                        function(data) {
                            $scope.data = data;
                        },
                        //Error callback
                        function(reason) {
                            console.log('Failed: ' + reason);
                        });
	      		}(attrs.data);
	      }
	  };
}]);

mainModule.directive('info1', function($compile,$timeout) {
    return {
        restrict: 'E',
        link: function (scope,element,attrs) {
            $timeout(function() {
                angular.forEach(scope.allInfo, function(info) {
                    element.append('<li class="regListItem" >');
                    element.append('<div>');
                    element.append('<h3 class="infoHeader">' + info.header + '</h3>');
                    angular.forEach(info.dataRows, function(dataRow) {
                        element.append('<li class="regListItem" >'+ dataRow +'<br/> </li>');
                    });
                    element.append('</div>');
                    element.append('</li>');
                });
                $compile(element.contents())(scope)
            },1000);
        }
    };
});

mainModule.directive('info2', function() {
    return {
        restrict: 'E',
        templateUrl: "scripts/templates/DirectivesTemplates/info.html"
    };
});


mainModule.directive('infoCollapse', function() {
	  return {
	      restrict: 'E',
	      templateUrl: "scripts/templates/DirectivesTemplates/infoCollapse.html",
		  scope: false

/*  -- I don't think we need to create a new isolated scope. we can take the father scope here   
	      scope: {
	      	info:"=mydata"
	      }
*/

	  };
});


mainModule.directive('pricesTable', function() {
	  return {
	      restrict: 'E',
	      templateUrl: "scripts/templates/DirectivesTemplates/prices.html"
	  };
});

mainModule.directive('tumbnail', function() {
	  return {
	      restrict: 'E',
	      templateUrl: "scripts/templates/DirectivesTemplates/tumbnail.html"
	  };
});


mainModule.directive('observedInput', function() {
		  return {
		      restrict: 'E',
		      template: '<input type="text" ng-model="typeModel"/>',
		      replace:true,
		      link: function (scope,element,attrs) {		      	
					scope.$watch(attrs.ngModel,function(newValue,oldValue) {
						if (newValue!=oldValue) {
							//Update scope variables by invoking controller's method
							scope.getAnimalPhoto(newValue);
							scope.getAnimalData(newValue);
						}
					});	
			  }  		
		   };
});

mainModule.directive('camp', ['$modal', function($modal) {
	  return {
	      restrict: 'E',
	      templateUrl: "scripts/templates/DirectivesTemplates/camp.html",
	      link: function(scope) {

	    	//We HAVE to define this first
			scope['campInputData'] = {};

			scope['campInputData']['FeeRadioModel']    = 		scope['camp']['fees'][0];
		  	scope['campInputData']['FeeRadioSubModel'] = 		scope['camp']['fees'][0]['costs'][0];
			scope['campInputData']['ServRadioModel']   = 		scope['camp']['additionalServices'][0];

			scope.registerNow = function () {

				//This call will update the 'scope['campInputData']['FeeRadioSubModel']' model
				scope.$broadcast('getFeeRadioSubModelEvent' );

				//Print for debug purposes
				console.log("$scope['campInputData']['FeeRadioModel']   : " +JSON.stringify(scope['campInputData']['FeeRadioModel'] ) );
				console.log("$scope['campInputData']['FeeRadioSubModel']: " +JSON.stringify(scope['campInputData']['FeeRadioSubModel'] ) );
				console.log("$scope['campInputData']['ServRadioModel']	: " +JSON.stringify(scope['campInputData']['ServRadioModel'] ) );

				scope.openModalDialog();
			}
			scope.openModalDialog = function () {
			
			    var modalInstance = $modal.open({
			      templateUrl: 'scripts/templates/ModalTemplates/myRegisterModal.html',
			      controller: 'modalInstanceCtrl',
			      resolve: {
			      	dataFromCallingScope: function () {	
			      		data = {			      			
				      		campName:scope['camp']['campHeader'],
							feeData :scope['campInputData']['FeeRadioSubModel'],
							dropOrPickup:scope['campInputData']['ServRadioModel']			      		
			      		}
						return data;
			      	}
			      }
			    });
			}

		  }
	  };
}]);
	
mainModule.directive('costs', function() {
	  return {
	      restrict: 'E',
	      templateUrl: "scripts/templates/DirectivesTemplates/costs.html",
	      link: function(scope,element,attrs) {
	      		    	
	    	//We HAVE to define this first
			scope['feeInputData'] = {};
			       							
			scope['feeInputData']['FeeRadioSubModel'] = scope['fee']['costs'][0];
	      },
	      controller: function ($scope, $element, $attrs) {
			$scope.$on('getFeeRadioSubModelEvent', function (event) {	      			
				if ($scope['fee']['category'] == $scope['campInputData']['FeeRadioModel']['category']) {
					$scope['campInputData']['FeeRadioSubModel'] = $scope['feeInputData']['FeeRadioSubModel'];
				}
			});
	  	  }
	  };
});


