import { NextResponse } from "next/server";
import connectDB from "../../../lib/db";
import foodmodel from "../../../lib/foodsmodel"
export async function POST(req) {
    connectDB();
    const data = await req.json();
    const food = await foodmodel.create(data);
    if(!food)return NextResponse.json({message:"Enter valid Response"});
    else return NextResponse.json({message:"Item Add Successfully"});
}