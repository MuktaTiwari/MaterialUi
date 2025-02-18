import React, { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button } from '@mui/material';

const NodePopup = ({ open, handleClose, nodeData, handleSave }) => {
  const [message, setMessage] = useState(nodeData?.message || '');

  const handleSaveChanges = () => {
    if (!nodeData.id) {
      console.error("Node id is undefined!");
      return;
    }

    console.log("Saving changes", { id: nodeData.id, message });
    handleSave({ id: nodeData.id, message }); // Only passing message to the parent component
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Edit Node</DialogTitle>
      <DialogContent>
        <TextField
          label="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          fullWidth
          margin="normal"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSaveChanges}>Save</Button>
      </DialogActions>
    </Dialog>
  );
};

export default NodePopup;
