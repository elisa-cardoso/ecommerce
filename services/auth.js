import axios from "axios";

const authenticate = async (mode, email, password) => {
  const API_KEY = process.env.EXPO_PUBLIC_API_KEY
  const URL_API = process.env.EXPO_PUBLIC_API_URL

    try {
    const response = await axios.post(`${URL_API}${mode}?key=${API_KEY}`, {
      email: email,
      password: password,
      returnSecureToken: true,
    });
    //console.log(response.data);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const createUser = async (email, password) => {
  const token = await authenticate("signUp", email, password);
  return token;
};
export const login = async (email, password) => {
  const token = await authenticate("signInWithPassword", email, password);
  return token;
};
