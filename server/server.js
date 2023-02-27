const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const passport = require("passport");
const passportService = require("./services/passport");
const protectedRoute = passport.authenticate("jwt", { session: false });
require("dotenv").config();
const port = process.env.port || 3001;

const { generalStats } = require("./splitgateAPI/matchmaking");

const searchRoutes = require("./routes/searchRoutes");
const friendRoutes = require("./routes/friendRoutes");
const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/authRoutes");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//middleware to handle CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );

  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "POST, PUT, GET, PATCH, DELETE");
  }

  next();
});

app.use("/search", protectedRoute, searchRoutes);
app.use("/friends", protectedRoute, friendRoutes);
app.use("/users", protectedRoute, userRoutes);
app.use("/auth", authRoutes);

app.get("/:platform/:gt", protectedRoute, (req, res, next) => {
  generalStats(req.params.platform, req.params.gt)
    .then((result) => {
      return res.status(200).json(result);
    })
    .catch((err) =>
      res.status(501).json({ message: err.message, status: err.status })
    );
});

//middleware modules
app.use((req, res, next) => {
  const error = new Error("not found");
  error.status = 404;
  next(error);
});
//middleware to send error nicely
app.use((error, req, res, next) => {
  res.status(error.status || 500).json({
    error: {
      message: error.message,
      status: error.status,
      method: req.method,
    },
  });
});

//Connect to mongodb
const DATABASE_URL = process.env.mongoURL;

mongoose.connect(DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Database Connection Established"));

app.listen(port, () => {
  return console.log(`Server is running on port ${port}`);
});
