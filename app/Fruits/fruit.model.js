const { Timestamp } = require('mongodb')
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const Fruit = new Schema({
    id: ObjectId,
    name: { type: String, maxlength: 200 },
    season: { type: String, maxlength: 200 },
    country: { type: String, maxlength: 200 },
    price: { type: Number },
    unit: { type: String, default: 'KG' },
    currencyunit: { type: String, default: 'VND' },
    remain: { type: Number },
    sold: { type: Number },
    avatar: { type: String },
    description: { type: String, maxlength: 1000 },

}
    ,
    { timestamps: true }
)

module.exports = mongoose.model('Fruits', Fruit)