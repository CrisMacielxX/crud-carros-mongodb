import saleService from "../services/saleService.js"

const creatSale = async (req, res, next) => {
    try {
        const venda = await saleService.creatSale(req.body)

        res.status(201).json({
            messagr: "Venda criada com sucesso",
            data: venda
        })

    } catch (error) {
        next(error)
    }
}

const getAllSales = async (req, res, next) => {
    try {
        const venda = await saleService.getAllSales()

        res.status(201).json({
            messagr: "Vendas encontradas com sucesso",
            data: venda
        })

    } catch (error) {
        next(error)
    }
}

export default {
    creatSale,
    getAllSales,
}