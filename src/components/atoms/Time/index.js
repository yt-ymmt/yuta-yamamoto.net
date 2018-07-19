import React from 'react';
import Moment from 'react-moment';
import { withTheme } from 'styled-components';

const Time = ({ format, time = new Date(), ...props }) => {
    return (
        <Moment format={format} {...props}>
            {time}
        </Moment>
    );
};

export default withTheme(Time);
