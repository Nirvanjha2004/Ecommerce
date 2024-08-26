import { useDispatch, useSelector } from "react-redux";
import Footer from "../utils/Footer";
import Navbar from "../utils/NavBar";
import { useState } from "react";
import axios from "axios";
import { updatedData } from "../app/user/userSlice";

function Profile() {
  const dispatch= useDispatch();
  //@ts-ignore
  const {currentUser}= useSelector((state)=>state.user);

  const [updateData, setUpdateData]= useState({});

  const  handleChange= (e:any)=>{
    setUpdateData({...updateData, [e.target.id]: e.target.value});
  }

  const handleUpdate= async (e:any)=>{
    e.preventDefault();
    try {
      console.log(updateData);
      const response= await axios.post('http://localhost:3000/user/update');
      dispatch(updatedData(response));
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <Navbar />
      <section className="bg-white dark:bg-gray-900">
        <div className="max-w-2xl px-4 py-8 mx-auto lg:py-16">
          <h2 className="mb-4 text-xl font-bold text-gray-900">Update </h2>
          <form action="#">
            <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
              <div className="w-full">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Username
                </label>
                <input
                  onChange={handleChange}
                  type="text"
                  name="brand"
                  id="brand"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  defaultValue={currentUser.username}
                  placeholder="Product brand"
                />
              </div>
              <div className="w-full">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Password
                </label>
                <input
                  onChange={handleChange}
                  type="string"
                  name="price"
                  id="price"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  defaultValue={currentUser.password}
                  placeholder="$299"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Email
                </label>
                <input
                  onChange={handleChange}
                  type="string"
                  name="item-weight"
                  id="item-weight"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  defaultValue={currentUser.email}
                  placeholder="Ex. 12"
                />
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button
              onClick={handleUpdate}
                type="submit"
                className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Profile;
