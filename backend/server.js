const express = require("express")
const cors = require("cors")
require("dotenv").config()

const app = express()
let products = []

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
    res.send("API do PriceTracker rodando")
})

app.post("/products", (req, res) => {
  const product = {
    id: Date.now(),
    ...req.body,
  };

  products.push(product);

  res.status(201).json({
    message: "Produto salvo com sucesso",
    product,
  })
})
app.get("/products", (req, res) => {
    res.json(products);
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})

app.delete("/products/:id", (req, res) => {
  const id = Number(req.params.id);

  const productExists = products.some((product) => product.id === id);

  if (!productExists) {
    return res.status(404).json({
      message: "Produto não encontrado",
    });
  }

  products = products.filter((product) => product.id !== id);

  res.json({
    message: "Produto removido com sucesso",
  });
});