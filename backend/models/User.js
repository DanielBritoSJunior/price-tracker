const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true, // O email é obrigatório
        trim: true, // Remove leading and trailing whitespace
    },
    email: {
        type: String,
        required: true,
        unique: true, // Somente um cadastro por email
        trim: true,
        lowercase: true, // Converte o email para minúsculas
    },
    password: {
        type: String,
        required: true, // Senha é obrigatória
    },
    notifications: {
        enable: { type: Boolean, default: true }, // Notificações ativadas por padrão
        priceDrop: { type: Boolean, default: true }, // Notificação de queda de preço ativada por padrão
        priceIncrease: { type: Boolean, default: false }, // Notificação de aumento de preço desativada por padrão
    } 
}, {
    timestamps: true,
})

module.exports = mongoose.model('User', userSchema)

