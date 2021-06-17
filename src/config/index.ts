import axios from "axios"

let baseURL = ""

if (process.env.NODE_ENV !== "production") {
  baseURL = "http://localhost:5000"
} else {
  baseURL = process.env.REACT_APP_PROD || ""
}

const backend = axios.create({
  baseURL,
})

export { backend }
