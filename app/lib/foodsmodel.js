import mongoose from 'mongoose'
const foodSchema = new mongoose.Schema({
    name:String,
    price:String,
    path: String,
    description:String,
    restro_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"restaurants"
    }
})
export default mongoose.models.food || mongoose.model("food",foodSchema)