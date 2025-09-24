const mongoose = require("mongoose");

// Definindo o Schema do usuário
const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
    type: String,
    required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 7,
    },
});

// Criando o model
const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;
