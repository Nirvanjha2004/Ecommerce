import { Hono } from 'hono'
import { cors } from 'hono/cors'
import dbConnect from './db/connect'
import { SigninRouter } from './Routes/Signin'
import { SignupRouter } from './Routes/Signup'
import { ProfileRouter } from './Routes/Profile'
import { OrderRouter } from './Routes/Orders'
import { SignOutRouter } from './Routes/SignOut'

const app = new Hono()
app.use('*', cors({
  origin: 'http://localhost:5173', // Adjust this to your frontend origin //This helped me to set the cookies 
  credentials: true,
}));


dbConnect().then(()=>{

  app.get('/', (c) => {
    return c.text('Hello Hono!')
  })
  app.route('/user', SigninRouter)
  app.route('/user', SignupRouter)
  app.route('/user', ProfileRouter)
  app.route('/products', OrderRouter)
  app.route('/user', SignOutRouter)
  

            
}).catch((err)=>{
  console.log(err.message)
})

export default app
