import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import {ParallaxProvider, Parallax} from 'react-scroll-parallax';
import FileOpenIcon from '@mui/icons-material/FileOpen';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';

import stu from '../resources/stu.jpg';

export default function Undergrad() {
    return(
        <Box sx={{height: '100vh'}}>
            <Box sx={{width: '100%'}}>
                <img src={stu} style={{width: '100%'}}/>
            </Box>

            <Box sx={{p: 5}}>
                <Typography variant='h4'>
                    Undergraduate Research
                </Typography>
                <Typography variant='subtitle1' >
                    <a href='https://www.stu.ca/' target="_blank">St. Thomas University</a>
                </Typography>
                <Box sx={{display: 'flex', flexDirection: 'row'}} justifyContent='center'>
                    <Button variant="outlined" startIcon={<FileOpenIcon />} sx={{width: '150px', m: 3}}>
                        Transcript
                    </Button>
                    <Button variant="outlined" startIcon={<HistoryEduIcon />} sx={{width: '150px', m: 3}}>
                        Thesis
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}