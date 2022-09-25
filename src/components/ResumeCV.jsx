import React from 'react';
import { useState } from 'react';
import { Box, Typography, ThemeProvider, createTheme, Collapse } from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineDot, TimelineConnector, TimelineContent, TimelineOppositeContent } from '@mui/lab';
import { School, Work, VolunteerActivism, People } from '@mui/icons-material';

export default function ResumeCV() {
    const [hoverIndex, setHoverIndex] = useState(-1);

    const textTheme = createTheme({
        typography: {
          fontFamily: [
            '',
            '',
          ].join(','),
        },});

    const timelineContentStyle = {
        p: 3,
        my: '50px',
        background: '#E8B4BC',
        boxSizing: 'border-box',
        borderRadius: '3px'
    }

    const blogSite = <a href="http://uottawacrm.ca/" target="_blank">http://uottawacrm.ca/</a>;

    const timelineContent = {
        range: ["Sept. 2022 to Present", "April 2022 to Present", "Jan. 2022 to Present", "Sept. 2021 to Present", "Sept. 2021 to Expected Graduation of 2023", "July 2021 to Sept. 2021",
            "Sept. 2020 to April 2021", "Sept. 2020 to April 2021", "Summers July 2019 to July 2021", "April 2019 to July 2019", "Sept. 2018 - April 2021", "April 2018 - Sept. 2018"],
        
        title: ["ALGONQUIN COLLEGE - VICTIMOLOGY RESEARCH CENTRE", "CIRCLES OF SUPPORT AND ACCOUNTABILITY", "UNIVERSITY OF OTTAWA", "UNIVERSITY OF OTTAWA",
            "UNIVERSITY OF OTTAWA", "HEALTH CANADA", "CENTRE FOR RESEARCH WITH VULNERABLE WOMEN AND YOUTH", "ST. THOMAS UNIVERSITY WRITING CENTRE", "GOVERNMENT OF CANADA PUBLIC SERVICE PAY CENTRE",
            "GOVERNMENT OF CANADA PUBLIC SERVICE PAY CENTRE", "ST. THOMAS UNIVERSITY", "GOVERNMENT OF CANADA PUBLIC SERVICE PAY CENTRE"],
        
        position: ["Field Placement Student", "Circle Volunteer", "Graduate Research Assistant", "Graduate Teaching Assistant", "Master of Arts – Criminology", "Program Support Officer",
        "Intern", "Writing Tutor and Peer Tutor", "Compensation Advisor", "Compensation Assistant", "Bachelor of Arts with Distinction", "Administrative Assitant"],
        
        description: ['• Research topics in the area of victimology\n• Projects worked on:\n\to Victim Services and Vicarious Resilience\n\to	Resilience and Victims of Violence\n\to	COVID-19 and System Responses to Homelessness\n', 
        "• Making sure Ken is alive\n• Making sure people that are around Ken are alive",
        "• Organization of conferences and speaker events\n• Management and research for the department of criminology website and blog",
        "• Return assignments to students in accordance with established deadlines.\n• Evaluate and grade examinations, assignments, or papers and record grades in accordance with the professors’ expectations.\n• Taught class on the history of victimization to over 200 Introduction to Criminology students bimodally.",
        "• Recipient of a Canadian Graduate Scholarship (Masters) from the Government of Canada (SHHRC)\n•	Recipient of an Ontario Graduate Scholarship (Masters) from the Government of Ontario (OGS-M)\n• Research area on the discussion of consent within BDSM-related Sexual Assault cases",
        "• Research and analysis of psychological risk factors to workplace harassment and violence\n• Developed training and surveys on psychological satisfaction in the workplace and how it relates to risk assessment in workplace violence\n• Produced reports for senior managers on the impact of teleworking on domestic violence and how to spot and address indicators of domestic violence through online meetings",
        "• Complete research and write research reports for funding and publication purposes\n• Implement and evaluate a trauma-informed, women-centred, strengths-based program with incarcerated provincial women offenders known as 'Trauma to Strength'\n• Writing short scripts on various topics around trauma and resources available to incarcerated provincial women.\n",
        "• Assisted students with all aspects of their writing assignments, including planning essays, revising drafts, and properly incorporating sources into research papers\n• Aided students in understanding of various citation styles including APA, MLA and Chicago",
        "• Used several Microsoft Excel tools and calculators to process Maternity and Leave with Income Averaging benefit rates.\n• Conducted extensive research and analysis on subjects such as employee data, collective agreement, pension and insurance plans, federal and provincial legislation and interpreting the application and intent behind various directives.",
        "insert",
        "• Honours in Criminology	\n• Minors in Psychology and Human Rights\n• Thesis on the impact of the #MeToo social movement on the use of rape myth acceptance in judicial discourse entitled: “The Concept Of The ‘#MeToo Movement’ Has No Place In A Criminal Trial”: Rape Myth Acceptance And Moral Panic In Judicial Discourse In A Post-#MeToo Era",
        "insert"],
        logo: [<People />, <VolunteerActivism />, <Work />, <Work />, <School sx={{mr: '1px'}} />, 
            <Work />, <People />, <Work />, <Work />, <Work />, <School sx={{mr: '1px'}}/>, <Work />],
        items: 12
    }

    return(
        <Box>
            <Timeline position='alternate' sx={{ p: 'min(60px, 3%)'}}>
            {[...Array(timelineContent.items)].map((x, i) =>
                <TimelineItem key={i}>
                    <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    align="right"
                    variant="body2"
                    >
                        <ThemeProvider theme={textTheme}>
                            <Typography variant="body1" sx={{fontStyle: 'italic'}}>{timelineContent.range[i]}</Typography>
                        </ThemeProvider>
                        
                    </TimelineOppositeContent>

                    <TimelineSeparator>
                        <TimelineConnector />
                            <TimelineDot sx={{background: '#3A3238'}}>
                                {timelineContent.logo[i]}
                            </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>

                    <TimelineContent>
                        <Box 
                            sx={timelineContentStyle} 
                            onMouseEnter={() => setHoverIndex(i)}
                            onMouseLeave={() => setHoverIndex(-1)}
                        >
                            <Typography variant="h6" component="span">
                                {timelineContent.title[i]}
                            </Typography>
                            <Typography sx={{fontWeight: 'bold'}}>
                                {timelineContent.position[i]}
                            </Typography>
                            <Collapse in={hoverIndex == i}>
                                <ThemeProvider theme={textTheme}>
                                    <Typography variant='body1' sx={{whiteSpace: 'pre-line'}}>
                                        {timelineContent.description[i]}
                                    </Typography>
                                </ThemeProvider>
                            </Collapse>
                        </Box>
                    </TimelineContent>
                </TimelineItem>
            )}

                
            </Timeline>
        </Box>
    );
}

