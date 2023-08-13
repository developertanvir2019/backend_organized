import express, { Application } from "express"
import cors from "cors";


const app: Application = express();
import userRoute from './app/modules/user/user.route'



app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extends: true }))

app.get('/api/v1/user', userRoute)

export default app;