// JobResults.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchJobsRequest, fetchJobsFailure, fetchJobsSuccess } from '../../store/jobSlice';
import Grid from '@mui/material/Grid';
import JobCard from "../JobCard/JobCard";

const JobResults = () => {
    const jobs = useSelector(state => state.jobs.jobs);
    const loading = useSelector(state => state.jobs.loading);
    const error = useSelector(state => state.jobs.error);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchJobsRequest());
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        const body = JSON.stringify({
            "limit": 10,
            "offset": 0
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body
        };
        fetch("https://api.weekday.technology/adhoc/getSampleJdJSON",requestOptions)
            .then((response) => response.json())
            .then((result) => dispatch(fetchJobsSuccess(result)))
            .catch((error) => dispatch(fetchJobsFailure(error.message)));
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    console.log("jobs: ",jobs)
    return (
        <Grid container spacing={8} className='job-results'>
            {jobs.jdList && jobs.jdList.map(job => <JobCard key={job.jdUid} job={job} />)}
        </Grid>
    );
};

export default JobResults;
