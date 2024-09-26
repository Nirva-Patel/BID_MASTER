const express = require("express");
const app = express();
const router = require("./router/auth-router");
//const connectDb = require("./utils/db");

app.use(express.json());
app.use("/api/auth", router);

// app.get("/", (req, res) => {
//    res.status(200).send('Welcome');
// });

// app.get("/register", (req, res) => {
//    res.status(200).send("Welcome to BIDMASTER");
// });

const PORT = 5000;

// Starting the server without .catch
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});

// If you need to handle database connection failures, ensure the database connection logic has its own error handling logic.
// Example:
// connectDb().then(() => {
//   app.listen(PORT, () => {
//     console.log(`Server is running on ${PORT}`);
//   });
// }).catch(err => {
//   console.error("Database connection failed:", err);
// });
