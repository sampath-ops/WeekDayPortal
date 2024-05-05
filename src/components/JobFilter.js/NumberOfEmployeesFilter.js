import React from 'react';
import Select from 'react-select';
import { useSelector, useDispatch } from 'react-redux';
import { setNumberOfEmployees } from '../../store/JobFilterSlice';

const numberOfEmployeesOptions = [
  { value: '1-10', label: '1-10' },
  { value: '11-20', label: '11-20' },
  { value: '21-50', label: '21-50' },
  { value: '51-100', label: '51-100' }
];

const NumberOfEmployeesSelect = () => {
  const selectedNumberOfEmployees = useSelector(state => state.jobFilter.filters.numberOfEmployees);
  const dispatch = useDispatch();

  const handleChange = selectedOption => {
    dispatch(setNumberOfEmployees(selectedOption ? selectedOption.value : null));
  };

  return (
    <Select
      value={numberOfEmployeesOptions.find(option => option.value === selectedNumberOfEmployees)}
      onChange={handleChange}
      options={numberOfEmployeesOptions}
      isMulti
      placeholder="Number of employees"
    />
  );
};

export default NumberOfEmployeesSelect;
