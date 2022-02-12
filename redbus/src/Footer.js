import React from 'react';

const Footer=()=>{
    return(
        <>
            <footer className="bg-danger mb-2">
                <div className='container'>
                    <div className='row content-justify-center'>
                        <div className='mx-auto'>
                            <div className='row content-justify-center'>
                                <div className='col-lg-3'>
                                    <h3>About redBus</h3>
                                        <ul>
                                            <li>
                                                <a href="#">About Us</a>
                                            </li>
                                            <li>
                                                <a href="#">Contact Us</a>
                                            </li>
                                            <li>
                                                <a href="#">Careers</a>
                                            </li>
                                            <li>
                                                <a href="#">Mobile App</a>
                                            </li>
                                        </ul>
                                </div>

                                <div className='col-6 col-lg-3'>
                                    <h3>Info</h3>
                                        <ul>
                                            <li>
                                                <a href="#">Terms and Conditons</a>
                                            </li>
                                            <li>
                                                <a href="#">Privacy</a>
                                            </li>
                                            <li>
                                                <a href="#">FAQ</a>
                                            </li>
                                            <li>
                                                <a href="#">Blog</a>
                                            </li>
                                        </ul>
                                </div>

                                <div className='col-6 col-lg-3 '>
                                    <h3>Global Sites</h3>
                                        <ul>
                                            <li>
                                                <a href="#">India</a>
                                            </li>
                                            <li>
                                                <a href="#">Singapore</a>
                                            </li>
                                            <li>
                                                <a href="#">Malaysia</a>
                                            </li>
                                            <li>
                                                <a href="#">Colombia</a>
                                            </li>
                                        </ul>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;