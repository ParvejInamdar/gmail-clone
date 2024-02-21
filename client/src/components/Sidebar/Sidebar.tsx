import React from 'react';
import { Drawer, styled } from '@mui/material'
import SidebarContent from '../SideBarContent/SidebarContent.tsx';

const DrawerWrapper = styled(Drawer)({
    marginTop:58
})

const Sidebar = ({ openDrawer }) => {
    return (
        <DrawerWrapper
            anchor='left'
            open={openDrawer}
            hideBackdrop={true}
            ModalProps={{
                keepMounted: true
            }}

            elevation={0}
            //sx is used to apply the styles using the in-built class
            sx={{
                '& .MuiDrawer-paper': {
                    marginTop: '58px',
                    width: '250px',
                    background: '#F5F5F5',
                    borderRight: 'none',
                }
            }}
            style={{ boxShadow: 'none' }}
        >
            <SidebarContent />
        </DrawerWrapper>
    )
}

export default Sidebar;