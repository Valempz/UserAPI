const mongoose = require("mongoose");

const uri = "mongodb+srv://usuario:contraseña@Dbusers.patoitx.mongodb.net/DbUsers?retryWrites=true&w=majority";

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Se conecto con base de datos"))
  .catch((err) => console.log("Error de conexion con la base de datos", err));

const userSchema = new mongoose.Schema({
  username: { type: String, require: true },
  email: { type: String, require: true },
  password: { type: String, require: true },
}); 

module.exports = mongoose.model("Users", userSchema);
