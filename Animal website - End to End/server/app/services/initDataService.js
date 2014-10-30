
var initDataService = function () {
    console.log("In initDataService constructor");
};

initDataService.prototype = function () {
    var DBNavAndFooterManager = require('../dao/dbNavAndFooterManager.js');
    var dbNavAndFooterManager = new DBNavAndFooterManager();

    var DBHeaderManager = require('../dao/dbHeaderManager.js');
    var dbHeaderManager = new DBHeaderManager();

    var DBInfoManager = require('../dao/dbInfoManager.js');
    var dbInfoManager = new DBInfoManager();



    var initAllData = function() {
        //dbHeaderManager.initData();
        //dbInfoManager.initData();
        //dbNavAndFooterManager.initData();
    };

    return {
        initAllData:initAllData
    };
}();

module.exports = initDataService;

