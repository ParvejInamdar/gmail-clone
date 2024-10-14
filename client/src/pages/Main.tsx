import React, { Suspense, useState } from 'react';
import Header from '../components/Header/Header.tsx';
import Sidebar from '../components/Sidebar/Sidebar.tsx';
import { Box, styled } from '@mui/material';
import Emails from '../components/Email/email.tsx';
import { Outlet } from 'react-router-dom';
import SuspenseLoader from '../components/Suspense_Loader/suspenseLoader.tsx';

const MainWrapper = styled(Box)({
    display: 'flex',
    // marginTop: '60px'
});

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
                <Suspense fallback={<SuspenseLoader />}>
                    <Outlet context={{ openDrawer }}/>
                </Suspense>
                {/* <Emails openDrawer={openDrawer}/> */}
            </MainWrapper>
        </>
    )
}

export default Main;