import {NextResponse} from "next/server"
import connectDB from "../../lib/db";
import restaurantmodel from "../../lib/restaurantmodel";
import bcrypt from 'bcrypt';

export async function GET(){
    await connectDB();
    const restaurant = await restaurantmodel.find();
    return NextResponse.json(restaurant);
}
export async function POST(req){
    await connectDB();
    const body = await req.json();
    const {email,password,c_password,rname,city,address,contact}=body;
    const existUser = await restaurantmodel.findOne({email});
    if(existUser){
        return NextResponse.json({
            message:"User already exist",
        },{status:400})
    }
    else{
        if(password===c_password){
            const hashpassword = await bcrypt.hash(password,10);
            const restaurant = await restaurantmodel.create({email,password:hashpassword,rname,city,address,contact})
            return NextResponse.json({message:"User created successfully"},{status:200})
        }
        else{
            return NextResponse.json({message:"Password and Confirm password doesnot match"},{staus:400})
        }
    }
}