import { useState } from "react";
import icon from "./icon.png";
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";
import { signinFailure,  signinSuccess } from "../app/user/userSlice";
import { useDispatch } from "react-redux";
//@ts-ignore
function Auth({ type }: { type: "signin" | "signup" }) {
  const navigate = useNavigate();
  // const {error}= useSelector((state)=> state.user); //This line is not important tho
  const dispatch= useDispatch();
  const [formData, setformData] = useState({});

  function handleSubmit(e: any){
    setformData({...formData, [e.target.id]: e.target.value})
    console.log("Form data set!")
  }

  const signuphandlechange = async(e:any)=>{
    e.preventDefault();
    try {
      const response = await axios.post(`http://localhost:3000/user/signup`, formData)
      const data= response.data;
      console.log('Successfully signed in or signed up:', data);
      navigate("/signin");
    }
    catch (error) {
      console.error('Error during sign in/up:', error);
    }
    
  }


  const signinhandlechange = async(e:any)=>{
    e.preventDefault();
    try {
      const response = await axios.post(`http://localhost:3000/user/signin`, formData,{
        withCredentials: true // Ensure cookies are sent and received
      })
      
      const data= response.data;
      dispatch(signinSuccess(data));
      console.log('Successfully signed in:', data);
      navigate('/home')
   }  
    catch (error) {
      dispatch(signinFailure(error));
      console.error('Error during sign in/up:', error);
    }
    
  }

  return (
    <section className="bg-gray-50 pt-0 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 pt-1 mx-auto  md:h-screen lg:py-0">
        <a
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900"
        >
          <img className="w-10 h-10 mr-2" src={icon} alt="logo"></img>
          ShopEasy
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              {type === "signin"
                ? "Sign in to your account"
                : "Create an account"}
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              {type === "signin" ? null : (
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900">
                    Your username
                  </label>
                  <input
                    onChange={handleSubmit}
                    type="username"
                    name="username"
                    id="username"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="name1234"
                  ></input>
                </div>
              )}

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Your email
                </label>
                <input
                  onChange={handleSubmit}
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="name@company.com"
                ></input>
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Password
                </label>
                <input
                  onChange={handleSubmit}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                ></input>
              </div>
              {type === "signin" ? (
                <button
                onClick={signinhandlechange} 
                  type="submit"
                  className="w-full text-black bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Sign in
                </button>
              ) : (
                <button
                  onClick={signuphandlechange} 
                  type="submit"
                  className="w-full text-black bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Sign up
                </button>
              )}

              {type === "signin" ? (
                <p className="text-sm font-light text-gray-500">
                  Dont have an account yet?{" "}
                  <Link
                    to="/signup"
                    className="font-medium text-black hover:underline "
                  >
                    Sign up
                  </Link>
                </p>
              ) : (
                <p className="text-sm font-light text-gray-500">
                  Already have an account?{" "}
                  <Link
                    to="/signin"
                    className="font-medium text-black hover:underline "
                  >
                    Sign in
                  </Link>
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Auth;
