const app=require("./app")// Arrancar el servidor

//Setear el archivo de confirguracion 
const dotenv= require("dotenv");
dotenv.config({path: 'back/config/config.env'})

//Llamemos al server
const server=app.listen(process.env.PORT, () => {
    console.log(`Servidor iniciado en el puerto: ${process.env.PORT} en modo: ${process.env.NODE_ENV}`)
})