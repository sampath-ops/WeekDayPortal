import React from 'react';
import RolesSelect from './RolesFilter';
import NumberOfEmployeesSelect from './NumberOfEmployeesFilter';
import { Box } from '@mui/material';
import "./JobFilter.css"
import ExperienceSelect from './ExperienceFilter';
import JobTypeSelect from './JobTypeFilter';
import TechStackSelect from './TeachStackFilter';

const JobFilter = () => {

    return (
        <Box display="grid" sx={{ gridTemplateColumns: "auto auto auto auto auto" }}>
            <Box>
                <RolesSelect />
            </Box>
            <Box>
                <NumberOfEmployeesSelect />
            </Box>
            <Box>
                <ExperienceSelect/>
            </Box>
            <Box>
                <JobTypeSelect/>
            </Box>
            <Box>
                <TechStackSelect/>
            </Box>
        </Box>
    );
};

export default JobFilter;
