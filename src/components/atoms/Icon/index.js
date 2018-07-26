import React from 'react';
import { containPresenter } from '../../utils/Hoc';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faPencilAlt, faFile } from '@fortawesome/free-solid-svg-icons';

// IconFont configuration
library.add(faTwitter, faFacebook, faPencilAlt, faFile);

const IconPresenter = ({ iconName, ...props }) => (
    <FontAwesomeIcon icon={iconName} {...props} />
);

const IconContainer = ({ presenter, category, name, ...props }) => {
    const iconName = [category, name];
    return presenter({ iconName, ...props });
};

const Icon = containPresenter(IconContainer, IconPresenter);

export default Icon;
