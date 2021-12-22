const Sequelize = require("sequelize");
const db = require("../db");

const Clothes = db.define("clothes", {
  item: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
  },
  condition: {
    type: Sequelize.ENUM,
    values: ["new", "gently used", "oldie but goodie"],
  },
});

module.exports = Clothes;
