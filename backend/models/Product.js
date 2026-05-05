const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
  url: {
    type: String,
    required: [true, 'A URL do produto é obrigatória'],
    trim: true
  },
  name: {
    type: String,
    required: [true, 'O nome do produto é obrigatório'],
    trim: true
  },
  price: {
    type: Number,
    required: [true, 'O preço é obrigatório'],
    min: [0, 'O preço não pode ser negativo']
  },
  store: {
    type: String,
    trim: true,
    default: 'Não informada' // Evita que string vazia quebre ou suma
  },
  category: {
    type: String,
    trim: true,
    default: 'Outros' // Valor padrão caso venha vazio do front
  },
  imageUrl: {
    type: String,
    trim: true,
    default: ''
  },
  change: {
    type: Number,
    default: 0 
  }
}, {
  timestamps: true 
});

ProductSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    // Alerta importante: o _id do Mongo vira o id que seu front espera
    ret.id = ret._id.toString(); 
    delete ret._id; 
  }
});

module.exports = mongoose.model('Product', ProductSchema);