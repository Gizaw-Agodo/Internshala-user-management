import React, { useEffect } from "react";
import {
  getCarBrandEmailNoDigit,
  getHighPricedMaleUsers,
  getTopTenCities,
  getUsersIncomeCar,
  getlastNameQuoteEmail,
} from "../api";

function QuerySelector({ setData, setDataType }) {
  useEffect(() => {
    const fetch = async () => {
      const data = await getUsersIncomeCar();
      setData(data);
      setDataType("user");
    };
    fetch()
  }, []);

  const handleQueryChange = async (event) => {
    const query = event.target.value;

    if (query === "incomeAndCarBrand") {
      const data = await getUsersIncomeCar();
      setData(data);
      setDataType("user");
    } else if (query === "highPricedMaleUsers") {
      const data = await getHighPricedMaleUsers();
      setData(data);
      setDataType("user");
    } else if (query === "lastNameQuoteEmail") {
      const data = await getlastNameQuoteEmail();
      setData(data);
      setDataType("user");
    } else if (query === "carBrandEmailNoDigit") {
      const data = await getCarBrandEmailNoDigit();
      setData(data);
      setDataType("user");
    } else if (query === "topTenCities") {
      const data = await getTopTenCities();
      setData(data);
      setDataType("city");
    }
  };

  return (
    <div className="flex flex-row items-center justify-center m-5">
      <label htmlFor="" className="mr-10 font-bold">
        select query filter
      </label>
      <div className="relative inline-flex w-[50%]">
        <select
          onChange={handleQueryChange}
          className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value={"incomeAndCarBrand"}>
            Users which have income lower than $5 USD and have a car of brand
            “BMW” or “Mercedes”.
          </option>
          <option value={"highPricedMaleUsers"}>
            Male Users which have phone price greater than 10,000.
          </option>
          <option value={"lastNameQuoteEmail"}>
            Users whose last name starts with “M” and has a quote character
            length greater than 15 and email includes his/her last name.
          </option>
          <option value={"carBrandEmailNoDigit"}>
            Users which have a car of brand “BMW”, “Mercedes” or “Audi” and
            whose email does not include any digit.
          </option>
          <option value={"topTenCities"}>
            top 10 cities which have the highest number of users and their
            average income.
          </option>
        </select>

        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg className="fill-current h-4 w-4" viewBox="0 0 20 20">
            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
            <path
              fillRule="evenodd"
              d="M18.707 7.293a1 1 0 00-1.414 0L10 14.586 3.707 8.293a1 1 0 10-1.414 1.414l7 7a1 1 0 001.414 0l7-7a1 1 0 000-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default QuerySelector;
