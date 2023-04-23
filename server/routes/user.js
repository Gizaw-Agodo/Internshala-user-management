import express from "express";
import {
  getUsersIncomeCar,
  getMaleUsersPhone,
  getUsersQuoteEmail,
  getUsersCarEmail,
  getTopCitiesUsersIncome,
} from "../controllers/user.js";

const router = express.Router()

// Users which have income lower than $5 USD and have a car of brand “BMW” or “Mercedes”
router.get("/income-car", getUsersIncomeCar);

//Male Users which have phone price greater than 10,000
router.get("/male-phone", getMaleUsersPhone);

// Users whose last name starts with “M” and has a quote character length greater than 15 and email includes his/her last name
router.get("/quote-email", getUsersQuoteEmail);

// Users which have a car of brand “BMW”, “Mercedes” or “Audi” and whose email does not include any digit
router.get("/car-email", getUsersCarEmail);

// Show the data of top 10 cities which have the highest number of users and their average income
router.get("/top-cities", getTopCitiesUsersIncome);


export default router
