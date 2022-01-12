// 1. IMPORTACIONES
const stripe = require("stripe")(process.env.STRIPE_KEY)

// 2. CONTROLADORES
// A. STRIPE CHECKOUT
exports.createCheckoutSession = async (req, res) => {

	// CREACIÓN DE UNA SESIÓN
	const session = await stripe.checkout.sessions.create(
		{
			line_items: [
				{
					price: "price_1KGsqeAJb2NCGfjckxktJAij",
					quantity: 1
				}
			],
			mode: "payment",
			success_url: `http://localhost:3005/?success=true`,
			cancel_url: `http://localhost:3005/?canceled=true`
		}
	)

	// RETORNO DE LA SESIÓN AL CLIENTE
	res.json({
		session_url: session.url,
		session
	})

}