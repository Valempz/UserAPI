//Llamar a la libreria
const x = require("express");
// Lo que se va a usar de la libreria
const router = x.Router();
const authController = require("../controllers/authController");
//Importa los controladores
const userController = require("../controllers/userController");

router.get("/", userController.getAllUsers);

router.post("/", userController.createUser);

router.put("/:id", userController.updateUser);

router.delete("/:id", userController.deleteUser);

router.post("/login", authController.authenticateUser);

module.exports = router;
