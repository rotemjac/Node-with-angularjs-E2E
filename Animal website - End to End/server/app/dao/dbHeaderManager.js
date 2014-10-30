
var DBHeaderManager = function () {
    console.log("In DBHeaderManager.getWellHeader");
};

DBHeaderManager.prototype = function () {

    var Q = require('q');;

    var initData = function() {
        var myDb = require('./DBconfig').db;
        var headers = myDb.collection('headers');

        myDb.collection('headers').insert(
            [
                {
                    title : "Tickets & Hours",
                    text  : "We're open 365 days a year. Come see over 1,000 exotic, endangered, and rescued animals and majestic, peaceful gardens full of native and foreign plants."
                },
                {
                    title:"Zoo Map",
                    text:"To make sure you don't miss a thing on your visit to our 99 acres of lush gardens and animal exhibits, click the image below to download a printable PDF."
                },
                {
                    title:"Directions & Parking",
                    text:"This urban oasis on the Pacific Ocean is a great getaway for Bay Area residents and an important historical destination for those visiting San Francisco. What's more, we offer a discount for those who take Muni to the Zoo."
                },
                {
                    title:"Animals",
                    text:"Search through our pages of animals to learn more about the wonderful things you can experience. From the smallest insect to the tallest giraffe, you're sure to find a story that touches and inspires you."
                },
                {
                    title:"Zoo camp",
                    text:"Have a wild time at the Zoo. Our weekly day camps run during spring, summer, and winter breaks. Join us for Zoo Camp and learn about animals, their habitats, and how we care for them."
                },
                {
                    title:"FAQ",
                    text:"Answers for common questions."
                }
            ]
            ,function(err, result) {
                if (err) {
                    throw err;
                }
                console.log("Initializing headers data in Database: " +result);
            }

        );
    };

    //----------- CRUD operations on header -----------//
    var addHeader = function () {

    };

    var getHeader = function (page) {
        var deferred = Q.defer();
        var myDb = require('./DBconfig').db;
        var titleToSearch;

        switch (page) {

            case "ticketsAndHours":
                titleToSearch = "Tickets & Hours";
                break;

            case "zooMap":
                titleToSearch ="Zoo Map";
                break;

            case "directionsAndParking":
                titleToSearch ="Directions & Parking";
                break;

            case "animals":
                titleToSearch ="Animals";
                break;

            case "zooCamp":
                titleToSearch ="Zoo camp";
                break;

            case "faq":
                titleToSearch ="FAQ";
                break;
        }

        myDb.collection('headers').findOne (
            {title: titleToSearch},
            {_id:0},
            {safe: true}
        ,function(err, document) {
                if (err) {
                    deferred.reject(err); // rejects the promise with `er` as the reason
            }
            else {
                deferred.resolve(document); // fulfills the promise with `data` as the value
            }
        });
        return deferred.promise; // the promise is returned
    };

    var updateHeader = function () {

    };

    var deleteHeader = function () {

    };


	return {
		getWellHeader:getHeader,
        initData:initData
	}
}();

module.exports = DBHeaderManager;