import mongoose from 'mongoose';
import {DB_NAME} from "../constants.js"

const connectDB = async () => {
    try {
        const conncetionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB connected !! DB HOST : ${
            conncetionInstance.connection.host
        }`)
    } catch (error) {
        console.log("MONGODB connection error", error);
        process.exit(1) //node js command to immediately terminate the entire application
    }
}
export default connectDB

//try / catch is standard error handling in js