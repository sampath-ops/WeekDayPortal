import React from 'react';
import Select from 'react-select';
import { useDispatch, useSelector } from 'react-redux';
import { setExperience } from '../../store/JobFilterSlice';

const options = [...Array(10)].map((_, index) => ({ value: index + 1, label: `${index + 1}` }));

const ExperienceSelect = () => {
  const selectedExperience = useSelector(state => state.jobFilter.filters.experience);
  const dispatch = useDispatch();

  const handleChange = selectedOption => {
    dispatch(setExperience(selectedOption ? selectedOption.value : null));
  };
  
  return (
    <Select
      value={options.find(option => option.value === selectedExperience)}
      onChange={handleChange}
      options={options}
      placeholder="Experience"
    />
  );
};

export default ExperienceSelect
