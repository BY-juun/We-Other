import Cookies from "js-cookie";
import { customAxios } from "./customAxios";

const TokenRefresh = () => {
  const accessToken = Cookies.get("accessToken");
  if (accessToken) {
    customAxios.defaults.headers.common["accesstoken"] = accessToken;
  }
};

export default TokenRefresh;
