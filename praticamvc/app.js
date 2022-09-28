const express = require("express");
let app = express();
const path = require("path");

/* app.get("/", (req, res)=>res.send("Olá mundo !")); */

const routerHome = require("./routes/home");
const routerAbout = require("./routes/about");

app.use("/", routerHome);
app.use("/about", routerAbout);

app.use(express.static(path.join(__dirname, '/public/'))); /* pasta localizada assets (imagens, icons...) */
app.listen(3000, () => console.log("Servidor rodando na porta 3000"))















