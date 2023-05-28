import React, {useState} from "react";
import {InputText} from "primereact/inputtext";
import {Button} from "primereact/button";
import {Password} from "primereact/password";
import axios from "axios";

import {Link} from "react-router-dom";

const Signup = () => {
  const [form, setForm] = useState({email: "", password: ""});

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "/api/auth/login",
        {email: "adarshbalika@gmail.com", password: "adarshbalika"},
        {
          headers: {"Content-Type": "application/json"},
        }
      );
      console.log("response: ", response);
    } catch (error) {
      console.log("error: ", error);
      console.log("response:-3");
    }
  };

  const setFormField = (field, e) => setForm({...form, [field]: e.target.value});
  return (
    <div className="flex w-full h-screen">
      {/* <pre>{JSON.stringify(form, null, 2)}</pre> */}
      <div className="flex align-items-center justify-content-center flex-grow-1 ">
        <div className="surface-card p-4 shadow-2 border-round w-full lg:w-6">
          <div className="text-center mb-5">
            <img src="assets/images/logo/logo-small.jpg" alt="hyper" height={50} className="mb-3" />
            <div className="text-900 text-3xl font-medium mb-3">Register Now!</div>
            <span className="text-600 font-medium line-height-3">Do you have an account?</span>

            <Link
              to="/login"
              className="font-medium no-underline ml-2 text-blue-500 cursor-pointer">
              Login here!
            </Link>
          </div>

          <form onSubmit={submitHandler}>
            <label htmlFor="email" className="block text-900  mb-2">
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
              <label htmlFor="password" className={`block text-900  mb-2`}>
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
                inputStyle={{width: "100%"}}
              />
            </div>

            {/* <div className="flex align-items-center justify-content-between mb-6">
              <div className="flex align-items-center">
                <Checkbox
                  id="rememberme"
                  onChange={(e) => setChecked(e.checked)}
                  checked={checked}
                  className="mr-2"
                />
                <label htmlFor="rememberme">Remember me</label>
              </div>
              <a className="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer">
                Forgot your password?
              </a>
            </div> */}

            <Button type="submit" label="Sign In" icon="pi pi-user" className="w-full mt-5" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;