const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// ROTA DE CADASTRO (POST /api/auth/register)
router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // 1. Validar se o usuário já existe
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "Este e-mail já está cadastrado." });
    }

    // 2. Criptografar a senha (Bcrypt)
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // 3. Criar e salvar o usuário no banco
    const newUser = new User({
      name,
      email,
      password: hashedPassword, // Salva a senha embaralhada
    });

    await newUser.save();

    res.status(201).json({ message: "Usuário cadastrado com sucesso!" });
  } catch (error) {
    console.error("Erro no registro:", error);
    res.status(500).json({ message: "Erro no servidor ao registrar usuário." });
  }
});

// ROTA DE LOGIN (POST /api/auth/login)
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1. Verificar se o e-mail existe no banco de dados
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "E-mail ou senha incorretos." });
    }

    // 2. Comparar a senha digitada com a senha criptografada do banco
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "E-mail ou senha incorretos." });
    }

    // 3. Criar o Token JWT (Chave de Acesso)
    // Usamos o ID do usuário como carga (payload) e definimos que o token expira em 1 dia
    const token = jwt.sign(
      { id: user._id }, 
      process.env.JWT_SECRET || "chave_secreta_provisoria", // Depois vamos colocar isso no seu .env
      { expiresIn: "1d" }
    );

    // 4. Retornar os dados do usuário logado e o Token para o Frontend
    res.json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        notifications: user.notifications
      }
    });

  } catch (error) {
    console.error("Erro no login:", error);
    res.status(500).json({ message: "Erro no servidor ao fazer login." });
  }
});

module.exports = router;