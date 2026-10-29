import Car from "../models/Car.js"

const createCar = async (data) => {
    const { modelo, marca, ano, preco, placa } = data

    const car = await Car.create({
        modelo,
        marca,
        ano,
        preco,
        placa
    })

    return {
        _id: car._id,
        modelo: car.modelo,
        marca: car.marca,
        ano: car.ano,
        preco: car.preco,
        placa: car.placa,
        createAt: car.createdAt,
        updateAt: car.updatedAt
    }
}

const getAllCars = async () => {
    return Car.find()
}

const getCarById = async (id) => {
    const car = await Car.findById(id);

    if (!car) {
        const error = new Error("Carro não encontrado")
        error.statusCode = 404
        throw error
    }

    return car
}

const getCarByPlate = async (placa) => {
    const car = await Car.find({ placa });

    if (!car) {
        const error = new Error("Carro não encontrado")
        error.statusCode = 404
        throw error
    }

    return car
}

const getCarByBrand = async (marca) => {
    const car = await Car.find({ marca });

    if (!car) {
        const error = new Error("Carro não encontrado")
        error.statusCode = 404
        throw error
    }

    return car
}

const countAvailableCars = async () => {
    return Car.countDocuments()
}

const getAvailableCars = async () => {
    return await Car.find({
        disponivel: true
    })
}

const getCarsByPriceRange = async (min, max) => {
        return await Car.find({
    preco: { $gte: Number (min), $lte: Number (max)  }

    })
}

const updateCar = async (id, data) => {
    const updateCar = await Car.findByIdAndUpdate(id, data,
        { new: true, runValidators: true})

        if(!updateCar) {
            const error = new Error("Carro não encontrado para atualização")
            error.statusCode = 404
            throw error
        }

        return updateCar
}

const updateCarAvailability = async (id, disponivel) => {
    const updateCar = await Car.findByIdAndUpdate(
        id,
        {disponivel},
        {new: true, runValidators: true}
    )

    if(!updateCar) {
        const error = new Error("Carro não encontrado")
        error.statusCode = 404
        throw error
    }

    return updateCar
}


export default {
    createCar,
    getAllCars,
    getCarById,
    getCarByPlate,
    getCarByBrand,
    countAvailableCars,
    getAvailableCars,
    getCarsByPriceRange,
    updateCar,
    updateCarAvailability,
}
