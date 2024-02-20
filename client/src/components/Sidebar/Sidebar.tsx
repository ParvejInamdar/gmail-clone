import React from 'react';
import {Drawer,styled} from '@mui/material'
import SidebarContent from '../SideBarContent/SidebarContent.tsx';
 
const Sidebar = () => {
    return(
        <Drawer
            anchor='left'
            open={true}
            hideBackdrop={true}
            ModalProps={{
                keepMounted:true
            }}
            
            elevation={0}
            //sx is used to apply the styles using the in-built class
            sx={{
                '& .MuiDrawer-paper':{
                    marginTop: '58px',
                    width: '250px',
                    background:'#F5F5F5',
                    borderRight:'none',
                }
            }}
            style={{boxShadow:'none'}}
        >
            <SidebarContent />
        </Drawer>
    )
}

export default Sidebar;