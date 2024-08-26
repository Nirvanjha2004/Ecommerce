import Footer from "../utils/Footer"
import Navbar from "../utils/NavBar"
import Auth from "../utils/auth"

function Signin() {
  return (
    <div>
        <Navbar/>
        <Auth type="signin"/>
        <Footer/>

    </div>
  )
}

export default Signin