import { Hono } from "hono";
import { deleteCookie } from "hono/cookie";


export const SignOutRouter= new Hono();

SignOutRouter.get('/signout', async (c)=>{
    try {
        console.log("command reached here");
        deleteCookie(c, 'test_cookie', { path: '/' ,
            secure: false,
        });
        return c.json({"Message":"Logged Out Successfully!"},201);    
    } catch (error) {
        c.json({"Message": "You are not logged In!"});
    }
})