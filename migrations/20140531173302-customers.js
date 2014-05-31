var dbm = require('db-migrate');
var type = dbm.dataType;

exports.up = function(db, callback) {

	db.createTable('customers', {
		id: { type: 'int', primaryKey: true },
		firstName: { type: 'string', notNull: true },
		lastName : { type: 'string', notNull: true },
		email : { type: 'string', notNull: true },
		password : 'string',
		createdAt: {type: 'int'},
		updatedAt: {type: 'int'},
	}, callback);

};

exports.down = function(db, callback) {
	db.dropTable('customers', callback);
};
