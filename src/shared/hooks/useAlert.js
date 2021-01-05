import React, { useState } from 'react';
import MuiAlert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';

const useAlert = (props) => {
  const handleClose = () => {
    setOpen(false);
  };
  const [open, setOpen] = useState(false);

  export const alert = (success, message) => {};
  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    >
      <MuiAlert
        elevation={6}
        variant="filled"
        onClose={handleClose}
        severity="success"
      >
        This is a success message!
      </MuiAlert>
    </Snackbar>
  );
};

export default useAlert;
