import Grid from '@mui/material/Grid';
import JobCard from "../JobCard/JobCard"
const JobResults = () => {
    return (
            <Grid container spacing={8} className='job-results'>
                <JobCard />
                <JobCard />
                <JobCard />
            </Grid>
    );
}

export default JobResults;