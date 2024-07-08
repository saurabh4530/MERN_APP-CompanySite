import React, { useState } from "react";

function Login() {
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted");
  };

  return (
    <section className="section-contact">
      <main>
        <div className="section-registration container">
          <div className="grid grid-two-cols">
            <div className="registration-image">
              <img
                src="https://media.istockphoto.com/id/1281150061/vector/register-account-submit-access-login-password-username-internet-online-website-concept.jpg?s=612x612&w=0&k=20&c=9HWSuA9IaU4o-CK6fALBS5eaO1ubnsM08EOYwgbwGBo="
                alt="login"
                width="500"
                height="500"
              />
            </div>
            <div className="registration-form section-form">
              <h1 className="main-heading mb-3">Login</h1>
              <br />
              <form onSubmit={handleSubmit}>
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
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}

export default Login;
