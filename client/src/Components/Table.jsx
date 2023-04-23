import React from "react";

function Table({ data, dataType }) {
  const userRows = [
    "User ID",
    " First Name",
    "Last Name",
    "Email",
    "Gender",
    "Quote",
    "Income",
    "Car",
    "Phone-price",
    "City",
  ];
  const cityRows = ["City", "Count", "Average-Income"];
  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead>
        {dataType === "user" ? (
          <tr>
            {userRows.map((row) => (
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                {row}
              </th>
            ))}
          </tr>
        ) : (
          <tr>
            {cityRows.map((row) => (
              <th className="px-6 py-3  text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                {row}
              </th>
            ))}
          </tr>
        )}
      </thead>

      <tbody className="bg-white divide-y divide-gray-200">
        {data.length == 0 ? (
          <tr>
            <td>no data to display</td>
          </tr>
        ) : dataType === "user" ? (
          data.map((row) => (
            <tr key={row._id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {row.id}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {row.first_name}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {row.last_name}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {row.email}
              </td>

              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {row.gender}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {row.quote}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {row.income}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {row.car}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {row.phone_price}
              </td>

              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {row.city}
              </td>
            </tr>
          ))
        ) : (
          data.map((row) => (
            <tr key={row.city}>
              <td className="px-6 py-4  whitespace-wrap text-sm text-gray-500">
                {row.city}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {row.count}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                $ {row.avg_income}
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}

export default Table;
