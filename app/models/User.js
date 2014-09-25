var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var UserSchema   = new Schema({
    name: String,
    password: String,
    email: String,
    articlesRead: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Article' }],
    articlesReccomended: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Article' }]
    //how to include recc's arts
    //salt passwords
});

module.exports = mongoose.model('User', UserSchema);
