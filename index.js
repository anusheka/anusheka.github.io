import mongoose, { mongo } from "mongoose";
import app from "./app.js"

(async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/Cluster0")
        console.log("DB CONNECTED");

        const onListening = () => {
            console.log("LISTENING")
        }

        app.listen(5000, onListening)
    }
    catch(error){
        console.error("error:", error);
        throw error;
    }
})()