import React from "react";
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {Navbar, Nav} from "react-bootstrap"

const Top=()=>{
    return(
        <>
          <Navbar bg="danger" expand="lg">
                <div className="container">
                    <Navbar.Brand href="/home">
                    <img
                        src="../pics/red-bus-logo.png"
                        width="70"
                        height="70"
                        className="d-inline-block align-top"
                        alt="Redbus logo"
                    />
                    </Navbar.Brand>
                    {/* <Navbar.Brand href="#"><h1 className="text-light">redBus</h1></Navbar.Brand> */}
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="d-flex flex-row fw-bold">
                                <Nav.Link href="#">BUS TICKET</Nav.Link>
                                <Nav.Link href="#">RydeNew</Nav.Link>
                                <Nav.Link href="#">redRail</Nav.Link>
                                <Nav.Link href="#">rPool</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                        
                        <Navbar className=" d-flex flex-row-reverse ">
                            <button 
                                className="btn btn-outline-dark fw-bold text-white me-2"
                                onClick={()=>{
                                    localStorage.removeItem("user")
                                    window.location.assign("/")
                                }}
                                >
                                Logout
                            </button>
                            <Nav.Link className="btn btn-outline-dark fw-bold text-white me-2" href="/bus">Buses Available</Nav.Link>
                            <Nav.Link className="btn btn-outline-dark fw-bold text-white me-2" href="/home">Home</Nav.Link>
                        </Navbar>
                    </div>
            </Navbar>
        </>
    );
}

export default Top;