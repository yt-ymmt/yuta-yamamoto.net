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
            backgroundImage:
                'radial-gradient( circle farthest-corner at 12.3% 19.3%,  rgba(85,88,218,1) 0%, rgba(95,209,249,1) 100.2% )',
            zIndex: '-1'
        }}
        {...props}
    />
);
export default Particle;
