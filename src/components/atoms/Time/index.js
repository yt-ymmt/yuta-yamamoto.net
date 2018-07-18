import React from 'react';
import Moment from 'react-moment';

const Time = ({ format, time = new Date(), ...props }) => {
    return (
        <Moment format={format} {...props}>
            {time}
        </Moment>
    );
};

export default Time;
