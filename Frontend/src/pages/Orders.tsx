import AllOrders from "../utils/AllOrders"
import Footer from "../utils/Footer"
import Navbar from "../utils/NavBar"




function Orders() {
  return (
    <div className="flex flex-col gap-4">

        <div>
            <Navbar/>
        </div>
        <div>
            <AllOrders/>
        </div>
            <Footer/>

    </div>
  )
}

export default Orders