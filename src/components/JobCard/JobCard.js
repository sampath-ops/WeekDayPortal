import Grid from '@mui/material/Grid';
import { Paper } from '@mui/material';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import "./JobCard.css";

const JobCard = () => {
  
    return (
            <Grid item xs={12} md={6} lg={4}>
                <Paper elevation={3} className='Card-content'>
                    <Box sx={{ paddingLeft: 2, paddingTop: 2 }}>
                        <p className='posted-time'>⏳ Posted 3 days ago</p>
                    </Box>

                    <CardContent className='card-body'>
                        <Box className="company-role-info-container">
                            <img src="https://storage.googleapis.com/weekday-assets/airtableAttachment_1714542815382_7w5g1.jpg" alt="" />
                            <div>
                                <div className='job-role'>
                                    <p>FlexWash Technologies</p>
                                    <p>Senior Engineer</p>
                                </div>
                                <p>india | Exp: 5-5 Years</p>
                            </div>
                        </Box>
                        <Typography className='estimated-salary'>
                            Estimated Salary: <span>₹30 - 60 LPA</span> <span> ✅</span>
                        </Typography>
                        <Box className="job-details">
                            <p className='about-heading'>About Company:</p>
                            <Box>
                                <p className='about-subheading'><strong>About us</strong></p>
                                <p className='company-details'> <span>Flex Wash is an operating system for the car wash industry. Our solutions help owners manage their operations and grow revenue. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad aspernatur, a ullam, praesentium, sunt velit in sed assumenda dignissimos animi incidunt commodi molestiae laboriosam aliquid ipsum iusto delectus veniam laudantium rem? Blanditiis laboriosam ex delectus ut nulla maiores dolorem reprehenderit omnis magnam exercitationem esse accusamus eligendi beatae, laudantium magni a. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta voluptate nobis consequatur, cum quisquam placeat eligendi sit iste debitis, id quibusdam nesciunt dolores fugit provident sed? Quod, distinctio minima. Ex.</span></p>
                            </Box>
                            {/* <p className='about-heading'>About Role:</p>
                                <Box>
                                    <p>Overview</p>
                                    <p>Company name:</p>
                                    <p><strong>FlexWash Technologies </strong></p>
                                </Box> */}
                        </Box>
                        <Box className="view-job">
                            <a href="#">View job</a>
                        </Box>
                        <Box className="skills-required">
                            <h3>Skills</h3>
                            <div>
                                <span>Senior Engineer</span>
                                <span>Founding Engineer</span>
                                <span>Typescript</span>
                            </div>
                            <h2>Minimum Experience</h2>
                            <p>5 years</p>
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