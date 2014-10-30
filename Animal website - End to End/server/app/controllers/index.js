

module.exports.getAllRoutes = function(app) {

	//---------- Http calls from website -----------//
	var navAndFooterRequired = require('./navAndFooterCtrl.js');
	app.get('/navAndFooter', navAndFooterRequired.navAndFooterCtrl);

	var pageDataRequired = require('./allPageDataCtrl.js');
	app.get('/pageHeader/:pageName',     pageDataRequired.pageHeaderCtrl);
    app.get('/pageData/:pageName',       pageDataRequired.pageInfoCtrl);
    app.get('/animalData/:animalType',   pageDataRequired.animalDataCtrl);

};

