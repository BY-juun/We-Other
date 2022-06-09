const express = require("express");
const compression = require("compression");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const multer = require("multer");
const path = require("path");

module.exports = function () {
  const app = express();

  app.use(compression());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cors({ origin: true, credentials: true }));
  app.use(cookieParser());
  // app.use(express.static(path.join(__dirname,"../public")));
  app.use("/public", express.static(path.join(__dirname, "../public/")));  // public폴더를 /public이라는 주소로 보냈을경우에 자동적으로 맵핑시키는 것으로 확인할 수 있다. 


  app.get("/", (req, res) => {
    res.send(path.join(__dirname, "../public/"));
  });

  require("../src/User/userRoute")(app);
  require("../src/Comment/commentRoute")(app);
  require("../src/Post/postRoute")(app);
  require("../src/Tag/tagRoute")(app);

  

  return app;
};
// 웹소켓 미들웨어도 바로 고려할 것. 이를 통해 사용자간 메시지를 서로 주고 받을 수 있도록.
