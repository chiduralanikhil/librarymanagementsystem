const mongoose  = require("mongoose")

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log(`server running successfully with mongoose ${mongoose.connection.host}`)
    }catch (error){
        console.log(error)
    }
}

module.exports  = connectDB