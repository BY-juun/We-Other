const express = require("express");
const compression = require("compression");
const cors = require("cors");
const cookieParser = require("cookie-parser");

module.exports = function () {
  const app = express();

  app.use(compression());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cors());
  app.use(cookieParser());

  app.get("/", (req, res) => {
    res.send("goooood");
  });

  const userRouter = require("../src/User/userRoute")(app);
  const commentRouter = require("../src/Comment/commentRoute")(app);
  const postRouter = require("../src/Post/postRoute")(app);
  const TagRouter = require("../src/Tag/tagRoute")(app);

  return app;
};
