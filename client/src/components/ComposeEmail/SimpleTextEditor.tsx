import { MinimizeOutlined, CloseFullscreenOutlined, CloseOutlined, DeleteOutlineOutlined, OpenInFullRounded } from '@mui/icons-material';
import { Button, InputBase } from '@mui/material';
import React, { useState } from 'react';
import { emailConfig } from '../../Assests/constant';

const SimpleTextEditor = ({ closeDialog, isMinimize, openFullScreenComposeDialog }) => {
    const [isReceipentInputFocus, setIsReceipentInputFocus] = useState(false);
    const recipientsFocused = () => {
        setIsReceipentInputFocus(prevstate => !prevstate);
    }
    const [composeMailData, setComposeMailData] = useState({});

    const sendEmail = (event: any) => {
        console.log("event", event);
        let emailData = {
            To: composeMailData['To'],
            From: "abc@xyz.com",          // Put your registered Email to send the email
            Subject:composeMailData['Subject'],
            Body:composeMailData['Body']
        }
        event.preventDefault();
          
        if ((window as any).Email) {
            (window as any).Email.send({
                ...emailConfig,
                ...emailData
            }).then(
                message => alert(message)
            );
        }
        closeDialog();
    }

    const setComposeMailValues = (event: any) => {
        setComposeMailData({ ...composeMailData, [event.target.name]: event.target.value })
    }

    return (
        <>
            <div className='flex items-center justify-between bg-slate-100 w-full px-4 py-2'>
                <div className='text-[14px] font-medium'>New Message</div>
                <div className='flex'>
                    <div className='hover:bg-gray-300 me-1'>
                        <MinimizeOutlined className='text-gray-700 !text-[.875rem]' />
                    </div>
                    <div className='hover:bg-gray-300 me-1 cursor-pointer' onClick={openFullScreenComposeDialog}>
                        {isMinimize ? <OpenInFullRounded className='text-gray-700 !text-[.875rem]' /> :
                            <CloseFullscreenOutlined className='text-gray-700 !text-[.875rem]' />
                        }
                    </div>
                    <div onClick={closeDialog} className='hover:bg-gray-300 me-1 cursor-pointer'>
                        <CloseOutlined className='text-gray-700 !text-[.875rem]' />
                    </div>
                </div>
            </div>
            <div className='px-4'>
                <div className='w-full pt-1 flex items-center justify-center border-b'>
                    {isReceipentInputFocus &&
                        <span className='me-2 pb-1'>To</span>
                    }
                    <InputBase
                        placeholder={isReceipentInputFocus ? '' : 'Recipients'}
                        className='!text-black !z-50 w-full !text-[14px]'
                        onFocus={recipientsFocused}
                        onBlur={() => recipientsFocused()}
                        onChange={(e) => setComposeMailValues(e)}
                        name='To'
                    />
                </div>
                <div className='w-full pt-1 flex items-center justify-center border-b'>
                    <InputBase
                        placeholder='Subject'
                        className='!text-black !z-50 w-full !text-[14px]'
                        name='Subject'
                        onChange={(e) => setComposeMailValues(e)}
                    />
                </div>
                <div className='w-full pt-1  flex items-center justify-center'>
                    <InputBase
                        // placeholder='subject'
                        className='!text-black !z-50 w-full !text-[14px]'
                        multiline
                        rows={isMinimize ? 15 : 20}
                        name='Body'
                        onChange={(e) => setComposeMailValues(e)}
                    />
                </div>
                <div className=' py-2 flex items-center justify-between'>
                    <Button variant="contained" className='!bg-[#0b57d0] !rounded-full !px-8 !capitalize' href="#contained-buttons" onClick={(e) => sendEmail(e)}>
                        Send
                    </Button>
                    <DeleteOutlineOutlined color='action' />
                </div>
            </div>
        </>
    )
}

export default SimpleTextEditor