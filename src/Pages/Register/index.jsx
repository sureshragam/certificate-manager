import Box from "@mui/material/Box";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button
} from "@mui/material";
import { useState } from "react";

const FAMILYMODE = {
  NEW: 0,
  EXISTING: 1,
};

export const Register = () => {
  const [familyModeType, setFamilyModeType] = useState(FAMILYMODE.NEW);
  const handleFamilyMode = (event) => {
    if (event.target.value === FAMILYMODE.NEW)
      setFamilyModeType(FAMILYMODE.NEW);
    else setFamilyModeType(FAMILYMODE.EXISTING);
  };
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
          label="Name"
          placeholder="Enter your name"
        />
        <TextField
          required
          id="outlined-required"
          label="Email"
          placeholder="Enter your name"
        />
        <TextField
          required
          id="outlined-required"
          label="Password"
          placeholder="Enter your name"
        />
        <TextField
          required
          id="outlined-required"
          label="Re-enter Password"
          placeholder="Enter your name"
        />
        <FormControl sx={{ width: "100%" }}>
          <InputLabel id="Family Mode">Family Mode</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="Family mode Box"
            value={familyModeType}
            label="Family Mode"
            onChange={handleFamilyMode}
          >
            <MenuItem value={0}>New Family</MenuItem>
            <MenuItem value={1}>Existing Family</MenuItem>
          </Select>
        </FormControl>
        {familyModeType === 1 && (
          <TextField
            required
            id="outlined-required"
            label="Family Code"
            placeholder="Enter family code"
          />
        )}
        <Button sx={{width:'99%',height:'3rem',marginBlock:'2rem'}}variant="outlined">Submit</Button>
      </Box>
    </div>
  );
};
