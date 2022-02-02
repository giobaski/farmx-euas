import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "https://farmx-springboot-api.herokuapp.com/api/";
const user = JSON.parse(localStorage.getItem('user'));


const fetchAlllots = () => {
  return axios.get(API_URL + "lots", { headers: authHeader()});
};


const placeOrder = (lotId, amount) => {
  return axios.post(API_URL + `lots/${lotId}/orders/${amount}`, {},
  { headers: authHeader()});
  };


const fetchOrdersByUsername = () => {
  return axios.get(API_URL + `orders/${user.username}`,{}, { headers: authHeader()});
}


export default {
  fetchAlllots,
  placeOrder,
  fetchOrdersByUsername
};