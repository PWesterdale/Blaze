module.exports = function(mongoose){

	var field = mongoose.Schema({
		label : String,
		type : String,
		values : mongoose.Schema.Types.Mixed,
	});

	return [field];

}