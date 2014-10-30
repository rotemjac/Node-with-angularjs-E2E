
var NavAndFooterManager = function () {
    console.log("In NavAndFooterManager constructor");
};

NavAndFooterManager.prototype = function () {
    var DBNavAndFooterManager = require('../dao/dbNavAndFooterManager.js');
    var dbNavAndFooterManagerObj = new DBNavAndFooterManager();
	var getAllData = function() {
			return dbNavAndFooterManagerObj.getAllData();
	};

	return {
		getAllData:getAllData
	};
}();

module.exports = NavAndFooterManager;

