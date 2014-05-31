module.exports = function(connection){

	var baseModel = {
		table : false,
		getBy : function(field, value, cb) {
			var sql = "SELECT * FROM ? where ? = ?";
			connection.query(sql, [this.table, field, value], function(err, results) {
				cb(err, results);
			});
		},
		getById : function(id, cb) {
			var sql = "SELECT * FROM ? where id = ?";
			connection.query(sql, [this.table, id], function(err, results) {
				cb(err, results);
			});
		},
		update : function(id, data, cb) {
			var sql = "UPDATE ? SET ? WHERE id = ?";
			connection.query(sql, [this.table, data, id], function(err, results) {
				cb(err, results);
			});
		},
		insert : function(data, cb) {
			var sql = "INSERT INTO ? SET ?";
			connection.query(sql, [this.table, data], function(err, results) {
				cb(err, results);
			});
		}
	};

	return baseModel;

};