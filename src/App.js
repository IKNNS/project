import './App.css';
import * as React from 'react';
import {Button, Typography} from '@mui/material';
import { Stack } from '@mui/system';
 

function App() {
  return (  
    <Stack spacing = {2} direction ='column'>
      
      <img src = "/transfer.jpg" alt="transfer-money" width="60" height="60" ></img>

      <Button type = "submit" variant = "contained"  margin = '' sx={{backgroundColor: 'grey.700'}}>
      <Typography  sx={{color: 'secondary.light' }}>  transfer </Typography>
      </Button>

      <img src = "/withdraw.jpg" alt="transfer-money" width="60" height="60" ></img>

      <Button type = "submit" variant = "contained"  margin =  '' sx={{backgroundColor: 'grey.700'}}>
      <Typography sx={{color: 'secondary.light' }}>  withdraw </Typography>
      </Button>

      <img src = "/deposit.png" alt="transfer-money" width="60" height="60" ></img>

      <Button type = "submit" variant = "contained"  margin = '' sx={{backgroundColor: 'grey.700'}}>
      <Typography sx={{color: 'secondary.light' }}>  deposit </Typography>
      </Button>
    </Stack>
  );
}

export default App;
