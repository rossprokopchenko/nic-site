import React from 'react';
import { useState } from 'react';
import { Box, Typography, ThemeProvider, createTheme, Collapse } from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineDot, TimelineConnector, TimelineContent, TimelineOppositeContent } from '@mui/lab';

export default function ResumeCV() {
    const [hoverIndex, setHoverIndex] = useState(-1);

    const textTheme = createTheme({
        typography: {
          fontFamily: [
            '',
            '',
          ].join(','),
        },});

    return(
        <Box>
            <Timeline position='alternate' sx={{ p: 'min(60px, 3%)'}}>
                <TimelineItem>
                    <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    align="right"
                    variant="body2"
                    >
                        <ThemeProvider theme={textTheme}>
                            <Typography variant="body1" sx={{fontStyle: 'italic'}}>April 2022 to Present</Typography>
                        </ThemeProvider>
                        
                    </TimelineOppositeContent>

                    <TimelineSeparator>
                        <TimelineConnector />
                            <TimelineDot sx={{background: 'red', transform: 'scale(1.2)'}}>
                            </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>

                    <TimelineContent
                        sx={{ py: '12px', px: 2, my: '50px' }} 
                        onMouseEnter={() => setHoverIndex(0)}
                        onMouseLeave={() => setHoverIndex(-1)}
                        >
                        <Typography variant="h6" component="span">
                            CENTRE FOR RESEARCH WITH VULNERABLE WOMEN AND YOUTH
                        </Typography>
                        <Typography sx={{fontWeight: 'bold'}}>
                            Graduate Research Associate 
                        </Typography>
                        <Collapse in={hoverIndex == 0}>
                            <ThemeProvider theme={textTheme}>
                                <Typography variant='body1'>
                                	Complete research and write research reports for funding and publication purposes.<br />
                                	Implement and evaluate a trauma-informed, women-centred, strengths-based program with incarcerated provincial women offenders known as “Trauma to Strength”.<br />
                                	Writing short scripts on various topics around trauma and resources available to incarcerated provincial women.
                                </Typography>
                            </ThemeProvider>
                        </Collapse>
                    </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    align="right"
                    variant="body2"
                    >
                        <ThemeProvider theme={textTheme}>
                            <Typography variant="body1" sx={{fontStyle: 'italic'}}>Jan. 2022 to Present</Typography>
                        </ThemeProvider>
                        
                    </TimelineOppositeContent>

                    <TimelineSeparator>
                        <TimelineConnector />
                            <TimelineDot>
                            </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>

                    <TimelineContent 
                        sx={{py: '12px', px: 2, my: '50px' }}
                        onMouseEnter={() => setHoverIndex(1)}
                        onMouseLeave={() => setHoverIndex(-1)}
                    >
                        <Typography variant="h6" component="span">
                            UNIVERSITY OF OTTAWA
                        </Typography>
                        <Typography sx={{fontWeight: 'bold'}}>
                            Graduate Research Assistant 
                        </Typography>
                        <Collapse in={hoverIndex == 1}>
                            <ThemeProvider theme={textTheme}>
                                <Typography variant='body1'>
                                    	Organization of conferences and speaker events<br />
                                    	Management and research for the department of criminology website and blog (http://uottawacrm.ca/)
                                </Typography>
                            </ThemeProvider>
                        </Collapse>
                        
                    </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    align="right"
                    variant="body2"
                    >
                        <ThemeProvider theme={textTheme}>
                            <Typography variant="body1" sx={{fontStyle: 'italic'}}>Sept. 2021 to Present</Typography>
                        </ThemeProvider>
                       
                    </TimelineOppositeContent>

                    <TimelineSeparator>
                        <TimelineConnector />
                            <TimelineDot sx={{backgroundColor: 'orange'}}>
                            </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>

                    <TimelineContent 
                        sx={{py: '12px', px: 2, my: '50px' }}
                        onMouseEnter={() => setHoverIndex(2)}
                        onMouseLeave={() => setHoverIndex(-1)}
                    >
                        <Typography variant="h6" component="span">
                            UNIVERSITY OF OTTAWA
                        </Typography>
                        <Typography sx={{fontWeight: 'bold'}}>
                            Graduate Teaching Assistant 
                        </Typography>
                        <Collapse in={hoverIndex == 2}>
                            <ThemeProvider theme={textTheme}>
                                <Typography variant='body1'>
                                    	Return assignments to students in accordance with established deadlines.<br />
                                    	Evaluate and grade examinations, assignments, or papers and record grades in accordance with the professors’ expectations.<br />
                                    	Taught class on the history of victimization to over 200 Introduction to Criminology students bimodally.
                                </Typography>
                            </ThemeProvider>
                        </Collapse>
                    </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    align="right"
                    variant="body2"
                    >
                        <ThemeProvider theme={textTheme}>
                            <Typography variant="body1" sx={{fontStyle: 'italic'}}>Sept. 2021 to Expected Graduation of 2023</Typography>
                        </ThemeProvider>
                    </TimelineOppositeContent>

                    <TimelineSeparator>
                        <TimelineConnector />
                            <TimelineDot sx={{backgroundColor: 'purple'}}>
                            </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>

                    <TimelineContent 
                        sx={{py: '12px', px: 2, my: '50px' }}
                        onMouseEnter={() => setHoverIndex(3)}
                        onMouseLeave={() => setHoverIndex(-1)}
                    >
                        <Typography variant="h6" component="span">
                            UNIVERSITY OF OTTAWA
                        </Typography>
                        
                        <Typography variant='subtitle1' sx={{fontWeight: 'bold'}}>
                            Master of Arts – Criminology
                        </Typography>
                        <Collapse in={hoverIndex == 3}>
                            <ThemeProvider theme={textTheme}>
                                <Typography>
                                	Recipient of a Canadian Graduate Scholarship (Masters) from the Government of Canada (SHHRC)<br />
                                	Recipient of an Ontario Graduate Scholarship (Masters) from the Government of Ontario (OGS-M)<br />
                                	Research area on the discussion of consent within BDSM-related Sexual Assault cases
                                </Typography>
                            </ThemeProvider>
                        </Collapse>
                    </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    align="right"
                    variant="body2"
                    >
                        <ThemeProvider theme={textTheme}>
                            <Typography variant="body1" sx={{fontStyle: 'italic'}}>July 2021 to Sept. 2021</Typography>
                        </ThemeProvider>
                       
                    </TimelineOppositeContent>

                    <TimelineSeparator>
                        <TimelineConnector />
                            <TimelineDot sx={{backgroundColor: 'orange'}}>
                            </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>

                    <TimelineContent 
                        sx={{py: '12px', px: 2, my: '50px' }}
                        onMouseEnter={() => setHoverIndex(4)}
                        onMouseLeave={() => setHoverIndex(-1)}
                    >
                        <Typography variant="h6" component="span">
                            HEALTH CANADA
                        </Typography>
                        <Typography sx={{fontWeight: 'bold'}}>
                            Program Support Officer 
                        </Typography>
                        <Collapse in={hoverIndex == 4}>
                            <ThemeProvider theme={textTheme}>
                                <Typography variant='body1'>
                                	Research and analysis of psychological risk factors to workplace harassment and violence<br />
                                	Developed training and surveys on psychological satisfaction in the workplace and how it relates to risk assessment in workplace violence<br />
                                	Produced reports for senior managers on the impact of teleworking on domestic violence and how to spot and address indicators of domestic violence through online meetings
                                </Typography>
                            </ThemeProvider>
                        </Collapse>
                    </TimelineContent>
                </TimelineItem>
                
                <TimelineItem>
                    <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    align="right"
                    variant="body2"
                    >
                        <ThemeProvider theme={textTheme}>
                            <Typography variant="body1" sx={{fontStyle: 'italic'}}>Sept. 2020 to April 2021</Typography>
                        </ThemeProvider>
                        
                    </TimelineOppositeContent>

                    <TimelineSeparator>
                        <TimelineConnector />
                            <TimelineDot sx={{backgroundColor: '#249225'}}>
                            </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>

                    <TimelineContent 
                        sx={{py: '12px', px: 2, my: '50px' }}
                        onMouseEnter={() => setHoverIndex(5)}
                        onMouseLeave={() => setHoverIndex(-1)}
                    >
                        <Typography variant="h6" component="span">
                            CENTRE FOR RESEARCH WITH VULNERABLE WOMEN AND YOUTH
                        </Typography>
                        <Typography sx={{fontWeight: 'bold'}}>
                            Intern 
                        </Typography>
                        <Collapse in={hoverIndex == 5}>
                        <ThemeProvider theme={textTheme}>
                            <Typography variant='body1'>
                            	Complete research and write research reports for funding and publication purposes<br />
                            	Implement and evaluate a trauma-informed, women-centred, strengths-based program with incarcerated provincial women offenders known as “Trauma to Strength”<br />
                            	Writing short scripts on various topics around trauma and resources available to incarcerated provincial women.<br />
                            </Typography>
                        </ThemeProvider>
                        </Collapse>
                        
                    </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    align="right"
                    variant="body2"
                    >
                        <ThemeProvider theme={textTheme}>
                            <Typography variant="body1" sx={{fontStyle: 'italic'}}>Sept. 2020 to April 2021</Typography>
                        </ThemeProvider>
                       
                    </TimelineOppositeContent>

                    <TimelineSeparator>
                        <TimelineConnector />
                            <TimelineDot sx={{backgroundColor: 'orange'}}>
                            </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>

                    <TimelineContent 
                        sx={{py: '12px', px: 2, my: '50px' }}
                        onMouseEnter={() => setHoverIndex(6)}
                        onMouseLeave={() => setHoverIndex(-1)}
                    >
                        <Typography variant="h6" component="span">
                            ST. THOMAS UNIVERSITY WRITING CENTRE
                        </Typography>
                        <Typography sx={{fontWeight: 'bold'}}>
                            Writing Tutor and Peer Tutor 
                        </Typography>
                        <Collapse in={hoverIndex == 6}>
                            <ThemeProvider theme={textTheme}>
                                <Typography variant='body1'>
                                	Assisted students with all aspects of their writing assignments, including planning essays, revising drafts, and properly incorporating sources into research papers<br />
                                	Aided students in understanding of various citation styles including APA, MLA and Chicago
                                </Typography>
                            </ThemeProvider>
                        </Collapse>
                    </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    align="right"
                    variant="body2"
                    >
                        <ThemeProvider theme={textTheme}>
                            <Typography variant="body1" sx={{fontStyle: 'italic'}}>Sept. 2018 - April 2021</Typography>
                        </ThemeProvider>
                    </TimelineOppositeContent>

                    <TimelineSeparator>
                        <TimelineConnector />
                            <TimelineDot sx={{backgroundColor: '#0066FF'}}>
                            </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>

                    <TimelineContent 
                        sx={{py: '12px', px: 2, my: '50px' }}
                        onMouseEnter={() => setHoverIndex(7)}
                        onMouseLeave={() => setHoverIndex(-1)}
                    >
                        <Typography variant="h6" component="span">
                            ST. THOMAS UNIVERSITY
                        </Typography>
                        <Typography sx={{fontWeight: 'bold'}}>
                            Bachelor of Arts with Distinction
                        </Typography>
                        <Collapse in={hoverIndex == 7}>
                            <ThemeProvider theme={textTheme}>
                                <Typography variant='body1'>
                                       Honours in Criminology	<br />
                                       Minors in Psychology and Human Rights<br />
                                       Thesis on the impact of the #MeToo social movement on the use of rape myth acceptance in judicial discourse entitled: “The Concept Of The ‘#MeToo Movement’ Has No Place In A Criminal Trial”: Rape Myth Acceptance And Moral Panic In Judicial Discourse In A Post-#MeToo Era
                                </Typography>
                            </ThemeProvider>
                        </Collapse>
                    </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    align="right"
                    variant="body2"
                    >
                        <ThemeProvider theme={textTheme}>
                            <Typography variant="body1" sx={{fontStyle: 'italic'}}>Summers from April 2018 - July 2021</Typography>
                        </ThemeProvider>
                       
                    </TimelineOppositeContent>

                    <TimelineSeparator>
                        <TimelineConnector />
                            <TimelineDot sx={{backgroundColor: 'orange'}}>
                            </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>

                    <TimelineContent 
                        sx={{py: '12px', px: 2, my: '50px' }}
                        onMouseEnter={() => setHoverIndex(8)}
                        onMouseLeave={() => setHoverIndex(-1)}
                    >
                        <Typography variant="h6" component="span">
                            GOVERNMENT OF CANADA PUBLIC SERVICE PAY CENTRE 
                        </Typography>
                        <Typography sx={{fontWeight: 'bold'}}>
                            Compensation Advisor 
                        </Typography>
                        <Collapse in={hoverIndex == 8}>
                            <ThemeProvider theme={textTheme}>
                                <Typography variant='body1'>
                                	Used several Microsoft Excel tools and calculators to process Maternity and Leave with Income Averaging benefit rates<br />
                                	Conducted extensive research and analysis on subjects such as employee data, collective agreement, pension and insurance plans, federal and provincial legislation and interpreting the application and intent behind various directives
                                </Typography>
                            </ThemeProvider>
                        </Collapse>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
        </Box>
    );
}