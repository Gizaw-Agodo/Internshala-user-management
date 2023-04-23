import User from "../models/User.js";

export const getUsersIncomeCar = async (req, res, next) => {
  try {
    const users = await User.find({
      $and: [{ income: { $lt: "$5" } }, { car: { $in: ["BMW", "Mercedes"] } }],
    }).exec();
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

export const getMaleUsersPhone = async (req, res, next) => {
  try {
    const users = await User.find({
      $and: [{ gender: "Male" }, { phone_price: { $gt: 10000 } }],
    }).exec();

    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

export const getUsersQuoteEmail = async (req, res, next) => {
  try {
   const users = await User.find({
     last_name: /^M/,
     quote: { $regex: /^.{16,}$/ },
    //  email: { $regex: new RegExp(".*" + "$" + "$last_name" + ".*","i") },
   }).exec();

    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

export const getUsersCarEmail = async (req, res, next) => {
  try {
    const users = await User.find({
      $and: [
        { car: { $in: ["BMW", "Mercedes", "Audi"] } },
        { email: { $not: /\d/ } },
      ],
    }).exec();

    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

export const getTopCitiesUsersIncome = async (req, res, next) => {
  try {
    const users = await User.aggregate([
      {
        $group: {
          _id: "$city",
          count: { $sum: 1 },
          total_income: {
            $sum: { $toDouble: { $substr: ["$income", 1, -1] } },
          },
        },
      },
      {
        $sort: { count: -1 },
      },
      {
        $limit: 10,
      },
      {
        $project: {
          _id: 0,
          city: "$_id",
          count: "$count",
          avg_income: {
            $round: [{ $divide: ["$total_income", "$count"] }, 2],
          },
        },
      },
    ]);

    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};
