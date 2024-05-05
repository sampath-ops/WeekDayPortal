import React from 'react';
import Select from 'react-select';
import { useDispatch, useSelector } from 'react-redux';
import { setMinSalary } from '../../store/JobFilterSlice';

const options = [
    { value: 0, label: '0L' },
    { value: 10, label: '10L' },
    { value: 20, label: '20L' },
    { value: 30, label: '30L' },
    { value: 40, label: '40L' },
    { value: 50, label: '50L' },
    { value: 60, label: '60L' },
    { value: 70, label: '70L' },
];
const MinBasePaySelect = () => {
    
    const selectedMinBasePay = useSelector(state => state.jobFilter.filters.minBasePay);
    const dispatch = useDispatch();

    const handleChange = selectedOption => {
        dispatch(setMinSalary(selectedOption ? selectedOption.value : null));
    };

    return (
        <Select
            value={options.find(option => option.value === selectedMinBasePay)}
            onChange={handleChange}
            options={options}
            placeholder="Minimum Base Pay Salary"
            isClearable={true}
        />
    );
};

export default MinBasePaySelect;
