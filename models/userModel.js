const mongoose = require("mongoose");

const uri = "mongodb+srv://valempz:dyoMwPmqZ3kddUEM@Dbusers.patoitx.mongodb.net/DbUsers?retryWrites=true&w=majority";

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("Se conecto con base de datos"))
.catch(err => console.log("Error de conexion con la base de datos", err));

const userSchema = new mongoose.Schema({

    username: {type:String, required:true},
    email: {type:String, required:true},
    password: {type:String, required:true},
    picture: {type:String},
    role: {type:String, default:"user"}
});

module.exports = mongoose.model('Usuarios', userSchema);
