import express from "express"
import cors from "cors"
import morgan from "morgan"
import route from "./routes/producto.js";

//Server app intance
const app = express();

//Middleware
app.use(express.json())
app.use(morgan('dev'))
app.use(cors({origin: "*"}))
//Config
app.set('PORT', process.env.PORT || 5000)
//Static files
app.use(express.static('public'))
//Routas
app.use('/api',route)

//On server
app.listen(app.get('PORT'), ()=> console.log('Server running: ', app.get('PORT')));