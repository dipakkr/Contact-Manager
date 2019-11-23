import axios from "axios";

const setAuthToken = token => {
  if (token) {
    axios.defaults.headers.common["x-auth-token"] = token;
    console.log("Default Header Set");
  } else {
    delete axios.defaults.headers.common["x-auth-token"];
    console.log("Delete Header");
  }
};

export default setAuthToken;
