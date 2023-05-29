const bcrypt = require("bcryptjs");
//Autenticar el Usuario
const userModel = require("../models/userModel");
exports.authenticateUser = (req, res) => {
  const { email, password } = req.body;
  userModel.findOne({ email }).then((user) => {
    if (!user) {
        //Sino se encuentra el usuario se devuelve un mensaje de error
      return res.status(404).json({ error: "User not found" });
    }
    bcrypt.compare(password, user.password, function (err, result) {
      if (err) {
        res.status(500).json({ error: err.message });
      } else if (result) {
        //si la contraseña coincide el usuario se autentica exitosamente 
        res.status(200).json({ message: "Authentication was successful" });
      } else {
        //Si la contraseña no coincide se devuelve un mensaje de error.
        res.status(401).json({ error: "authentification failed" });
      }
    });
  })
.catch((err)=> res.status(500).json({ error: err.message }))
};

