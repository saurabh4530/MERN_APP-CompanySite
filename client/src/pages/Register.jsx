//@ts-nocheck
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleInput = (e) => {
    let { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   console.log(user);
  //   try {
  //     const response = await axios.post(
  //       "http://localhost:5000/api/auth/register",
  //       user,
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     );

  //     if (response.status === 200) { // Check for status code instead of response.data.ok
  //       setUser({
  //         username: "",
  //         email: "",
  //         phone: "",
  //         password: "",
  //       });
  //       navigate("/login");
  //     }

  //     console.log(response.data);
  //   } catch (error) {
  //     console.error("Error during registration:", error);
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      if (response.ok) {
        const res_data = await response.json();
        console.log("res from server", res_data);
        //store token to local host

        storetokenInLS(res_data.token);

        setUser({
          username: "",
          email: "",
          phone: "",
          password: "",
        });
        navigate("/login");
      }

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="section-contact">
      <main>
        <div className="section-registration container">
          <div className="grid grid-two-cols">
            <div className="registration-image">
              <img
                src="https://static.vecteezy.com/system/resources/previews/003/689/228/non_2x/online-registration-or-sign-up-login-for-account-on-smartphone-app-user-interface-with-secure-password-mobile-application-for-ui-web-banner-access-cartoon-people-illustration-vector.jpg"
                alt="Registration"
                width="500"
                height="500"
              />
            </div>

            <div className="registration-form section-form">
              <h1 className="main-heading mb-3">Registration Form</h1>
              <br />
              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="username">Username: </label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Username"
                    required
                    autoComplete="off"
                    value={user.username}
                    onChange={handleInput}
                  />
                </div>
                <div>
                  <label htmlFor="email">Email: </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    required
                    autoComplete="off"
                    value={user.email}
                    onChange={handleInput}
                  />
                </div>
                <div>
                  <label htmlFor="phone">Phone: </label>
                  <input
                    type="number"
                    name="phone"
                    id="phone"
                    placeholder="Enter your mobile number"
                    required
                    autoComplete="off"
                    value={user.phone}
                    onChange={handleInput}
                  />
                </div>
                <div>
                  <label htmlFor="password">Password: </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter your password"
                    required
                    autoComplete="off"
                    value={user.password}
                    onChange={handleInput}
                  />
                </div>
                <br />
                <button type="submit" className="btn btn-submit">
                  Register Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}

export default Register;
