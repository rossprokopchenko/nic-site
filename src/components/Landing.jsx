import React from 'react';
import { Box, Typography } from '@mui/material';

import Bubs from '../resources/BUBS.png';

export default function Landing() {
    return(
        <Box>
            <Typography variant='h4'>
                <strong>ERROR 69</strong> - Bubbs could not find the website you're looking for
            </Typography>

            <img src={Bubs} style={{height: '500px'}} />
        </Box>
    );
}