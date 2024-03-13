import React from "react";

export default function Registration() {
  return (
    <div>
      <h2>Registration Form</h2>
      <form action="register" method="post">
        <label>Username</label>
        <br />
        <input type="text" placeholder="Enter your name" name="username" />
        <br />
        <br />
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
        <label>Gender</label>
        <br />
        <input type="radio" value="M" name="gender" />
        Male
        <input type="radio" value="F" name="gender" />
        Female
        <input type="radio" value="O" name="gender" />
        Other
        <br />
        <br />
        <label>Role</label>
        <br />
        <input type="radio" value="Admin" name="role" />
        Admin
        <input type="radio" value="Customer" name="role" />
        Customer
        <br />
        <br />
        <label>Address:</label>
        <br />
        <textarea name="address"></textarea> <br />
        <br />
        <input type="submit" value="Register" />
      </form>
    </div>
  );
}
