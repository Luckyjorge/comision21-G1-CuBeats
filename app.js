const express= require("express");
const app= express();
const path= require("path");
const PORT= 3030;

app.use(express.static("public"));

/* RUTAS */

app.get("/", (req, res) => res.sendFile(path.join(__dirname, "views", "index.html")));
app.get("/shoppingCart", (req, res) => res.sendFile(path.join(__dirname, "views", "shoppingCart.html")));
app.get("/login", (req, res) => res.sendFile(path.join(__dirname, "views", "login.html")));
app.get("/product", (req, res) => res.sendFile(path.join(__dirname, "views", "product.html")));
app.get("/register", (req, res) => res.sendFile(path.join(__dirname, "views", "register.html")));
app.get("/header", (req, res) => res.sendFile(path.join(__dirname, "views","partials", "header.html")));
app.get("/footer", (req, res) => res.sendFile(path.join(__dirname, "views", "partials", "footer.html")));
app.get("/*", (req, res) => res.sendFile(path.join(__dirname, "views", "404.html")));


app.listen(PORT, () => console.log("Server running in http://localhost:" + PORT));
