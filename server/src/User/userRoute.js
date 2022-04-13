const { verifyAccessToken } = require("../../config/jwt");

module.exports = (app) => {
  const user = require("./userController");

  app.post("/api/user/sign-up", user.signUpUser);

  app.post("/api/user/sign-in", user.signIn);

  app.get("/api/user/test", verifyAccessToken, user.test);
};
