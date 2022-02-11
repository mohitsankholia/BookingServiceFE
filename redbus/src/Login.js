import React, { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Login=()=>{

    const[auth,setAuth]=useState({
        "user":"",
        "pass":""
    })

    const verify=(eve)=>{
        const{name,value}=eve.target

        setAuth((old)=>{
            return{
                ...old,
                [name]:value
            }
        })
    }

    const log=()=>{
        if(auth.user==="mohit"&&auth.pass==="react")
        {
            localStorage.setItem("user",auth.user)
            window.location.assign("/home")
        }
        else{
            alert("Invalid credentials")
        }
    }


    return(
        <>
            <div className="mt-3 container" >
                <h5 className="display-6 text-center text-info">Enter Login Detials</h5>
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-8 col-sm-12 shadow-lg p-3">
                        
                        <TextField 
                            required
                            id="outlined-required"
                            input
                            label="UserId" 
                            name="user"
                            value={auth.user}
                            onChange={verify}
                            className="form-control"
                         /> 

                        <TextField className="ms-3"
                            required
                            id="filled-required"
                            label="Password"
                            type="password"
                            name="pass"
                            value={auth.pass}
                            onChange={verify}
                            className="form-control mt-3"
                        />
                        
                        
                        <div className="text-center row mt-3">
                            <Button variant="contained" color="success" onClick={log}>Login</Button>
                        </div>
                    </div> 
                </div>
            </div>
        </>
    );
}


export default Login;