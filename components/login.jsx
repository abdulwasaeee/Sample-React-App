import React from "react";

function Login(){
return(
    <>
    <div className="container-fluid d-flex justify-content-center align-items-center" id="login">
        <div className="loginpage">
            <h1 className="text-center">LOGIN</h1>
            <div className="field-box">
                <input className="loginput" type="text" placeholder="username"></input>
                
            </div>
            <div className="field-box">
                <input className="loginput" type="password" placeholder="password"></input>
                

            </div>
            <center><div><button className="btn btn-outline-light">submit</button></div></center>
        </div>
    </div>
    </>
    
)
}

export default Login
