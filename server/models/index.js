// module.exports = {
//     Destinations: require("./destinaions"),
//     Login: require("./login")
//     // Events: require('./events')
// }

const dbConfig = require("../config/connection.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.tutorials = require("./Pasttrips.js")(mongoose);

module.exports = db;