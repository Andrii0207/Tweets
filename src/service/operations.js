import axios from "axios";

axios.defaults.baseURL = "https://6457b87d1a4c152cf988b585.mockapi.io";

export const getUsers = async () => {
  const { data } = await axios.get("/users");
  return console.log(data);
};
