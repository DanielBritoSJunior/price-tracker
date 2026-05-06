const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const Product = require("./models/Product") 
require("dotenv").config()
const authRoutes = require("./routes/auth");

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/auth", authRoutes);

const MONGODB_URI = process.env.MONGODB_URI

if (!MONGODB_URI) {
  console.error("❌ ERRO: A variável MONGODB_URI não foi definida no seu arquivo .env")
  process.exit(1)
}

// Forçando a conexão limpa
mongoose.connect(MONGODB_URI)
  .then(() => console.log("✅ Conectado com sucesso ao MongoDB Atlas!"))
  .catch((err) => console.error("❌ Erro ao conectar ao MongoDB:", err))

// --- ROTAS ---

app.get("/", (req, res) => {
    res.send("API do PriceTracker rodando e conectada ao banco")
})

// Listar todos os produtos
app.get("/products", async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 })
    
    // LOG CRUCIAL: Verifique no terminal o que o banco está retornando
    console.log(`➡️ GET /products chamado. Itens encontrados no banco: ${products.length}`)
    
    res.json(products)
  } catch (error) {
    console.error("Erro no GET /products:", error)
    res.status(500).json({ message: "Erro ao buscar produtos", error: error.message })
  }
})

// Criar um novo produto
app.post("/products", async (req, res) => {
  try {
    const { url, name, price, store, category, imageUrl } = req.body

    // Validação extra caso o preço chegue quebrado do formulário
    const parsedPrice = price === "" ? 0 : Number(price);

    const newProduct = new Product({
      url,
      name,
      price: parsedPrice,
      store: store || undefined, // Deixa o default do Schema agir se for vazio
      category: category || undefined,
      imageUrl,
      change: 0
    })

    const savedProduct = await newProduct.save()
    
    // LOG CRUCIAL: Confirmação de escrita no banco
    console.log(`💾 Produto gravado no Atlas com sucesso! ID: ${savedProduct._id} | Nome: ${savedProduct.name}`)

    res.status(201).json({
      message: "Produto salvo com sucesso",
      product: savedProduct,
    })
  } catch (error) {
    console.error("❌ Erro no POST /products:", error.message)
    res.status(400).json({ message: "Erro ao cadastrar produto", error: error.message })
  }
})

// Deletar um produto
app.delete("/products/:id", async (req, res) => {
  try {
    const { id } = req.params
    console.log(`🗑️ Tentando deletar o ID: ${id}`)

    const deletedProduct = await Product.findByIdAndDelete(id)

    if (!deletedProduct) {
      return res.status(404).json({ message: "Produto não encontrado" })
    }

    res.json({ message: "Produto removido com sucesso" })
  } catch (error) {
    console.error("Erro no DELETE:", error)
    res.status(500).json({ message: "Erro ao remover produto", error: error.message })
  }
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando na porta ${PORT}`)
})