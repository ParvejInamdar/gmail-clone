import React, { useState } from 'react';
import Header from '../components/Header/Header.tsx';
import Sidebar from '../components/Sidebar/Sidebar.tsx';
import { Box, styled } from '@mui/material';


const MainWrapper = styled(Box)`
    display: flex;
`;

const Main = () => {
    const [openDrawer, setOpenDrawer] = useState(true);

    const toggleDrawer = () => {
        console.log("toggle Drawer clicked")
        setOpenDrawer(prev => !prev);
    }

    return (
        <>
            <Header toggleDrawer={toggleDrawer} />
            <MainWrapper>
                <Sidebar openDrawer={openDrawer} />
                <div>All Mails</div>
            </MainWrapper>
        </>
    )
}

export default Main;