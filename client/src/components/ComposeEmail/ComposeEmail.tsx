import { Dialog } from '@mui/material';
import React, { useContext, useState } from 'react';
import { DialogContext } from '../SideBarContent/SidebarContent.tsx';
import SimpleTextEditor from './SimpleTextEditor.tsx';

const ComposeEmail = () => {
  // const [recipientsPlaceholder,setRecipientsPlaceholder] = useState('Recipients')
  const [isMinimized, setIsMinimized] = useState(true);

  const {openComposeDialog,openComposeModal} = useContext(DialogContext);
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
          <SimpleTextEditor isMinimize={isMinimized} openFullScreenComposeDialog={openFullScreenComposeDialog} />
        </div>
        {/* <div className='w-full h-[60%] max-h-[60%] bg-yellow-200 mt-1 relative overflow-hidden'>
          <div className='w-full h-full'>
            <TextEditor />
          </div>
        </div>
         */}
      </Dialog>}
      {isMinimized &&
        <div className='fixed bottom-0 right-16 bg-white w-[500px] shadow-xl border rounded-t-md'>
          <SimpleTextEditor isMinimize={isMinimized} openFullScreenComposeDialog={openFullScreenComposeDialog} />
        </div>
      }

    </>
  )
}

export default ComposeEmail;