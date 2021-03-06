const bcrypt = require("bcrypt");
const { to } = require("../helpers/utils");
module.exports = (sequelize, DataTypes) => {
  let Model = sequelize.define(
    "Settings",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      key: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      value: {
        type: DataTypes.TEXT,
        allowNull: false
      }
    },
    {
      timestamps: false
    }
  );
  
  return Model;
};
