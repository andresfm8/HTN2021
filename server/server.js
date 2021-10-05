const express = require("express");
const app = express();
const session = require("express-session");
const mongoose = require("mongoose");
const request = require("request");
const cors = require("cors");
const fs = require("fs");
const passport = require("passport");
const { setSpotifyAuth } = require("./server/services/auth/spotify-service");
require("dotenv").config();

mongoose.connect(process.env.CONNECTION_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("connected to DB");
});

app.use(cors());
app.use(express.json());

const api = require("./server/routes/api/main");

app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (obj, done) {
  done(null, obj);
});

setSpotifyAuth();

app.use("/", api);

app.listen(4000, () => {
  console.log("Listening on 4000");
});

module.exports = db;