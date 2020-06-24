const userService = require("../services/users-service");

const getUsers = (req, res) => {
  return userService
    .getUsers()
    .then((userInfo) => res.status(200).json(userInfo))
    .catch((err) => {
      return res.status(500).json(err);
    });
};

const createUser = (req, res) => {
  return userService
    .createUser()
    .then((response) => res.status(201).json(response))
    .catch((err) => res.status(500).json(err));
};

module.exports = { getUsers, createUser };
