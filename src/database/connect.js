const mongoose = require("mongoose");
require("dotenv").config();

async function connectToDatabase() {
  try {
    await mongoose.connect(
      `mongodb+srv://admin:${process.env.MONGODB_PASSWORD}@cursonodejsdicasparades.iqzonek.mongodb.net/database?retryWrites=true&w=majority&appName=CursoNodeJsDicasparadesv`
    );
    console.log("✅Conexão ao banco de dados realizada com sucesso!✅");
  } catch (error) {
    console.error("❌ Ocorreu um erro ao conectar com o banco de dados!❌  Erro: ", error);
  }
}

module.exports = { connectToDatabase };
