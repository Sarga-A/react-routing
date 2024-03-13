import React from "react";

export default function Login() {
  return (
    <div>
      <form action="validate" method="post">
        <h2>USER LOGIN:</h2>

        <label>Email</label>
        <br />
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your Email Id"
        />
        <br />
        <br />
        <label>Password</label>
        <br />
        <input type="password" placeholder="Enter password" name="password" />
        <br />
        <br />
        <input type="submit" value="LOGIN" />
      </form>
    </div>
  );
}
