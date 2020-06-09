const { Model, DataTypes } = require("sequelize");

class User extends Model {
  // Definir y hacer lo que yo quiera custom
}

const initUserDb = async (sequelize) => {
  return new Promise((resolve) => {
    User.init(
      // attributes
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        name: DataTypes.STRING,
        lastName: DataTypes.STRING,
      },
      // options
      {
        sequelize,
        modelName: "user",
      }
    );
    resolve();
  });
};

module.exports = { initUserDb, User };
