import axios from "axios";

const URL = axios.create({ baseURL: "http://localhost:5000/api/users" });

export const getUsersIncomeCar = async () => {
  try {
    const data = await URL.get("/income-car");
    return data.data
  } catch (error) {
   console.log(error);
  }
};

export const getHighPricedMaleUsers = async () => {
  try {
    const data = await URL.get("/male-phone");
    return data.data;
  } catch (error) {
    console.log(error);
  }
};

export const getlastNameQuoteEmail = async () => {
  try {
    const data = await URL.get("/quote-email");
    return data.data;
  } catch (error) {
    console.log(error);
  }
};

export const getCarBrandEmailNoDigit = async () => {
  try {
    const data = await URL.get("/car-email");
    return data.data;
  } catch (error) {
    console.log(error);
  }
};


export const getTopTenCities = async () => {
  try {
    const data = await URL.get("/top-cities");
    return data.data;
  } catch (error) {
    console.log(error);
  }
};

