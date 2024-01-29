import mongoose from 'mongoose'

const connectToDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(process.env.MONGODB_URL)
        console.log(`\n MongoDB connected at DB HOST : ${connectionInstance.connection.host}` )
    } catch (error) {
        console.log("MongoDB connection error in connection file ",error)
        process.exit(1)
    }
}


export default connectToDB;