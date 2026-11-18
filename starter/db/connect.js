const dns = require("dns");
dns.setServers(["1.1.1.1", "1.0.0.1"]);
const mongoose = require("mongoose");

const connectDB = (url) => {
  return mongoose.connect(url);
};

module.exports = connectDB;
