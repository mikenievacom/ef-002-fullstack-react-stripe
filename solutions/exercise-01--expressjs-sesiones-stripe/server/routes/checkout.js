// 1. IMPORTACIONES
const express 		= require("express")
const router		= express.Router()

const checkoutController	= require("./../controllers/checkoutController")

// 2. RUTEO
router.get("/create-checkout-session", checkoutController.createCheckoutSession)

// 3. EXPORTACIÓN
module.exports = router