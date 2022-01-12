// 1. IMPORTACIONES
const express 			= require("express")
const app				= express()
const cors				= require("cors")

require("dotenv").config()

// 2. MIDDLEWARES
app.use(cors())


// 3. RUTAS
app.use("/api/checkout", require("./routes/checkout"))


// 4. SERVIDOR
const PORT = process.env.PORT
app.listen(PORT, () => console.log(`Servidor activo en ${PORT}`))