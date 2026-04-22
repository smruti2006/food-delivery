import mongoose from "mongoose";
const restaurantScema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    rname:{
        type:String,
        required:true,
    },
    city:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        required:true,
    },
    contact:{
        type:Number,
        required:true,
    }
})
export default mongoose.models.restaurant || mongoose.model("restaurant",restaurantScema);