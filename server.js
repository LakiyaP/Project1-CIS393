const express = require("express");
const session = require("express-session");
const path = require("path");

const app = express();
const recordsRouter = require("./routes/records");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.use(session({
   secret: "opstrack-secret-key",
   resave: false,
   saveUninitialized: false
}));

function requireLogin(req, res, next) {
   if (req.session.loggedIn) {
      next();
   } else {
      res.redirect("/");
   }
}

app.get("/", (req, res) => {
   res.render("login", { error: null });
});

app.post("/login", (req, res) => {
   const { username, password } = req.body;

   if (username === "admin" && password === "1234") {
      req.session.loggedIn = true;
      req.session.username = username;
      res.redirect("/dashboard");
   } else {
      res.render("login", { error: "Invalid username or password." });
   }
});

app.get("/logout", (req, res) => {
   req.session.destroy(() => {
      res.redirect("/");
   });
});

app.use("/", requireLogin, recordsRouter);

app.listen(3000, () => {
   console.log("OpsTrack running at http://localhost:3000");
});
