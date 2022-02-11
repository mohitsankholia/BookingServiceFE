import { Button, TextField } from "@mui/material";
import React from "react";
import Top from "./Top";

const Home=()=>{
    
    const backSize={

        "height": '450px',
        "overflow": 'hidden',
        "background-size": 'cover',
        "width": '100%'
    }

    return(
        <>
            <Top/>
            <img style={backSize} src="../pics/background.png" alt="backgroundimage"/>
            
            {/* <div className="mt-3 container" > */}
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-8 col-sm-12 shadow-sm p-3">
                        
                        <TextField 
                            required
                            id="outlined-required"
                            input
                            label="Source"
                         /> 

                        <TextField
                            required
                            id="filled-required"
                            label="Destination"
                        />
                        
                        <input type="date"/>
                        
                        <div className="text-center mt-2">
                        <Button variant="contained" color="error">Search</Button>
                        </div>
                    </div>
                        
                        <div className="container mt-lg-2">
                            <div className="d-flex flex-row flex-nowrap overflow-auto p-4">
                                <div className="card col-lg-4 col-md-6 col-sm-12 p-4 me-3 mt-3">
                                    <div className="card-body">
                                        
                                        <img src="../pics/one.png" className="me-3" alt="..."/>
                                        <img src="../pics/two.jpg"  alt="..."/>
                                        
                                    </div>
                                 </div>
                            </div> 
                        </div>
                </div>
            {/* </div> */}
        </>
    );
}

export default Home;