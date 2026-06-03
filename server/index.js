import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors'
import csrf from 'csurf';
//Importar las rutas
import pruebaRoutes from './routes/pruebaRoutes.js'





//Iniciamos la app
const app=express()
const port=4000;

//Habilitamos la lectura de formularios
app.use(express.urlencoded({extended:true}))

//Habilitamos las cookies
app.use(cookieParser());

//Habilitamos NextJs
app.use(express.json());
app.use(cors(
    {
        origin:"http://localhost:3000",
        credentials:true
    }
))

//Habilitar CSRF
const csrfProtection = csrf({ cookie: true });
app.use(csrfProtection);


app.listen(port,()=>{
    console.log("El servidor está funcionando en el puerto "+port)
})

