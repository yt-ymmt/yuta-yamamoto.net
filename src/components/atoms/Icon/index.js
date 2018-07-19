import React from 'react';
import { withTheme } from 'styled-components';
import FA from 'react-fontawesome';

const Icon = ({ name, size, spin, ...props }) => {
    const IconComponent = spin ? (
        <FA name={name} size={size} spin {...props} />
    ) : (
        <FA name={name} size={size} {...props} />
    );

    return IconComponent;
};

export default withTheme(Icon);
