import React from 'react';
import About from '../About/About';
import Background from '../Background/Background';
import Form from '../Form/Form';
import './Home.css'

const Home = () => {
    return (
        <div>
            <div>
                <Background></Background>
                <About></About>

            </div>
            <Form></Form>
        </div>
    );
};

export default Home;