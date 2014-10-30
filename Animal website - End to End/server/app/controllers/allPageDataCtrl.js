
/* Get header of relevant page. */
module.exports.pageHeaderCtrl = function(req, res) {
    console.log("In pageHeaderCtrl");
    var PageHeaderManager = require('../services/pageHeaderManager.js');
    var pageHeaderManagerObj = new PageHeaderManager();

    //-----------------------------------------------------------//
    //Add headers to response in order to avoid the next bug: XMLHttpRequest cannot load http:// 'Access-Control-Allow-Origin' header is present on the requested resource.
    var responseHandlerRequired = require('./responseHandler.js');
    res = responseHandlerRequired.responseHandler(res);
    //-----------------------------------------------------------//

    var pageName = req.params.pageName;

    var promise = pageHeaderManagerObj.getWellHeader(pageName);
    promise.then(function (document) {
        res.send(document);
    })
    .fail(function(err) {
        console.log("Error: " +err);
        throw err;
    });
};

/* Get data of relevant page. */
module.exports.pageInfoCtrl = function(req, res) {
    console.log("In pageInfoCtrl");
	var PageInfoManager = require('../services/pageInfoManager.js');
	var pageInfoManagerObj = new PageInfoManager();

    //-----------------------------------------------------------//
    //Add headers to response in order to avoid the next bug: XMLHttpRequest cannot load http:// 'Access-Control-Allow-Origin' header is present on the requested resource.
    var responseHandlerRequired = require('./responseHandler.js');
    res = responseHandlerRequired.responseHandler(res);
    //-----------------------------------------------------------//

    var pageName = req.params.pageName;

    var promise = pageInfoManagerObj.getRelevantInfo(pageName);
    promise.then(function (document) {
        res.send(document);
    })
    .fail(function(err) {
            console.log("Error: " +err);
            throw err;
    });
};

module.exports.animalDataCtrl = function(req, res) {
    console.log("In animalDataCtrl");
    var PageDataManager = require('../services/pageInfoManager.js');
    var pageDataManagerObj = new PageDataManager();

    //-----------------------------------------------------------//
    //Add headers to response in order to avoid the next bug: XMLHttpRequest cannot load http:// 'Access-Control-Allow-Origin' header is present on the requested resource.
    var responseHandlerRequired = require('./responseHandler.js');
    res = responseHandlerRequired.responseHandler(res);
    //-----------------------------------------------------------//

    var animalType = req.params.animalType;
    var allPageData = pageDataManagerObj.getRelevantInfo("animals",animalType);
    res.send(allPageData);
};