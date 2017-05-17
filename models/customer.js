module.exports = function(sequelize, DataTypes) {
  var Customer = sequelize.define("Customer", {
    customer: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  }, {
      // Customer has Burgers
      classMethods: {
        associate: function(models) {
          // Associating Customers with Burgers
          // When an Customer is deleted, also delete any associated Burgers
          Customer.hasMany(models.Burger, {
            onDelete: "cascade"
          });
        }
      }
    }
  );
  return Customer;
};