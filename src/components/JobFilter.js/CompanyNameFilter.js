import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCompany } from '../../store/JobFilterSlice';
import Input from '@mui/material/Input';

const CompanyNameFilter = () => {
  const companyNameFilter = useSelector(state => state.jobFilter.filters.company);
  const dispatch = useDispatch();

  const handleChange = event => {
    dispatch(setCompany(event.target.value));
  };

  return (
    <Input
      type="text"
      value={companyNameFilter}
      onChange={handleChange}
      placeholder="Search Company Name"
      sx={{
        border: '1px solid #ced4da',
        borderRadius: '4px',
        padding: '2px 10px',
        width: '100%',
        '&:focus': {
          borderColor: '#80bdff',
          boxShadow: '0 0 0 0.1rem rgba(0,123,255,.25)',
          boxShadow: 'none',
        },
        '&:before': {
            content: 'none',
          },
        '&:after': {
            content: 'none',
          },
      }}
    />
  );
};

export default CompanyNameFilter;
