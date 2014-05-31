var http = require('http'),
	express = require('express'),
	app = express();

app.set('blaze.config', require('./config/blaze.' + process.env.MODE + '.json'));
app.set('blaze.db', require('./core/database.js')(app));

var db = app.get('blaze.db');

var pType = new db.schemas.productType({
	'name' : 'Shirts',
	'url' : 'tees'
});

console.log(pType);

pType.save(function(err, dbPType){
	console.log(err, dbPType);
})





