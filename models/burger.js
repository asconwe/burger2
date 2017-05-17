module.exports = function (sequelize, DataTypes) {
  var Burger = sequelize.define("Burger", {
    burger_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  }, {
      // Burgers to belong to Customers
      classMethods: {
        associate: function (models) {
          // Associating Burger with Customer
          Burger.belongsTo(models.Customer, {
            foreignKey: {
              allowNull: false
            }
          });
        }
      }
    });
  return Burger;
};
