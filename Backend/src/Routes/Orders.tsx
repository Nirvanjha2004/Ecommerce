import { Hono } from "hono";

export const OrderRouter = new Hono();

OrderRouter.get('/orders',async (c)=>{
    //Write the logic to collect and show all the routers
    const body = await c.req.json();
    console.log("Here all your selected orders will appear!")
})