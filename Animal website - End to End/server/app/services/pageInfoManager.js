
var PageInfoManager = function () {
    console.log("In PageInfoManager constructor");
};

PageInfoManager.prototype = function () {
    var Q = require('q');

    //------- require dao object -------- //
    var DBInfoManager = require('../dao/dbInfoManager.js');
    var dbInfoManagerObj = new DBInfoManager();
    // ----------------------------------- //

	var getRelevantInfo = function(pageName) {
        var deferred = Q.defer();
        var promise;

        //Get the relevant content
		switch (pageName) {
                            case "Thumbnail":
                                    promise = dbInfoManagerObj.getPageInfo("Tumbnail");
                                    break;
			      			case "ticketsAndHours":
                                    promise = dbInfoManagerObj.getPageInfo("Hours");
					      			break;
                            case "Prices":
                                    promise = dbInfoManagerObj.getPageInfo("Prices");
                                    break;
					        case "directionsAndParking":
                                    promise = dbInfoManagerObj.getPageInfo("Directions");
					      			break;
					      	case "Zoo camp":
                                    promise = dbInfoManagerObj.getPageInfo("ZooCamp");
					      			break;
                            case "faq":
                                    promise = dbInfoManagerObj.getPageInfo("FAQInfo");
                                    break;
		}

        //When the promise is returned - handle it
        promise.then(function (document) {
            deferred.resolve(document); // fulfills the promise with `data` as the value
        })
        .fail(function(err) {
                console.log("Error: " +err);
                deferred.reject(err); // rejects the promise with `er` as the reason
        });

        return deferred.promise; // the promise is returned
	};

    //Public methods
	return {
		getRelevantInfo:getRelevantInfo
	}
}();

module.exports = PageInfoManager;