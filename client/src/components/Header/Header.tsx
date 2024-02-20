import React from 'react';
import { AppBar, Toolbar, styled, InputBase, Box } from '@mui/material'; //To override the previous stle of the MUI components we used styled
import { Menu as MenuIcon, AccountCircleOutlined, Search, Tune, HelpOutline as HelpOutlineIcon, SettingsOutlined as SettingsOutlinedIcon, AppsOutlined } from '@mui/icons-material';
import { gmailLogo } from '../../Assests/index.ts';

const StyledAppBar = styled(AppBar)({ // the component name must be in Capital always
    background: '#F5F5F5',
    boxShadow: 'none',
    height: 58,
    display:'flex',
    justifyContent:'center'
})

const BoxWrapper = styled(Box)({
    background: '#EAF1FB',
    marginLeft: 70,
    borderRadius: 30,
    minWidth: 690,
    maxWidth: 720,
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

const Header = () => {
    return (
        <StyledAppBar position='static'>
            <Toolbar>
                <MenuIcon color='action' fontSize='medium' />

                <div className='ps-4 h-full w-64 flex items-center justify-center'>
                    <img src={gmailLogo} alt='gmail' className='w-full h-[70%]' />
                </div>
                <BoxWrapper>
                    <Search color='action' />
                    <InputBase
                        placeholder='Search in mail'
                        inputProps={{ 'aria-label': 'Search in mail' }}
                    />
                    <Tune color='action' />
                </BoxWrapper>
                <div className='flex w-full items-center justify-end'>
                    <div className='p-2 hover:bg-gray-200 rounded-full'>
                    <HelpOutlineIcon color='action'/>
                    </div>
                    <div className='p-2 hover:bg-gray-200 rounded-full ms-5'>
                    <SettingsOutlinedIcon color='action' />
                    </div>
                    <div className='p-2 hover:bg-gray-200 rounded-full ms-5'>
                    <AppsOutlined color='action' />
                    </div>
                    <div className='p-2 hover:bg-gray-200 rounded-full ms-5'>
                    <AccountCircleOutlined color='action' />
                    </div>
                </div>
            </Toolbar>
        </StyledAppBar>
    )
}

export default Header;
