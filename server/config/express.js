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
// 웹소켓 미들웨어도 바로 고려할 것. 이를 통해 사용자간 메시지를 서로 주고 받을 수 있도록.
