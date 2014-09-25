var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var ArticleSchema   = new Schema({
	name: String,
    url: String,
    category: String
	//how to include recc'd arts?
});

module.exports = mongoose.model('Article',ArticleSchema);
