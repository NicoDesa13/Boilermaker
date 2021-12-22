//this is the access point for all things database related!

const db = require("./db");

const User = require("./models/User");
const Clothes = require("./models/Clothes");

//associations could go here!

User.hasMany(Clothes);
Clothes.belongsTo(User);

module.exports = {
  db,
  models: {
    User,
    Clothes,
  },
};
