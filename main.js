const express = require("express");

//Metodos y clases de express, se guardan en la variable app
const app = express();
//Creacion de Puerto
const port = 3000;

const apiRoute = "/api/users";

//Importar la clase UserRoutes
const userRoutes = require("./routes/userRoutes");

app.use(express.json());
app.use(apiRoute, userRoutes);

//Ruta para acceder a la informacion
app.use("/api/users", userRoutes);

app.listen(port, () => {
  console.log("El servidor se ejecuta http://localhost:" + port);
});
