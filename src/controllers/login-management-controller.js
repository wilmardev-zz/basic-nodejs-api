const login = (req, res) => {
  const { user, pass } = req.body;
  // voy contra la db a verificar la info del user
  if (user !== config.LoginInfo.User || pass !== config.LoginInfo.Password) {
    return res.status(401).json({ message: "Invalid user or password" });
  }
  const payload = { user };
  const jwtToken = jwt.sign(payload, config.JwtSecretKey, {
    expiresIn: config.JwtExpiresToken,
  });
  return res.status(200).json({ token: jwtToken });
};
