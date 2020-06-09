const { User } = require("../entities/users");

const getUsers = async () => {
  return User.findAll().then((info) => info);
};

module.exports = { getUsers };
