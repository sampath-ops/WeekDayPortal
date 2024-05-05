import React from 'react';
import Select from 'react-select';
import { useDispatch, useSelector } from 'react-redux';
import { setTechStack } from '../../store/JobFilterSlice';

const options = [
  { value: 'Python', label: 'Python' },
  { value: 'Java', label: 'Java' },
  { value: 'Golang', label: 'Golang' },
  { value: 'React', label: 'React' },
  { value: 'C#', label: 'C#' },
  { value: 'C++', label: 'C++' },
  { value: 'Kotlin', label: 'Kotlin' },
  { value: 'Flask', label: 'Flask' },
  { value: 'AWS', label: 'AWS' }
];

const TechStackSelect = () => {
  const selectedTechStack = useSelector(state => state.jobFilter.filters.techStack);
  const dispatch = useDispatch();

  const handleChange = selectedOptions => {
    dispatch(setTechStack(selectedOptions ? selectedOptions.map(option => option.value) : []));
  };

  return (
    <Select
      value={options.filter(option => selectedTechStack.includes(option.value))}
      onChange={handleChange}
      options={options}
      isMulti
      placeholder="Tech Stack"
    />
  );
};

export default TechStackSelect;
