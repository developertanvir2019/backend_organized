import app from "./app";

const mongoose = require('mongoose');
const port = 5000;
// connect db
async function bootstrap() {
    try {
        await mongoose.connect('mongodb://localhost:27017/practice1');
        console.log('db connect success');
        app.listen(port, () => {
            console.log(`server is running on ${port}`);
        })
    } catch (error) {
        console.log('db connect error', error);
    }
}


bootstrap()