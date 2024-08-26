import Footer from "../utils/Footer"
import Navbar from "../utils/NavBar"
import Auth from "../utils/auth"

function Signup() {
  return (
    <div>
        <Navbar/>
        <Auth type="signup"/>
        <Footer/>

    </div>
  )
}

export default Signup