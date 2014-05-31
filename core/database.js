module.exports = function(app){

	var mongoose = require('mongoose');
	var mysql      = require('mysql');
	var config = app.get('blaze.config').database;

	var mysqlConnection = mysql.createConnection({
		host     : config.mysql.host,
		user     : config.mysql.username,
		password : config.mysql.password,
		database : config.mysql.database
	});

	var mongoConnection = mongoose.connect(config.mongo.url);
	var mongoSchema = mongoose.Schema;

	db = {
		mongo : mongoConnection,
		mysql : mysqlConnection,
		schemas : {}
	};

	db.schemas.product = require('./models/product.js')(mongoSchema, mongoose);
	db.schemas.productType = require('./models/product_type.js')(mongoSchema, mongoose);

	return db;
}