import express from "express"
import carController from "../controllers/carController.js"

const router = express.Router()

router.post(
    "/",
    carController.createCar
)

router.get(
    "/",
    carController.getAllCars
)

router.get(
    "/:id",
    carController.getCarById
)

router.get(
    "/plate/:plate",
    carController.getCarByPlate
)

router.get(
    "/brand/:brand",
    carController.getCarByBrand
)

router.get(
    "/available/count",
    carController.countAvailableCars
)

router.get(
    "/available/disponivel",
    carController.getAvailableCars
)

router.get(
    "/price/:min/:max",
    carController.getCarsByPriceRange
)

router.put(
    "/:id",
    carController.updateCar
)

router.patch(
    "/:id/availability",
    carController.updateCarAvailability
)

export default router