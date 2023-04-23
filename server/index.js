import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import userRoute from "./routes/user.js";
import insertUsers from "./seed/users.js";
import connect from "./dbConnection/connect.js";
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/users", userRoute);


// error handling
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Sth went wrong";
  return res.status(status).json({
    success: false,
    message,
    status,
  });
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  connect().then(() => {
    insertUsers();
  });
  console.log("App started on port 3000");
});
