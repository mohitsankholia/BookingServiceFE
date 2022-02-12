import React  from "react";
import EditIcon from '@mui/icons-material/Edit';
import Button from '@mui/material/Button';
import Top from "./Top";
import details from "./Listing";

const Buses=()=>{
    

    return(
        <> 
            <Top/>
            <div className="row justify-content-center mt-2">
                <div className="col-lg-8 col-md-10 col-sm-12 table-responsive">
                    <table className="table table-stripped table-hover shodow text-light bg-danger">
                        <thead>
                            <tr>
                                <th>BusId</th>
                                <th>BusNo</th>
                                <th>Source</th>
                                <th>Destination</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {details.map((data,index)=>(
                                <tr>
                                    <td>{data.busId}</td>
                                    <td>{data.busNo}</td>
                                    <td>{data.source}</td>
                                    <td>{data.destination}</td>
                                    <td>
                                        <Button color="warning" className="btn btn-outline-warning">
                                            <EditIcon/>
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default Buses;