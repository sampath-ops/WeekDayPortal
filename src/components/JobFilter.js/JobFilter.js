import React from 'react';
import RolesSelect from './RolesFilter';
import { Box } from '@mui/material';
import ExperienceSelect from './ExperienceFilter';
import JobTypeSelect from './JobTypeFilter';
import TechStackSelect from './TeachStackFilter';
import MinBasePaySelect from './MinBasePaySelect';
import CompanyNameFilter from './CompanyNameFilter';

const JobFilter = () => {

    return (
        <Box
            display="grid"
            sx={{
                gridTemplateColumns: ["1fr", "1fr 1fr", "1fr 1fr 1fr", "1fr 1fr 1fr 1fr 1fr"],
                gap: "6px",
                paddingLeft: ["20px", "50px", "85px", "100px"],
                paddingRight: ["20px", "50px", "85px", "100px"],
            }}
        >
            <Box>
                <RolesSelect />
            </Box>
            <Box>
                <ExperienceSelect />
            </Box>
            <Box>
                <JobTypeSelect />
            </Box>
            <Box>
                <MinBasePaySelect />
            </Box>
            <Box>
                {/* this wont work cause of lack of data */}
                <TechStackSelect />
            </Box>
            <Box>
                <CompanyNameFilter />
            </Box>
        </Box>
    );
};

export default JobFilter;
