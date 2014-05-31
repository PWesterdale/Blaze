module.exports = function(mongoose){

	var variant = mongoose.Schema({
		label : String,
		type : String,
		values : mongoose.Schema.Types.Mixed,
	});

	return [variant];

}