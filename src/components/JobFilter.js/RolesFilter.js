import React from 'react';
import Select from 'react-select';
import { useSelector, useDispatch } from 'react-redux';
import { setRoles } from '../../store/JobFilterSlice';

const roles = {
    engineering: [
        "Backend", "Frontend", "Fullstack", "Ios", "Flutter",
        "React Native", "Android", "Frontend", "Tech Lead",
        "Dev-ops", "Data Engineer", "Data Science"
    ],
    design: [
        "Design", "Designer Manager"
    ]
};

const options = Object.keys(roles).map(category => ({
    label: category,
    options: roles[category].map(role => ({ value: role, label: role }))
}));

const RolesSelect = () => {
    const selectedRoles = useSelector(state => state.jobFilter.filters.roles);
    const dispatch = useDispatch();

    const handleChange = selectedOptions => {
        dispatch(setRoles(selectedOptions.map(option => option.value)));
    };

    // Filter out selected roles from options
    const filteredOptions = options.map(category => ({
        label: category.label,
        options: category.options.filter(option => !selectedRoles.includes(option.value))
    }));

    return (
        <Select
            value={options.flatMap(category => category.options.filter(option => selectedRoles.includes(option.value)))}
            onChange={handleChange}
            options={options}
            isMulti
            placeholder="Roles"
        />
    );
};

export default RolesSelect;
