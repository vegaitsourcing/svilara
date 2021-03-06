const bcrypt = require("bcrypt");
const { to } = require("../helpers/utils");
module.exports = (sequelize, DataTypes) => {
  let Model = sequelize.define(
    "Event",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      title: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      logo: {
        type: DataTypes.STRING(50),
        allowNull: false,
        defaultValue: "default-picture.png"
      },
      picture: {
        type: DataTypes.STRING(50),
        allowNull: false,
        defaultValue: "default-picture.png"
      },
      html: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      status: {
        type: DataTypes.STRING(10),
        allowNull: false,
        defaultValue: "pending"
      },
      category: {
        type: DataTypes.STRING(100),
        allowNull: true
      },
      type: {
        type: DataTypes.STRING(100),
        allowNull: true
      },
      space: {
        type: DataTypes.STRING(100),
        allowNull: true
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      socialMedia: {
        type: DataTypes.STRING(150),
        allowNull: true
      },
      age: {
        type: DataTypes.STRING(50),
        allowNull: true
      },
      contactEmail: {
        type: DataTypes.STRING(100),
        allowNull: true
      },
      formAnswers: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      startTime: {
        type: DataTypes.DATE,
        allowNull: true
      },
      endTime: {
        type: DataTypes.DATE,
        allowNull: true
      },
      created: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.fn("NOW")
      }
    },
    {
      timestamps: false
    }
  );

  return Model;
};
