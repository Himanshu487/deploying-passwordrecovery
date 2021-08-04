import React, { useState } from "react";

function App()
{

  const [email,setemail]=useState("");

  function updatecontent(event)
  {
    const newpass=event.target.value;
    setemail(newpass);
  }

  return(

<div >

<p className="title"  >PASSWORD RECOVERY</p>
  <p className="title1" >Please fill the form to recover your password</p>
  <div className="container">
 

  <p>Enter your email address or mobile no. and your password will be reset and emailed to you</p>
<p>Email or Mobile</p>
<input className="box" onChange={updatecontent} placeholder="Mobile or email" name="email" type="text" value={email}/>
<br/>
<p>Your registered email address</p>
  <button className="btn">Reset password</button>
  </div>

</div>

  )
}

export default App;