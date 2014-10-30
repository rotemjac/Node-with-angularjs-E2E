

/* Get all data of the navigation toolbar and the footer. */
module.exports.navAndFooterCtrl = function(req, res) {
    var NavFooterManagerRequired = require('../services/navAndFooterManager.js');
	var navFooterObj = new NavFooterManagerRequired();
	var allColumnsData = navFooterObj.getAllData();

    //-----------------------------------------------------------//
    //Add headers to response in order to avoid the next bug: XMLHttpRequest cannot load http:// 'Access-Control-Allow-Origin' header is present on the requested resource.
    var responseHandlerRequired = require('./responseHandler.js');
    res = responseHandlerRequired.responseHandler(res);
    //-----------------------------------------------------------//

  	res.send(allColumnsData);
};

