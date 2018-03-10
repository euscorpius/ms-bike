var mongoose = require('mongoose');

const mongoUri = process.env.MONGODB_URI || 'mongodb://127.0.0.1/bike';
mongoose.connect(mongoUri);

const debug = process.env.MONGO_DEBUG || true;

mongoose.set('debug', debug);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("Mongo is connected.");
});

module.exports = mongoose;
