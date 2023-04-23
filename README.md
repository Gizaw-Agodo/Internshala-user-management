## User Data Analysis
This project provides an analysis of user data retrieved from a MongoDB database. It includes several queries to extract data and a React frontend to display the results.

# Features
* Retrieves user data from a MongoDB database
* Performs data analysis on the retrieved data using queries
* Displays query results on a React frontend

# Technologies
* Node.js
* Express.js
* MongoDB
* React
* Tailwind CSS

# Installation
1. Clone the repository to your local machine. Navigate to the rootdirectory of the project and run `npm install` to install the necessary dependencies.
2. Set up a MongoDB database and update the `MONGO_URL` environment variable in the `.env` file with the appropriate connection string.
3. Run `npm start` to start the Node.js server.
4. Navigate to the client directory and run `npm install` to install the necessary dependencies.
5. Run `npm run dev` to start the React frontend.

# Usage
The following queries are available to extract data:

1. Users which have income lower than $5 USD and have a car of brand “BMW” or “Mercedes”.
2. Male Users which have phone price greater than 10,000.
3. Users whose last name starts with “M” and has a quote character length greater than 15 and email includes his/her last name.
4. Users which have a car of brand “BMW”, “Mercedes” or “Audi” and whose email does not include any digit.
5. Show the data of top 10 cities which have the highest number of users and their average income.

To use these queries, navigate to the React frontend and select a query from the dropdown menu. The results will be displayed in a table format.

# Credits
This project was created by  Gizaw Agodo.
