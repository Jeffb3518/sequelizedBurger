module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define("burgers", {

      burger_name: {
          type: Sequelize.STRING,
          allowNull: false
  },
      devoured: {
          type: Sequelize.BOOLEAN,
          allowNull: false
  },
      date: {
           type: Sequelize.STRING,
           isDate: True,
           allowNull: false
  }
  });
  return Burger;
  };