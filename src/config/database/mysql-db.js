const ENV = process.env.NODE_ENV || "development";
const { Sequelize } = require("sequelize");
const { MysqlConfig } = require("../environments/" + ENV).config;
const userDb = require("../../entities/users");

const mySqlSequelize = new Sequelize(
  MysqlConfig.Db,
  MysqlConfig.User,
  MysqlConfig.Password,
  {
    host: MysqlConfig.Host,
    dialect: MysqlConfig.Dialect,
    operatorsAliases: false,
  }
);

const initDataBase = async () => {
  await userDb.initUserDb(mySqlSequelize);
  // await productsDb.initUserDb(mySqlSequelize);
  mySqlSequelize.sync({ force: false }).then(() => {
    console.log(`Base de datos sincronizada!`);
  });
};

module.exports = {
  initDataBase,
};
