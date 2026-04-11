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
    const product = req.body;

    products.push(product);

    console.log("Produto salvo:", product);

    res.status(201).json({
        message: "Produto salvo com sucesso",
        product,
    });
});

app.get("/products", (req, res) => {
    res.json(products);
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})