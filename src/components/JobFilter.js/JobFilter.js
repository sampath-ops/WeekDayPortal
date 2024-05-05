import React from 'react';
import RolesSelect from './RolesFilter';
import { Box } from '@mui/material';
import "./JobFilter.css"
import ExperienceSelect from './ExperienceFilter';
import JobTypeSelect from './JobTypeFilter';
import TechStackSelect from './TeachStackFilter';
import MinBasePaySelect from './MinBasePaySelect';

const JobFilter = () => {

    return (
        <Box display="grid" sx={{ gridTemplateColumns: "auto auto auto auto auto" }}>
            <Box>
                <RolesSelect />
            </Box>
            <Box>
                <ExperienceSelect/>
            </Box>
            <Box>
                <JobTypeSelect/>
            </Box>
            <Box>
                <MinBasePaySelect/>
            </Box>
            <Box>
                <TechStackSelect/>
            </Box>
        </Box>
    );
};

export default JobFilter;
