import { Box, TextField, Avatar, Typography, Button } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";

const SignUpPage = () => {
  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      noValidate
      autoComplete="off"
    >
      <Avatar sx={{ m: 1, bgcolor: "var(--bg-purple)", color: "var(--black)" }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h6">
        Sign Up
      </Typography>
      <Box
        my={4}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <TextField required id="name" label="Name" sx={{ mb: 3 }} />
        <TextField required id="email" label="Email Address" sx={{ mb: 3 }} />
        <TextField
          required
          id="password"
          label="Password"
          type="password"
          sx={{ mb: 3 }}
        />
        <TextField
          required
          id="confirm-password"
          label="Confirm Password"
          type="password"
        />
        <Button
          variant="contained"
          sx={{ mt: 3 }}
          endIcon={<SendOutlinedIcon />}
          type="submit"
        >
          Sign Up
        </Button>
      </Box>
    </Box>
  );
};

export default SignUpPage;
