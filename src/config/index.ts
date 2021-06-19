import axios from "axios";

let baseURL = "";

if (process.env.NODE_ENV !== "production") {
  baseURL = "https://whatzappy.herokuapp.com/";
} else {
  baseURL = process.env.REACT_APP_PROD || "";
}

const backend = axios.create({
  baseURL,
});

export { backend };
