import { Button, TextField } from "@mui/material";
import React from "react";
import Footer from "./Footer";
import Top from "./Top";

const Home=()=>{
    
    const backSize={

        "height": '450px',
        "overflow": 'hidden',
        "background-size": 'cover',
        "width": '100%'
    }
    
    const imgSize={

        "width": "300px",
        "height": '300px'
    }

    return(
        <>
            <Top/>
            <img style={backSize} src="../pics/background.png" alt="backgroundimage"/>
            
            <div className="mt-3 container" >
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-md-8 col-sm-12 shadow-sm p-3">
                    <div className="container justify-content-center">
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

                        <TextField
                        required
                            id="date"
                            label="Date"
                            type="date"
                            defaultValue="2022-02-12"
                        />
                        
                        <div className="text-center mt-2">
                        <Button variant="contained" color="error">Search</Button>
                        </div>
                        </div>
                    </div>
                        
                        <div className="container mt-lg-2">
                            <div className="d-flex flex-row flex-nowrap overflow-auto p-4">
                                <div className="card col-lg-4 col-md-6 col-sm-12 p-2 me-1 mt-2" >
                                    <div className="card-body shadow-lg ">

                                        <img style={imgSize} src="../pics/one.png" className="me-1 card-img" alt="..."/>
                                        
                                    </div>
                                 </div>

                                 <div className="card col-lg-4 col-md-6 col-sm-12 p-2 me-1 mt-2" >
                                    <div className="card-body shadow-lg">
                                        
                                        <img style={imgSize} src="../pics/two.jpg" className="me-1 card-img" alt="..."/>
                                        
                                    </div>
                                 </div>

                                 <div className="card col-lg-4 col-md-6 col-sm-12 p-2 me-1 mt-2" >
                                    <div className="card-body shadow-lg">
                                        
                                        <img style={imgSize} src="../pics/three.jpg" className="me-1 card-img" alt="..."/>
                                        
                                    </div>
                                 </div>

                                 <div className="card col-lg-4 col-md-6 col-sm-12 p-2 me-1 mt-2" >
                                    <div className="card-body shadow-lg">
                                        
                                        <img style={imgSize} src="../pics/two.jpg" className="me-1 card-img" alt="..."/>
                                        
                                    </div>
                                 </div>
                            </div> 
                        </div>
                </div>
            </div>
            <img style={backSize} src="../pics/covid.png" alt="backgroundimage"/>
            <Footer/>
        </>
    );
}

export default Home;