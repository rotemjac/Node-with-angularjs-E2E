//var dbUrl = 'mongodb://localhost:27017/E:/Databases/All Databases/MongoDB/animalDB';
var dbUrl = 'localhost/animalDB';
var collections = ['headers', 'pageContent'];
var mongoJs =  require('mongojs');

module.exports.db = mongoJs.connect(dbUrl,collections);
