import React from 'react';
import { Typography, Button } from '@mui/material';

const RightSidebar = ({ onAddCard }) => {
  return (
    <div style={{
      position: 'absolute',
      right: 0,
      top: 0,
      height: '100vh',
      width: '400px',
      background: '#f4f4f4',
      padding: '20px',
      boxShadow: '-2px 0 5px rgba(0,0,0,0.1)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}>
      <Typography variant="h6">Actions</Typography>
      <Button onClick={() => onAddCard('text')} variant="contained" color="primary" style={{ marginBottom: '10px' }}>
        Add Text Card
      </Button>
      <Button onClick={() => onAddCard('question')} variant="contained" color="secondary">
        Add Question Card
      </Button>
    </div>
  );
};

export default RightSidebar;
