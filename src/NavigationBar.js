import React from 'react';
import { useNavigate } from 'react-router-dom';

const NavigationBar = () => {
    const navigate = useNavigate();

    const handleHomeClick = () => {
        navigate('/home');
    };

    const handleAboutClick = () => {
        navigate('/about');
    };

    const handleContactClick = () => {
        navigate('/contact');
    };

    return (
        <nav style={styles.navbar}>
            <button style={styles.navButton} onClick={handleHomeClick}>
                Home
            </button>
            <button style={styles.navButton} onClick={handleAboutClick}>
                About
            </button>
            <button style={styles.navButton} onClick={handleContactClick}>
                Contact
            </button>
        </nav>
    );
};

const styles = {
    navbar: {
        display: 'flex',
        justifyContent: 'flex-start', // Align buttons to the left
        alignItems: 'center',         // Center buttons vertically
        padding: '10px',
        backgroundColor: '#333',
        position: 'absolute',         // Position the navbar at the top-left
        top: '0',                     // Align to the top
        left: '0',                    // Align to the left
    },
    navButton: {
        padding: '10px 20px',
        backgroundColor: '#fff',
        color: '#333',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        marginRight: '10px',         // Add space between buttons
        height : '100px',
        width : '200px'
    
    },
};

export default NavigationBar;
