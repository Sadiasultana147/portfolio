import React from 'react';
import Background from '../Background/Background';
import Form from '../Form/Form';
import './Home.css'

const Home = () => {
    return (
        <div>
            <div>
                <Background></Background>
                {/* <div class="typing">
                <h2 class="text-uppercase">Hello.....</h2>
            </div> */}
            </div>
            <Form></Form>
        </div>
    );
};

export default Home;