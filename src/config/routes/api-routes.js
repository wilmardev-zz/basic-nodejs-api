const express = require("express");
const usersController = require("../../controllers/users-controller");
const authMiddleware = require("../middlewares/auth-middleware");

const initApiRoutes = () => {
  const router = express.Router();

  router.get("/users", authMiddleware.validateJWT, usersController.getUsers);
  router.post("/user", usersController.createUser);

  return router;
};

module.exports = { initApiRoutes };
