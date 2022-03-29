import React from 'react';

 function Registr(props) {
 
  return (
    <main><div >
    <h1>Register</h1>
    <form noValidate>
      <div style={{"width": "20em"}}>
        <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          style={{"width": "100%"}}
          type="email"
          name="email"
          id="email"
          placeholder="Please enter your email"/>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
          style={{"width": "100%"}}
          type="password"
          name="password"
          id="password"
          placeholder="Please enter your password"/>   
        </div>

        <input type="submit" className="btn btn-primary" value="Register" />
      </div>
    </form>
</div>
<h2>This is our Registration Page!</h2>
    </main>
  );
}

export default Registr;