
import { Hono } from "hono";
import { z } from 'zod'
import { user } from "../db/models/userModel";
import mongoose from "mongoose";
import {sign} from 'hono/jwt';

const signupUser= z.object({
    username:  z.string().min(3),
    email: z.string().email(),
    password: z.string().min(6)
})
export const SignupRouter=new Hono()

SignupRouter.post("/signup",async (c)=>{
    const body = await c.req.json();
    const {success}= signupUser.safeParse(body);
    if(!success){
        c.status(402)
        c.json({
            "message": "Inputs not correct!"
        });
    }

    try {
        const userCreated = await new user({
            username: body.username,
            email: body.email,
            password: body.password
        });
        try {
            await userCreated.save();
            const signupToken = await sign(userCreated.id, String(process.env.KEY))
            return c.json({"Message": "User Created Successfully" }, 201)
        } catch (error) {
            console.log(error)
        }
    } catch (error) {
        console.log(error);
        c.status(401);
        c.json({
            "message": "Something Went Wrong! May be not able to save data in DB!"
        });
    }
})

