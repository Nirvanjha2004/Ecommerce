import { Hono } from "hono";
import { z } from 'zod'
import { user } from "../db/models/userModel";
import {verify} from 'hono/jwt';

import { getCookie } from "hono/cookie";






const profileUser= z.object({
    username:  z.string().min(3),
    email: z.string().email(),
    password: z.string().min(6)
})
export const ProfileRouter=new Hono()

ProfileRouter.use("/*", async (c, next) => {
    const token = getCookie(c, "test_cookie")|| "";
    try {
        const user = await verify(token, "mynameisnirvanjha");
        if (user) {
            //@ts-ignore
            c.set("userId", user.id); //This line sets the userID to the context c
            await next();
        } else {
            c.status(403);
            return c.json({
                message: "You are not logged in"
            })
        }
    } catch(e) {
        c.status(403);
        return c.json({
            message: "You are not logged in"
        })
    }
});
ProfileRouter.post("/update",async (c)=>{
    const authHeader=  c.req.header("authorization")||"";
    const body = await c.req.json();
    const {success}= profileUser.safeParse(body);
    if(!success){
        c.status(402)
        c.json({
            "message": "Inputs not correct!"
        });
    }
    
    try {
        const verifiedpayload= await verify(authHeader, String(process.env.KEY));
        console.log(verifiedpayload); 
        const userUpdate = await user.findOneAndUpdate({  //this function findOneAndUpdate will return you with all the username, password and email which updateOne doesnt provide
            $set: {
            username: body.username,
            email: body.email,
            password: body.password
        }})
        return c.json(userUpdate, 201);
    } catch (error) {
        console.log(error);
        c.status(401);
        return c.json({
            "message": "Something Went Wrong! May be not able to save data in DB!"
        });
    }
})

