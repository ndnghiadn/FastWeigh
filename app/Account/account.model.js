const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Account = new Schema({
    id: ObjectId,
    username: { type: String, maxlength: 100 },
    password: { type: String, maxlength: 100 },
    role: { type: String, maxlength: 100 },
    createAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now }
})
module.exports = mongoose.model('accounts', Account);