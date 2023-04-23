import userData  from "./sample_data.js";

import User from "../models/User.js";

async function insertUsers() {
  try {
    const count = await User.countDocuments();
    if (count === 0) {

      await User.insertMany(userData);
      console.log("Users data inserted successfully!");
    }
  } catch (err) {
    console.error("Error inserting users data:", err);
  }
}
export default insertUsers;
