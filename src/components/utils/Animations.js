import { keyframes } from 'styled-components';

export const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const fadeInDown = keyframes`
    0% {
        opacity:0;
        transform: translate3d(0, -30px, 0);
    }
    100% {
        opacity:1;
        transform:none;
    }
`;

export const fadeIn = keyframes`
    0% {
        opacity:0;
    }
    100% {
        opacity:1;
    }
`;
