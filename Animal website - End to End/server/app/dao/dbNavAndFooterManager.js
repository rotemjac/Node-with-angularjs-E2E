
var DBNavAndFooterManager = function () {
    console.log("In DBNavAndFooterManager constructor");
};

DBNavAndFooterManager.prototype = function () {

	var getAllData = function() {
			allColumnsData =	[
									{
										mainTitle: "Home", mainRef: "#/",
										subHeaders: [] 
									},
									{
										mainTitle: "Visit", 
										subHeaders: [
											{title:"Tickets and Hours",ref:"#/ticketsAndHours"},
											{title:"Zoo map",ref:"#/zooMap"},
											{title:"Directions and parking",ref:"#/directionsAndParking"}
										]
									},
									{
										mainTitle: "Animals", 
										subHeaders: [
											{title:"Meet the animals",ref:"#/"},
											{title:"Search your favorite animal",ref:"#/animals_search"}
										]
									},	
									{
										mainTitle: "Join", 
										subHeaders: [
											{title:"Membership info",ref:"#/"},
											{title:"Membership FAQ" ,ref:"#/"},
											{title:"Our camps"      ,ref:"#/zooCamp"},
										]
									},	
									{
										mainTitle: "About", 
										subHeaders: [
											{title:"FAQ",ref:"#/faq"},
											{title:"Hour history",ref:"#/"},
											{title:"Contact us",ref:"#/"}
										]
									}																								

			];
			return allColumnsData;
	};

	return {
		getAllData:getAllData
	};
}();

module.exports = DBNavAndFooterManager;