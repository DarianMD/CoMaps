import mongoose from "mongoose";

export const DBconnect = async () => {


    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/comapsdb")
        console.log("DB connected")

    } catch (error) {
        console.log(error)
    }
}