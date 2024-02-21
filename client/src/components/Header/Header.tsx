import React from 'react';
import { AppBar, Toolbar, styled, InputBase, Box, Button } from '@mui/material'; //To override the previous stle of the MUI components we used styled
import { Menu as MenuIcon, AccountCircleOutlined, Search, Tune, HelpOutline as HelpOutlineIcon, SettingsOutlined as SettingsOutlinedIcon, AppsOutlined } from '@mui/icons-material';
import { gmailLogo } from '../../Assests/index.ts';

const StyledAppBar = styled(AppBar)({ // the component name must be in Capital always
    background: '#F5F5F5',
    boxShadow: 'none',
    height: 60,
    display: 'flex',
    justifyContent: 'center',
    zIndex: 1000
})

const BoxWrapper = styled(Box)({
    background: '#EAF1FB',
    marginLeft: 40,
    borderRadius: 30,
    height: 48,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 20px',
    //Accessing the child div to make input filed with 100%
    '& > div': {
        width: '100%',
        padding: '0 10px'
    }
})

const Header = ({ toggleDrawer }) => {
    return (
        <StyledAppBar position='static'>
            <Toolbar>
                <div className='flex w-[250px] items-center justify-between'>
                    <div className='p-2 hover:bg-gray-200 rounded-full cursor-pointer' onClick={toggleDrawer}>
                        <MenuIcon color='action' fontSize='medium' />
                    </div>

                    <div className='ps-4  w-36 flex items-center justify-center'>
                        <img src={gmailLogo} alt='gmail' className='w-full h-[70%]' />
                    </div>
                </div>
                <BoxWrapper className='w-full !hidden md:!flex'>
                    <Search color='action' />
                    <InputBase
                        placeholder='Search in mail'
                        inputProps={{ 'aria-label': 'Search in mail' }}
                    />
                    <Tune color='action' />
                </BoxWrapper>
                <div className='flex w-full items-center justify-end'>
                    <div className='md:!hidden p-2 hover:bg-gray-200 rounded-full cursor-pointer'>
                        <Search color='action' />
                    </div>
                    <div className='p-2 hover:bg-gray-200 rounded-full cursor-pointer'>
                        <HelpOutlineIcon color='action' />
                    </div>
                    <div className='p-2 hover:bg-gray-200 rounded-full ms-5 cursor-pointer'>
                        <SettingsOutlinedIcon color='action' />
                    </div>
                    <div className='p-2 hover:bg-gray-200 rounded-full ms-5 cursor-pointer'>
                        <AppsOutlined color='action' />
                    </div>
                    <div className='p-2 hover:bg-gray-200 rounded-full ms-5 cursor-pointer'>
                        <AccountCircleOutlined color='action' />
                    </div>
                </div>
            </Toolbar>
        </StyledAppBar>
    )
}

export default Header;
