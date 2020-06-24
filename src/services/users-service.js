const { User } = require("../entities/users");

const getUsers = async () => {
  return User.findAll().then((info) => info);
};

const createUser = async () => {
  console.log("Crear Usuario Service");
};

module.exports = { getUsers, createUser };
