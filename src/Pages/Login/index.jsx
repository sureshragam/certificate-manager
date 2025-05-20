import Box from "@mui/material/Box";
import {
  TextField,
  Button
} from "@mui/material";
import { useState } from "react";


export const Login = () => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail =(e) =>{
    setMail(e.target.value)
  }
   const handlePassword =(e) =>{
    setPassword(e.target.value)
  }

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "100%" },
          padding: "2rem",
          width: "40%",
          border:'1px solid grey',
          borderRadius:'12px',
          boxShadow:'2px 0px 1px 0px grey'
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          required
          id="outlined-required"
          label="Email"
          placeholder="Enter your email"
          value={mail}
          onChange={handleEmail}
        />
        <TextField
          required
          id="outlined-required"
          label="Password"
          placeholder="Enter your password"
          value={password}
          onChange={handlePassword}
        />
        <Button sx={{width:'99%',height:'3rem',marginBlock:'2rem'}}variant="outlined">Submit</Button>
      </Box>
    </div>
  );
};
