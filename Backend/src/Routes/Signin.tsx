import { Hono } from "hono";
import { z } from 'zod'
import { user } from "../db/models/userModel";
import mongoose from "mongoose";
import {sign, verify} from 'hono/jwt';
import { setCookie } from "hono/cookie";

const signinUser= z.object({
    email: z.string().email(),
    password: z.string().min(6)
})
export const SigninRouter=new Hono()

SigninRouter.post("/signin",async (c)=>{
    const body = await c.req.json();
    const {success}= signinUser.safeParse(body);
    if(!success){
        c.status(402)
        c.json({
            "message": "Inputs not correct!"
        });
    }

    try {
        const userSigned = await user.findOne({
                email: body.email,
                password: body.password,
        });
        if(!userSigned){
            c.status(402)
            c.json({
                "message": "Inputs not correct!"
            })
        }
        else{
            try {
                const signinToken = await sign(userSigned?.id, String(process.env.KEY))
                setCookie(c, 'test_cookie', signinToken, {
                    secure: false,
                    path: '/',
                    httpOnly: true,
                    maxAge: 1000,
                    sameSite: 'Lax',
                    expires: new Date(Date.UTC(2000, 11, 24, 10, 30, 59, 900)),
                  });
                
                return c.json(userSigned,201);
            } catch (error) {
                console.log(error)
            }
        }
        
    } catch (error) {
        console.log(error);
        c.status(401);
        c.json({
            "message": "Something Went Wrong! May be not able to save data in DB!"
        });
    }
})
