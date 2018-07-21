import React from 'react';
import Particles from 'react-particles-js';

const Particle = ({ ...props }) => (
    <Particles
        params={{
            particles: {
                line_linked: {
                    enable: false,
                    shadow: {
                        enable: false,
                        color: '#3CA9D1',
                        blur: 5
                    }
                }
            },
            resize: true
        }}
        style={{
            width: '100%',
            height: '100%',
            backgroundColor: '#2E324F'
        }}
        {...props}
    />
);
export default Particle;
