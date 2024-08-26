import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { signOut } from "../app/user/userSlice";
import { useDispatch } from "react-redux";

//@ts-ignore
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

//Always use react hooks inside the react component
// Declare the button onclick functions inside the react component

export default function Example() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    async function handleSignOut(e: any) {
    
    e.preventDefault();
    const response = await axios.get("http://localhost:3000/user/signout", {
      withCredentials: true,
    });
    dispatch(signOut());
    console.log("User Signed Out", response);
    navigate("/signup");
  }
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          User
          <ChevronDownIcon
            className="-mr-1 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </MenuButton>
      </div>

      <Transition
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <MenuItems className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <MenuItem>
              {({ focus }) => (
                <Link
                  to="/support"
                  className={classNames(
                    focus ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Support
                </Link>
              )}
            </MenuItem>
            <MenuItem>
              {({ focus }) => (
                <Link
                  to="/order"
                  className={classNames(
                    focus ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Orders
                </Link>
              )}
            </MenuItem>
            <form method="POST" action="#">
              <MenuItem>
                {({ focus }) => (
                  <button
                    onClick={handleSignOut}
                    type="submit"
                    className={classNames(
                      focus ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block w-full px-4 py-2 text-left text-sm"
                    )}
                  >
                    Sign out
                  </button>
                )}
              </MenuItem>
            </form>
          </div>
        </MenuItems>
      </Transition>
    </Menu>
  );
}
