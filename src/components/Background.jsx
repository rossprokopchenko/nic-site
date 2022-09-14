import React from 'react';
import { Box, Typography } from '@mui/material';

import Prof from '../resources/prof.jpg';
import Helper from '../resources/helper.jpg';

export default function Background() {
    return(
        <Box sx={{height: '100vh', display: 'flex', flexDirection: 'column'}}>
            <Box sx={{ display: 'flex', flexDirection: 'row', height: '50%'}}>
                <Box sx={{display: 'flex', float: 'left', height: '100%', width: '50%'}} justifyContent='center' alignItems='center'>
                    <Typography variant='h4'>
                        Nicole is a sexy mama that studies consent and WILL get her PhD in the field because you are going to hire her.
                        
                    </Typography>
                </Box>
                <Box sx={{display: 'flex', float: 'right', height: '100%', width:'50%', background: 'lightgray'}} justifyContent='center' alignItems='center'>
                    <img src={Prof} style={{height: '100%'}} />
                </Box>
            </Box>

            <Box sx={{display: 'flex', flexDirection: 'row', mt: '50px', height: '50%'}}>
                <Box sx={{float: 'left', height: '100%', width: '50%', background: 'lightgray'}}>
                    <img src={Helper} style={{height: '100%'}} />
                </Box>
                <Box sx={{display: 'flex', float: 'right', height: '100%', width: '50%', mt: 'auto', mb: 'auto', verticalAlign: 'middle'}} textAlign='center' alignItems='center'>
                    <Typography variant='h4' sx={{verticalAlign: 'middle'}}>
                        She also has a very useful helper that presses buttons for her and makes the dream work
                    </Typography>
                </Box>
            </Box>
        </Box>
        
    );
}