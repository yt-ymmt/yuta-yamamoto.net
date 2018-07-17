import React from 'react';
import FA from 'react-fontawesome';

const Icon = ({ name, size, spin, ...props }) => {
    const IconComponent = spin ? (
        <FA name={name} size={size} spin {...props} />
    ) : (
        <FA name={name} size={size} {...props} />
    );

    return IconComponent;
};

export default Icon;
