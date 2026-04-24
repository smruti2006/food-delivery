import { NextResponse } from "next/server";
import connectDB from "../../../lib/db";
import bcrypt from 'bcrypt'
import restaurantmodel from "../../../lib/restaurantmodel";
export async function POST(req){
    connectDB()
    const {email,password} =await req.json();
    const user =  await restaurantmodel.findOne({email});
    if(!user){
        return NextResponse.json({message:"User doesnot exist"},{status:404})
    }else{
        const isMatch = bcrypt.compare(user.password,password);
        if(isMatch){
            return NextResponse.json({message:"Login Successful",user},{status:200});
        }else{
            return NextResponse.json({message:"Re-Check Email Or Password"},{status:400});
        }
    }
}