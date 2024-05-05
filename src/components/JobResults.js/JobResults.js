// JobResults.js
import React, { useEffect,useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchJobsRequest, fetchJobsFailure, fetchJobsSuccess } from '../../store/jobSlice';
import Grid from '@mui/material/Grid';
import JobCard from "../JobCard/JobCard";
import InfiniteScroll from 'react-infinite-scroll-component';

const JobResults = () => {
    const jobs = useSelector(state => state.jobs.jobs);
    const loading = useSelector(state => state.jobs.loading);
    const error = useSelector(state => state.jobs.error);
    const dispatch = useDispatch();
    const [hasMore, setHasMore] = useState(true);
    const [page, setPage] = useState(1);

    useEffect(() => {
        dispatch(fetchJobsRequest());
        fetchJobs()
    }, []);

    const fetchJobs = () => {
        const limit = 10;
        const offset = jobs.jdList ? jobs.jdList.length : 0;
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        const body = JSON.stringify({
            "limit": limit,
            "offset": offset
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body
        };
        fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                if (result.jdList.length === 0) {
                    setHasMore(false);
                } else {
                    dispatch(fetchJobsSuccess({
                        jdList: [...(jobs.jdList || []), ...result.jdList],
                        totalCount: result.totalCount
                    }));
                    setPage(page + 1);
                }
            })
            .catch((error) => dispatch(fetchJobsFailure(error.message)));
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <InfiniteScroll
        dataLength={jobs.jdList ? jobs.jdList.length : 0}
        next={fetchJobs}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={
            <p style={{ textAlign: 'center' }}>
                <b>No more jobs to load</b>
            </p>
        }
    >
        <Grid container spacing={8} className='job-results'>
            {jobs.jdList && jobs.jdList.map((job, index) => <JobCard key={index} job={job} />)}
        </Grid>
    </InfiniteScroll>
    );
};

export default JobResults;
