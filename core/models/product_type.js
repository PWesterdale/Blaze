module.exports = function(schema, mongoose){

	var productTypeSchema = schema({
		name: String,
		url: String,
		description: String,
		fields: require('./product_type/field.js')(mongoose),
		variants : require('./product_type/variant.js')(mongoose),
	});

	var defaultFields = [
		{
			'label'  : 'Name',
			'type'   : 'Input',
			'values' : false,
			'default': true
		}
		{
	    	'label'  : 'SKU',
	    	'type'   : 'SKU',
	    	'values' : false,
	    	'default': true
	    },
	    {
	    	'label'  : 'Description',
	    	'type'   : 'Textarea',
	    	'values' : false,
	    	'default': true
	    },
		{
			'label'  : 'Price',
			'type'   : 'Numeric',
			'values' : false,
			'default': true
		},
		{
			'label'  : 'Enabled',
			'type'   : 'Boolean',
			'values' : false,
			'default': true
		},
		{
			'label'  : 'Available From',
			'type'   : 'Date',
			'values' : false,
			'default': true
		},
		{
			'label'  : 'Available To',
			'type'   : 'Date',
			'values' : false,
			'default': true
		},
		{
			'label'  : 'Stock Level',
			'type'   : 'Numeric',
			'values' : false,
			'default': true
		},
		{
			'label'  : 'In Stock',
			'type'   : 'Boolean',
			'values' : false,
			'default': true
		}
	]

	productTypeSchema.pre('save', function(next) {

	    var pType = this;
	    if(this.fields.length == 0){ // Add default fields
	    	this.fields = defaultFields;
	    }

	    next();

	});

	var productTypeModel = mongoose.model('ProductType', productTypeSchema);
	return productTypeModel;
	
}