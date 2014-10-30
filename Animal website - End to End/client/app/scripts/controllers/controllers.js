
/* ------------------------------------ The main van bar and footer controller ------------------------------------------*/

mainModule.controller('navAndFooterCtrl', ['$scope','navAndFooterService',function($scope,navAndFooterService) {		
	$scope.allColumnsData = [];
	
	$scope.initializeData = function () {
		
		//Get all data from service
		var promise = navAndFooterService.getAllData();

		promise.then(
			//Success callback
			function(data) {
				$scope.allColumnsData = data;

				//Initialize flags
				var size = $scope.allColumnsData.length;
				for (var i=0;i<size; i++ ) {
					$scope["dropDownFlag_" + i] = true; 
					if ($scope.allColumnsData[i].subHeaders.length == 0) {
						$scope["dropDownFlag_" + i] = false; 
					}
				}	
			},
			//Error callback 
			function(reason) {
			  console.log('Failed: ' + reason);
		}); 
	}();

}]);

/* ------------------------------------ Main page controllers ------------------------------------------*/

mainModule.controller('mainCaruselCtrl', ['$scope','photoService',function($scope,photoService) {		

	$scope.myInterval = 5000;
	$scope.slides = photoService.getMainCarusalPhotos();

}]);

mainModule.controller('tumbnaillCtrl', ['$scope','photoService','pageDataService',function($scope,photoService,pageDataService) {

	$scope.allInfo = [];
	
	$scope.initializeData = function () {
		
		var tumbnailPhotos = photoService.getTumbnailPhotos();

         //Get all data from service
        var promise   = pageDataService.getPageData("pageData","Thumbnail");

         promise.then(
         //Success callback
         function(returnedData) {
             var tumbnailData = returnedData.data;  //returnedData is an object with one field of 'data' which is an array
             for (var i=0;i<tumbnailPhotos.length; i++ ) {
                 $scope.allInfo[i] = {
                     photo  : tumbnailPhotos[i],
                     header : tumbnailData[i]['header'],
                     data   : tumbnailData[i]['dataRows'],
                     btnText: 'Continue reading'
                 }
             }
             /* ------------------- */
             var size = $scope.allInfo.length;
             for(var i=0; i<size ; i++) {
                 $scope["hideAllTumb_" + i]   = false;
                 $scope["alignToLeft_" + i]   = false;
                 $scope["isCollapsed_" + i]   = true;
             }
             /* -------------------- */

             //    ------------------------------------------ //
             //(20.9.14):Check if this isn't a mistake that this isn't defined outside this function
             $scope.toggleTumbnailData = function (index) {

                 //Step 1 - toggle the text in the right button
                 if ($scope.allInfo[index].btnText == 'Continue reading') {
                     $scope.allInfo[index].btnText = 'Show less';
                 }
                 else {
                     $scope.allInfo[index].btnText = 'Continue reading';
                 }

                 //Step 2
                 $scope["alignToLeft_" + index]   = !($scope["alignToLeft_" + index]);


                 //Step 3
                 if ($scope["isCollapsed_" + index]) {
                     for(var i=0; i<size ; i++) {
                         if (i!=index) {
                             $scope["hideAllTumb_" +i]   = true;
                         }
                     }
                 }
                 else {
                     for(var i=0; i<size ; i++) {
                         $scope["hideAllTumb_" +i]   = false;
                     }
                 }

                 //Step 4
                 $scope["isCollapsed_" + index] = ! ($scope["isCollapsed_" + index]);

             }
         },
         //Error callback
         function(reason) {
             console.log('Failed: ' + reason);
         });
	}();

	/* If the chosen tumbnail was selected to be collape AND all other tumbnails were chosen to be hidden*/
	$scope.checkTumbnail = function (index) {
		
		//Indication of the target of this method
		var okFlag = true;
		
		if ($scope["isCollapsed_" + index]) {
			
			var size = $scope.allInfo.length;
			for(var i=0; i<size ; i++) {
				if (i!=index) {
					if (!$scope["hideAllTumb_" +i]) {
						okFlag = false;
						break;
					}   
				}
			}
		}
		return okFlag;
	}

}]);


/* ------------------------------------ Sub pages controllers ------------------------------------------*/


mainModule.controller('ticketsCtrl', ['$scope','pageDataService',function($scope,pageDataService) {

    //Get all data from service
    var promise = pageDataService.getPageData("pageData","ticketsAndHours");
    promise.then(
        //Success callback
        function(returnedData) {
            $scope.allInfo = returnedData.data;//returnedData is an object with one field of 'data' which is an array
        },
        //Error callback
        function(reason) {
            console.log('Failed: ' + reason);
    });

}]);

mainModule.controller('pricesCtrl', ['$scope','pageDataService',function($scope,pageDataService) {

    //Get all data from service
    var promise = pageDataService.getPageData("pageData","Prices");
    promise.then(
        //Success callback
        function(returnedData) {
            $scope.prices = returnedData.data;//returnedData is an object with one field of 'data' which is an array
        },
        //Error callback
        function(reason) {
            console.log('Failed: ' + reason);
    });
}]);

	
mainModule.controller('directionsAndParkingCtrl', ['$scope','pageDataService',function($scope,pageDataService) {

    //Get all data from service
    var promise = pageDataService.getPageData("pageData","directionsAndParking");
    promise.then(
        //Success callback
        function(returnedData) {
            $scope.allInfo = returnedData.data;//returnedData is an object with one field of 'data' which is an array
        },
        //Error callback
        function(reason) {
            console.log('Failed: ' + reason);
    });
}]);


mainModule.controller('faqCtrl', ['$scope','pageDataService',function($scope,pageDataService) {

    $scope.initialize = function () {
        //Get all data from service
        var promise = pageDataService.getPageData("pageData","faq");
        promise.then(
            //Success callback
            function(returnedData) {
                $scope.allInfo = returnedData.data;//returnedData is an object with one field of 'data' which is an array
                var size = $scope.allInfo.length;
                for(var i=0; i<size ; i++) {
                    $scope["hideData_" + i] = true;
                }
            },
            //Error callback
            function(reason) {
                console.log('Failed: ' + reason);
        });
    }();

    $scope.toggleHideData = function (index) {
        $scope["hideData_" + index] = ! ($scope["hideData_" + index]);
    }
}]);



mainModule.controller('animalsCtrl', ['$scope','photoService','pageDataService',function($scope,photoService,pageDataService) {
	
	/* ---------- Photo and data -------------*/
	$scope.typeModel = "";
	$scope.animalPhotoUrl = "images/Animals/Default_Search.jpg";
	$scope.animalData = "";
	
	$scope.getAnimalPhoto = function (animalType) {
		$scope.animalPhotoUrl=photoService.getAnimalPhoto(animalType);
	};

	$scope.getAnimalData = function (animalType) {

        //Get all data from service
        //Here we get the number of flags (equal to number of headers which is equal to each animal. we could replace 'Ostrich' with something else)
        var promise = pageDataService.getAnimalData(animalType);

        promise.then(
            //Success callback
            function(returnedData) {
                $scope.animalData = returnedData.data;//returnedData is an object with one field of 'data' which is an array
            },
            //Error callback
            function(reason) {
                console.log('Failed: ' + reason);
        });
	};
	
	/* ---------- Collapse's data and flags-------------*/
	
	$scope.initialize = function () {

        //Get all data from service
        //Here we get the number of flags (equal to number of headers which is equal to each animal. we could replace 'Ostrich' with something else)
        var promise = pageDataService.getAnimalData("Ostrich");

        promise.then(
            //Success callback
            function(data) {
               var size = data.length;
               for(var i=0; i<size ; i++) {
                    $scope["hideData_" + i] = true;
               }
            },
            //Error callback
            function(reason) {
                console.log('Failed: ' + reason);
        });
	}();

	$scope.toggleHideData = function (index) {
		$scope["hideData_" + index] = ! ($scope["hideData_" + index]);
	}

}]);


mainModule.controller('zooCampsCtrl', ['$scope','pageDataService','photoService',function($scope,pageDataService,photoService) {

	/* ------------------- Read only data (from services) ------------------- */

	$scope.initReadOnlyData = function () {
		
		$scope.photoUrl = photoService.getZooCampPhoto();

        //Get all data from service
        var promise = pageDataService.getPageData("pageData","Zoo camp");
        promise.then(
            //Success callback
            function(returnedData) {
                var campsAndOverView = returnedData.data;//returnedData is an object with one field of 'data' which is an array

                //campsAndOverView[0] is the overView, campsAndOverView[i>0] are the camps.
                $scope.overView = campsAndOverView[0]["overView"];

                //All i>0 values are the 'camps' object - so in the for loop start taking data from the second item (i=1) in order not to take the 'overView' item
                $scope.allCamps = [];
                for (var i=1; i<campsAndOverView.length ; i++) {
                    //allCamps should start from 0, we just take the data from 'campsAndOverView' from the second item. that's all.
                    $scope.allCamps [i-1] = campsAndOverView[i];
                }
            },
            //Error callback
            function(reason) {
                console.log('Failed: ' + reason);
        });
	}();
}]);

mainModule.controller('modalInstanceCtrl', ['$scope','$timeout','$modalInstance','$http','dataFromCallingScope' ,
								    function($scope,  $timeout,  $modalInstance , $http , dataFromCallingScope) {		
  //-----
  $scope.data = dataFromCallingScope;
  $scope.totalPrice = parseInt(data.feeData.price) + parseInt(data.dropOrPickup.price);
  
  $scope.inputData = {};
  //$scope.inputData.emailModel="Bla";
  $scope.inputData.validEmail="";

  $scope.EMAIL_REGEXP = "/^[a-z0-9!#$%&'*+/=?^_`{|}~.-]+@[a-z0-9-]+(\.[a-z0-9-]+)*$/i";
  //-----
  
  $scope.$watch('inputData.emailModel', function(){   
  });
  
  $scope.ok = function () {

	  	if ($scope.inputData.emailModel=="" || $scope.inputData.emailModel==undefined) {
	  		$scope.inputData.validEmail="showInvalidMail"; 		
	  	}
		else {
	  		$scope.inputData.validEmail="showMessageSent"; 		
		 
			$timeout(			function() { $modalInstance.close() },
								1500
					); 	
	   }
	};

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };

}]);
	



	

	