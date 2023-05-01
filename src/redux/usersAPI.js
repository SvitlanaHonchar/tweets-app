import axios from "axios";

const BASE_URL = "https://644f6240ba9f39c6ab6284ec.mockapi.io/";

export const requestUsers = async () => {
  const { data } = await axios.get(`${BASE_URL}users`);
  return data;
};

export const updateUser = async (updUserData) => {
  const { data } = await axios.put(
    `${BASE_URL}users/${updUserData.id}`,
    updUserData
  );
  return data;
};
