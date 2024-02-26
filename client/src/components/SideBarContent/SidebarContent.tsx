import React, { useState } from 'react';
import { Box, Button, styled, List, ListItem } from '@mui/material';
import { CreateOutlined, KeyboardArrowDownOutlined, KeyboardArrowUpOutlined } from '@mui/icons-material';
import { SEE_MORE_SIDEBAR_DATA, SIDE_BAR_DATA } from '../../Assests/constant';
import EmailEditor from '../ComposeEmail/ComposeEmail.tsx';

const ButtonWrapper = styled(Button)({
    background: '#c2e7ff',
    border: 'none',
    padding: '0 24 0 0',
    borderRadius: 16,
    marginLeft: 10,
    marginTop: 15,
    marginBottom: 10,
    height: 56,
    boxShadow: 'none',
    '&: hover': {
        background: '#c2e7ff', // Change background color on hover
        cursor: 'pointer', // Optionally, change cursor on hover
        boxShadow: '0 1px 3px 0 rgba(60,64,67,0.302),0 4px 8px 3px rgba(60,64,67,0.149)' // Apply box shadow on hover
    }
})

const ListItemWrapper = styled(ListItem)({
    padding: '5px 15px',
    cursor: 'pointer'
})

const SidebarContent = () => {

    const [selectedSideMenu, setSelectedSideMenu] = useState('Inbox');
    const [seeMore, setSeeMore] = useState(false);
    const [openComposeModal,setOpenComposeModal] = useState(false);

    const openComposeDialog = () =>{
        setOpenComposeModal(prevState => !prevState);
    }

    return (
        <Box>
            <Box>
                <ButtonWrapper variant="contained" href="#contained-buttons" onClick={openComposeDialog}>
                    <CreateOutlined className='mr-3 !text-black' color='action' />
                    <span className='text-gray-700 capitalize text-[14px] font-semibold'>Compose</span>
                </ButtonWrapper>
            </Box>
            <List className='!mx-3'>
                {
                    SIDE_BAR_DATA.map((item) => {
                        return (
                            <ListItemWrapper key={item.id} onClick={() => setSelectedSideMenu(item.name)} className={`${selectedSideMenu === item.name && 'bg-[#d3e3fd]'} ${selectedSideMenu !== item.name && 'hover:bg-gray-200'} rounded-full `}>
                                <item.icon className='me-4 text-gray-800 font-bold' fontSize='small' />
                                <div className={`${selectedSideMenu === item.name && 'font-bold'} text-gray-800 text-[14px]`}>{item.name}</div>
                            </ListItemWrapper>
                        )
                    })
                }
                <ListItemWrapper onClick={() => { setSeeMore(!seeMore) }} className={`${seeMore && 'bg-gray-200'} hover:bg-gray-200 rounded-full`}>
                    {!seeMore && <KeyboardArrowDownOutlined className='me-4 text-gray-800' fontSize='small' />}
                    {seeMore && <KeyboardArrowUpOutlined className='me-4 text-gray-800' fontSize='small' />}
                    <span className='text-gray-800 text-[14px]'>{`${seeMore ? 'Less' : 'More'}`}</span>
                </ListItemWrapper>
                {seeMore && (
                    SEE_MORE_SIDEBAR_DATA.map((item) => {
                        return (
                            <ListItemWrapper key={item.id} onClick={() => setSelectedSideMenu(item.name)} className={`${selectedSideMenu === item.name && 'bg-[#d3e3fd]'} ${selectedSideMenu !== item.name && 'hover:bg-gray-200'} rounded-full `}>
                                <item.icon className='me-4 text-gray-800' fontSize='small' />
                                <div className={`${selectedSideMenu === item.name && 'font-bold'} text-gray-800 text-[14px]`}>{item.name}</div>
                            </ListItemWrapper>
                        )
                    })
                )}
            </List>
            {openComposeModal && <EmailEditor openComposeDialog={openComposeDialog} openComposeModal={openComposeModal}/>}
        </Box>
    )
}

export default SidebarContent