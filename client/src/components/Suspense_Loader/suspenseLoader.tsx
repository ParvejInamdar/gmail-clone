import React from "react";
import { CircularProgress } from '@mui/material';

const SuspenseLoader = () =>{
    return (
        <div>
            <CircularProgress />
            <div>Loading...</div>
        </div>
    )
} 

export default SuspenseLoader;