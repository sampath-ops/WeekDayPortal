import React from 'react';
import Select from 'react-select';
import { useDispatch, useSelector } from 'react-redux';
import { setJobType } from '../../store/JobFilterSlice';

const options = [
  { value: 'Remote', label: 'Remote' },
  { value: 'Hybrid', label: 'Hybrid' },
  { value: 'In-office', label: 'In-office' }
];

const JobTypeSelect = () => {
  const selectedJobType = useSelector(state => state.jobFilter.filters.jobType);
  const dispatch = useDispatch();

  const handleChange = selectedOption => {
    dispatch(setJobType(selectedOption ? selectedOption.value : null));
  };

  return (
    <Select
      value={options.find(option => option.value === selectedJobType)}
      onChange={handleChange}
      options={options}
      placeholder="Remote"
    />
  );
};

export default JobTypeSelect;
