const express = require("express");
const app = express();
const exphbs = require("express-handlebars");

const PORT = process.env.PORT || 3000;

// Configurar Handlebars como motor de plantillas
app.engine(
  "handlebars",
  exphbs.engine({
    layoutsDir: __dirname + "/views",
    partialsDir: __dirname + "/views/componentes/"
  })
);
app.set("view engine", "handlebars");

// Middleware que disponibiliza Bootstrap
app.use("/css", express.static(__dirname + "/node_modules/bootstrap/dist/css"));

// Middleware que disponibiliza JQuery
app.use("/jquery", express.static(__dirname + "/node_modules/jquery/dist"));

// Configuración del body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("Dashboard", {
    layout: "Dashboard"
  });
});

app.use(express.static("img"));
app.use(express.static("css"));


app.listen(PORT, () => {
  console.log(`El servidor está inicializado en el puerto ${PORT}`);
});
