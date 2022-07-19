import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import Snackbar from '@mui/material/Snackbar';
import { toggleNotifications } from "../api/NotificationApi"

export const Notification = ({ notificationData }) => {
  const { id, description, read } = notificationData;
  const [open, setOpen] = useState(!read);
  const [showSnack, setSnack] = useState(false);

  const toggleRead = async (e) => {
    e.preventDefault()
    const data = await toggleNotifications(id, open)
    console.log(data)
    if(data.message.includes("successfully")){
      setSnack(true)
      setTimeout(()=>{setSnack(false)}, 5000)
    }
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Collapse in={open}>
        <Snackbar
          open={showSnack}
          onClose={() => setSnack(false)}
          message="Successfully updated"
          autoHideDuration={5000}
        />
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" onClick={(e)=> toggleRead(e)} />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          {description}
        </Alert>
      </Collapse>
      {!open && <Button
        disabled={open}
        variant="outlined"
        onClick={(e) => {
          setOpen(true);
          toggleRead(e);
        }}
      >
        Re-open
      </Button>}
    </Box>
  );
}

export default Notification;