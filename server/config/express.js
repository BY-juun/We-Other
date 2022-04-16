const express = require("express");
const compression = require("compression");
const cors = require("cors");
const cookieParser = require("cookie-parser");

module.exports = function () {
  const app = express();

  app.use(compression());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cors({ origin: true, credentials: true }));
  app.use(cookieParser());

  app.get("/", (req, res) => {
    res.send("goooood");
  });

  require("../src/User/userRoute")(app);
  require("../src/Comment/commentRoute")(app);
  require("../src/Post/postRoute")(app);
  require("../src/Tag/tagRoute")(app);

  return app;
};
