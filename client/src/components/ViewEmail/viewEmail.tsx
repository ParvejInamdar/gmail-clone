import React from "react";
import { useOutletContext } from "react-router-dom";

type DrawerContextType = {
    openDrawer:boolean;
}

const ViewEmail = () => {
    const {openDrawer} = useOutletContext<DrawerContextType>();

    return(
        <div className={openDrawer ? 'ms-64 w-full' : 'ms-8 w-full'}>View Email Component</div>
    )

};

export default ViewEmail;