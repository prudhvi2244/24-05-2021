import axios from "axios";
import React, { useState, useEffect } from "react";

function Signin() {
  const [form1, setform1] = useState({ email: "", password: "" });
  function handleForm(e) {
    e.preventDefault()
  
      let email = form1.email
      let password = form1.password
      if (email == "") {
        document.getElementById("error").innerHTML = "email is required";
        document.getElementById("email").focus();
      } else if (password == "") {
        document.getElementById("error").innerHTML = "password is required";
        document.getElementById("password").focus();
      } else {
        document.getElementById("error").innerHTML = "";
        //alert(`Email :${email},password:${password}`)
        setform1({ email: "", password: "" })
       
      }
    
     

  }

  
 
  return (
    <div>
      <h3>Login Here</h3>
      <form onSubmit={handleForm}>
        <div className="form-group">
          <label>Email</label>
          <input
            id="email"
            className="form-control"
            value={form1.email}
            onChange={(e) => setform1({ ...form1, email: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            id="password"
            className="form-control"
            value={form1.password}
            onChange={(e) => setform1({ ...form1, password: e.target.value })}
          />
        </div>
        <button  className="btn btn-success mt-2">Login</button>
        <b id="error" className="text-danger m-2"></b>
      </form>
      <hr />

      <h5>Email : {form1.email}</h5>
      <h5>Password : {form1.password}</h5>
    </div>
  );
}

export default Signin;
