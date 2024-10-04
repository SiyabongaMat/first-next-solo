import mongoose from "mongoose";

async function connectDatabase ()
{
    try {
        await mongoose.connect(process.env.MONGODB_URL!);
        console.log("Server connected")
    } catch (err) {
        console.log(err)
        
    }
}

export default connectDatabase