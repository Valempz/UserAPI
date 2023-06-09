const express = require("express");
const  cors = require ("cors");

//Metodos y clases de express, se guardan en la variable app
const app = express();
//Creacion de Puerto
const port = 3000;

const apiRoute = "/api/users";

//Importar la clase UserRoutes
const userRoutes = require("./routes/userRoutes");
app.use(cors({

    // origin: "http://localhost:4200",
    origin: "*"

  })),
app.use(express.json());
app.use(apiRoute, userRoutes);

//Ruta para acceder a la informacion
app.use("/users", userRoutes);

app.listen(port, () => {
  console.log("El servidor se ejecuta http://localhost:" + port)
});

