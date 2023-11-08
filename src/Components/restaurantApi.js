import axios from "axios";
export default axios.create({
  baseURL: "https://inventory-backend-node.herokuapp.com/",
  headers: { Authorization: localStorage.getItem("token") },
});
