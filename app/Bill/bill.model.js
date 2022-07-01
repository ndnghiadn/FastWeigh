const { Timestamp } = require('mongodb')
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const Bill = new Schema({
    id: ObjectId,
    LisFruits: [{
        idfruit: {
            type: mongoose.ObjectId,
            ref: 'Fruits'
        },
        weight: {
            type: Number
        }
    }],
    status: { type: Number, default: 0 },
    totalPrice: { type: Number },
    createAt:{type:Date,default:Date.now},
    code:{type:Number}
}
)

module.exports = mongoose.model('bills', Bill)