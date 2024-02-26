import React, { useRef, useState } from 'react';
import { Button, Dialog, InputBase, TextField } from '@mui/material';
import { MinimizeOutlined, CloseFullscreenOutlined, CloseOutlined, DeleteOutlineOutlined } from '@mui/icons-material';
import { EditorState } from 'draft-js';
import SimpleTextEditor from './SimpleTextEditor.tsx';

const ComposeEmail = ({ openComposeModal, openComposeDialog }) => {
  // const [recipientsPlaceholder,setRecipientsPlaceholder] = useState('Recipients')
  const [isMinimized, setIsMinimized] = useState(true);

  const closeDialog = () => {
    openComposeDialog();
  }

  const openFullScreenComposeDialog = () => {
    setIsMinimized(prevState => !prevState);
  }

  return (
    <>
      {!isMinimized && <Dialog
        open={openComposeModal}
        onClose={closeDialog}
        sx={{
          '& .MuiDialog-paper': {
            // height: '85%',
            width: '80%',
            boxShadow: 'none',
            borderRadius: '8px 8px 0 0',
            maxWidth: '100%',
            // maxHeight: '100%',
            overflow: 'hidden'
          }
        }}
      >
        <div className=' w-full h-full flex flex-col relative'>
          <SimpleTextEditor closeDialog={closeDialog} isMinimize={isMinimized} openFullScreenComposeDialog={openFullScreenComposeDialog} />
        </div>
        {/* <div className='w-full h-[60%] max-h-[60%] bg-yellow-200 mt-1 relative overflow-hidden'>
          <div className='w-full h-full'>
            <TextEditor />
          </div>
        </div>
         */}
      </Dialog>}
      {isMinimized &&
        <div className='fixed bottom-0 right-16 bg-white w-[500px] shadow-lg border rounded-t-md'>
          <SimpleTextEditor closeDialog={closeDialog} isMinimize={isMinimized} openFullScreenComposeDialog={openFullScreenComposeDialog} />
        </div>
      }

    </>
  )
}

export default ComposeEmail;