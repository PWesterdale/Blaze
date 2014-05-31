module.exports = function(schema, mongoose){

	var productSchema = schema({
		type : schema.Types.Mixed,
		type_id : Number,
		categories : schema.Types.Mixed,
		media: schema.Types.Mixed,
		variants : schema.Types.Mixed
	});

	productSchema.methods.isSale = function(cb){
		// Check for discounts on variants
	};

	productSchema.methods.flatten = function(cb){
		// Flatten down external info (I.E sale)
	};

	var productModel = mongoose.model('Product', productSchema);
	return productModel;

}