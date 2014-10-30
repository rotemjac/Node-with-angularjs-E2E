
var PageHeaderManager = function () {
    console.log("In PageHeaderManager constructor");
};

PageHeaderManager.prototype = function () {
    var Q = require('q');

    //------- require dao object -------- //
    var DBHeaderManager = require('../dao/dbHeaderManager.js');
    var dbHeaderManagerObj = new DBHeaderManager();
    // ----------------------------------- //

    //Private methods
    //The 'animalType' parameter is used only when the client ask for animal data
	var getWellHeader = function(pageName) {
        var deferred = Q.defer();
        var promise = dbHeaderManagerObj.getWellHeader(pageName);
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
        getWellHeader:getWellHeader
	}
}();

module.exports = PageHeaderManager;