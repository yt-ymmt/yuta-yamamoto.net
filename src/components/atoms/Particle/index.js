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
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: '#2E324F',
            zIndex: '-1'
        }}
        {...props}
    />
);
export default Particle;
