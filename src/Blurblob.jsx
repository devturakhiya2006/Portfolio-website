import React from 'react';
import PropTypes from 'prop-types';

const Blurblob = ({ position, size }) => {
    const { top, left } = position;
    const { width, height } = size;

    return (
        <div 
            className='absolute -z-10 animate-blob' 
            style={{
                top: top,
                left: left,
                width: width,
                height: height,
                transform: 'translate(-50%,-50%)',
            }}
        >
            {/* Updated Gradient: Indigo-Violet-Blue blend for consistent premium lighting */}
            <div 
                className='w-full h-full rounded-full opacity-30 blur-3xl mix-blend-screen'
                style={{
                    background: 'linear-gradient(135deg, #4F46E5 0%, #7C3AED 50%, #2563EB 100%)'
                }}
            >
            </div>
        </div>
    );
};

Blurblob.propTypes = {
    position: PropTypes.shape({
        top: PropTypes.string,
        left: PropTypes.string,
    }),
    size: PropTypes.shape({
        width: PropTypes.string,
        height: PropTypes.string,
    }),
};

export default Blurblob;