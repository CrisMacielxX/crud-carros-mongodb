import Sale from "../models/Sale.js"
import User from "../models/User.js"
import Car from "../models/Car.js"

const creatSale = async (data) => {
    const { userId, carId, valorVenda, formaPagamento } = data

    if (!userId || !carId || !formaPagamento) {
        const error = new Error("Informe todos os dados")
        error.statusCode = 400
        throw error
    }

    const user = await User.findById(userId)

    if (!user) {
        const error = new Error("Id de usuario invalido")
    error.statusCode = 400
    throw error
}

const car = await Car.findById(carId)

if (!car) {
    const error = new Error("Id de carro invalido")
    error.statusCode = 400
    throw error
}

if (car.disponivel === false) {
    const error = new Error("Carro indisponivel")
    error.statusCode = 400
    throw error
}

if (valorVenda <= 0) {
    const error = new Error("O valor da venda deve ser maior que 0")
    error.statusCode = 400
    throw error
}

const venda = await Sale.create({
    userId,
    carId,
    valorVenda,
    formaPagamento,
})

car.disponivel = false
await car.save()

return venda
}

const getAllSales = async () => {
    return Sale.find()
    .populate("userId", "nome email")
    .populate("carId"
    )
}


export default {
    creatSale,
    getAllSales,
}


