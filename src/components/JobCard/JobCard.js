import Grid from '@mui/material/Grid';
import { Paper } from '@mui/material';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import "./JobCard.css";

export function toTitleCase(text) {
    return text.toLowerCase().split(' ').map(function (word) {
        return word.replace(word[0], word[0].toUpperCase());
    }).join(' ');
}

const JobCard = ({ job }) => {

    return (
        <Grid item xs={12} md={6} lg={4} className='grid-item'>
            <Paper elevation={3} className='Card-content'>
                <Box sx={{ paddingLeft: 2, paddingTop: 2 }}>
                    <p className='posted-time'>⏳ Posted 3 days ago</p>
                </Box>

                <CardContent className='card-body'>
                    <Box className="company-role-info-container">
                        <img src={job.logoUrl} alt="" />
                        <div>
                            <div className='job-role'>
                                <p>{job.companyName}</p>
                                <p>{toTitleCase(job.jobRole)}</p>
                            </div>
                            <p>{toTitleCase(job.location)} { (job.minExp && job.maxExp) && `| Exp:${job.minExp}-${job?.maxExp} Years`} </p>
                        </div>
                    </Box>
                    <Typography className='estimated-salary'>
                       {(job.minJdSalary && job.maxJdSalary) && `Estimated Salary: ₹${job.minJdSalary} - ${job.maxJdSalary} LPA ✅`}
                    </Typography>
                    <Box className="job-details">
                        <p className='about-heading'>About Role:</p>
                        <Box>
                            <p className='company-details'> <span>{job.jobDetailsFromCompany}</span></p>
                        </Box>
                    </Box>
                    <Box className="view-job">
                        <a href={job.jdLink}>View job</a>
                    </Box>
                    <Box className="skills-required">
                        <h3>Skills</h3>
                        <div>
                            <span>Senior Engineer</span>
                            <span>Founding Engineer</span>
                            <span>Typescript</span>
                        </div>
                        {
                            job.minExp && <>
                                <h2>Minimum Experience</h2>
                                <p>{job.minExp}</p></>
                        }
                    </Box>
                </CardContent>
                <div className='apply-container'>
                    <button>
                        ⚡ Easy Apply
                    </button>
                </div>
            </Paper>
        </Grid>
    );
}

export default JobCard;