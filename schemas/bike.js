const mongoose = require('../db/db');
const Schema = mongoose.Schema;

const bikeSchema = new Schema({
    make: { type: String, required: true },
    model: { type: String, required: true },
    modelYear: Number,
    price: Number
}, {
    timestamps: true
});

const Bike = mongoose.model('Bike', bikeSchema);

module.exports = Bike;