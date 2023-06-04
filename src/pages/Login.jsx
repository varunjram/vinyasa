import React, { useContext, useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Password } from "primereact/password";
import axios from "axios";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { LOGIN } from "../reducers/userReducer";
import { useNavigate, useLocation } from "react-router-dom";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const {
    userState: { isLoggedIn },
    userDispatch,
  } = useContext(UserContext);
  const [form, setForm] = useState({ email: "", password: "" });

  isLoggedIn && navigate(location?.state?.from ?? "/");

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data, status } = await axios.post("/api/auth/login", form, {
        headers: { "Content-Type": "application/json" },
      });

      if (status === 200) {
        localStorage.setItem("userToken", JSON.stringify(data?.encodedToken));
        localStorage.setItem("foundUser", JSON.stringify(data?.foundUser));
        userDispatch({
          type: LOGIN,
          payload: {
            user: data.foundUser,
            isLoggedIn: true,
            cart: data.foundUser.cart,
            wishlist: data.foundUser.wishlist,
          },
        });
        navigate(location?.state?.from ?? "/products");
      }
    } catch (error) {}
  };

  const setFormField = (field, e) => setForm({ ...form, [field]: e.target.value });
  return (
    <div className="flex w-full min-h-screen align-items-center justify-content-center">
      <div className="surface-card p-4 shadow-2 border-round w-full md:w-6">
        <div className="text-center mb-5">
          <img
            src="assets/images/logo/logo-small.jpg"
            alt="hyper"
            height={50}
            className="mb-3"
          />
          <div className="text-900 text-3xl font-medium mb-3">Welcome Back</div>
          <span className="text-600 font-medium line-height-3">Don't have an account?</span>

          <Link
            to="/signup"
            className="font-medium no-underline ml-2 text-blue-500 cursor-pointer">
            Create today!
          </Link>
        </div>

        <form onSubmit={submitHandler}>
          <label
            htmlFor="email"
            className="block text-900  mb-2">
            Email
          </label>
          <InputText
            value={form.email}
            id="email"
            type="text"
            onChange={(e) => setFormField("email", e)}
            placeholder="Email address"
            className="w-full mb-3"
            required
          />

          <div className="">
            <label
              htmlFor="password"
              className={`block text-900  mb-2`}>
              Password
            </label>

            <Password
              id="password"
              name="password"
              value={form.password}
              onChange={(e) => setFormField("password", e)}
              toggleMask
              feedback={false}
              className={` w-full`}
              inputStyle={{ width: "100%" }}
            />
          </div>

          <Button
            type="submit"
            label="Sign In"
            icon="pi pi-user"
            className="w-full mt-5"
          />
          <Button
            type="submit"
            label="Guest Sign In"
            icon="pi pi-user"
            className="w-full mt-1 p-button-secondary"
            onClick={() => {
              setForm({ email: "adarshbalika@gmail.com", password: "adarshbalika" });
            }}
          />
        </form>
      </div>
    </div>
  );
};

export default Login;
