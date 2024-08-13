import React from 'react';
import { useNavigate } from 'react-router-dom';


const AboutPage = () => {
   const navigate = useNavigate();

    const handleMainClick = () => {
        navigate('/');
    };

	return (
        <div>
            <h1>About Page</h1>
            <p>Learn more about us on this page.</p>
            <button style={styles.navButton} onClick={handleMainClick}>
                Main Page
            </button>
            
        </div>
    );
};


const styles = {
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


export default AboutPage;

