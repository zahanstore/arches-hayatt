import React from 'react';

const Hero: React.FC = () => {
    return (
        <div style={{
            background: 'linear-gradient(to bottom, #000000, #434343)',
            color: '#ffffff',
            padding: '100px 0',
            textAlign: 'center'
        }}>
            <h1 style={{ fontSize: '48px', fontWeight: 'bold' }}>ARCHES HAYATT</h1>
            <p style={{ fontSize: '20px', margin: '20px 0' }}>
                Experience luxurious living with stunning architecture and modern amenities.
            </p>
            <button style={{
                padding: '10px 20px',
                fontSize: '18px',
                backgroundColor: '#ffcc00',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer'
            }}>
                Learn More
            </button>
            <div style={{
                background: 'url(/path-to-building-image.jpg) center center / cover no-repeat',
                height: '400px',
                marginTop: '30px',
                position: 'relative'
            }}>
                <div style={{
                    position: 'absolute',
                    top: '20%',
                    left: '20%',
                    width: '60%',
                    height: '60%',
                    background: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '10px'
                }}>
                    {/* You can place building visualization or illuminated windows here */}
                </div>
            </div>
        </div>
    );
};

export default Hero;