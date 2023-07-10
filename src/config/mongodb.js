import mongoose from "mongoose"

const connectMongoDB = async () => {
    try {
        // console.log("mongo connection")
        await mongoose.connect(process.env.mongodb_url)
        console.log("Connected to MongoDB")
    } catch (error) {
        console.log(error)
    }
}

export default connectMongoDB