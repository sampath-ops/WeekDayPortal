/* eslint-disable */
// JobResults.js
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchJobsRequest, fetchJobsFailure, fetchJobsSuccess } from '../../store/jobSlice';
import Grid from '@mui/material/Grid';
import JobCard from "../JobCard/JobCard";
import InfiniteScroll from 'react-infinite-scroll-component';
import { toTitleCase } from '../JobCard/JobCard';

const JobResults = () => {
    const jobs = useSelector(state => state.jobs.jobs);
    const loading = useSelector(state => state.jobs.loading);
    const error = useSelector(state => state.jobs.error);
    const dispatch = useDispatch();
    const [hasMore, setHasMore] = useState(true);
    const [page, setPage] = useState(1);
    const filters = useSelector(state => state.jobFilter.filters); // Get filters from the Redux store

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

    const applyFilters = () => {
        let filtered = jobs.jdList;

        // Filter by roles
        if (filters.roles.length > 0) {
            filtered = filtered.filter(job => {
                if (job.jobRole) {
                    return filters.roles.includes(toTitleCase(job.jobRole));
                }
                return false;
            });
        }

        // Filter by experience
        if (filters.experience !== null) {
            filtered = filtered.filter(job => job.minExp === filters.experience);
        }

        // Filter by jobType
        if (filters.jobType?.length > 0) {
            filtered = filtered.filter(job => {
                const location = job.location.toLowerCase();
                if (filters.jobType.includes(toTitleCase(location))) {
                    return true;
                } else if (filters.jobType.includes('In Office')) {
                    return !['remote', 'hybrid'].includes(location);
                } else {
                    return false;
                }
            });
        }

        // Filter by minimum base pay
        if (filters.minSalary) {

            filtered = filtered.filter(job => {

                if (job.minJdSalary >= filters.minSalary) {
                    return true
                }
            });
        }

        // Filter by company name
        if (filters.company) {
            const companyNameFilter = filters.company.toLowerCase();
            filtered = filtered.filter(job => job.companyName.toLowerCase().includes(companyNameFilter));
        }

        return filtered;
    };

    const filteredJobs = applyFilters();

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <>
            {
                filteredJobs?.length > 0 ?
                    <InfiniteScroll
                        dataLength={filteredJobs ? filteredJobs.length : 0}
                        next={fetchJobs}
                        hasMore={hasMore}
                        endMessage={
                            <p style={{ textAlign: 'center' }}>
                                <b>No more jobs to load</b>
                            </p>
                        }
                    >
                        <Grid container spacing={8} className='job-results'>
                            {filteredJobs && filteredJobs.map((job, index) => <JobCard key={index} job={job} />)}
                        </Grid>
                    </InfiniteScroll> : <div>No jobs available</div>
            }
        </>
    );
};

export default JobResults;
