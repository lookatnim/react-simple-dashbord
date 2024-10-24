import React from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // You can add your authentication logic here
    navigate('/');  // Navigate to dashboard after login
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      bgcolor="background.paper"
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        p={3}
        border={1}
        borderRadius={2}
      >
        <Typography variant="h5" mb={3}>Login</Typography>
        <TextField label="Username" fullWidth margin="normal" />
        <TextField label="Password" type="password" fullWidth margin="normal" />
        <Button variant="contained" color="primary" onClick={handleLogin}>
          Login
        </Button>
      </Box>
    </Box>
  );
};

export default LoginPage;
