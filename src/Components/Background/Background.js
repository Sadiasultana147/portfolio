import React from 'react';
import me from "../../../src/images/me.jpg";
import TypeAnimation from 'react-type-animation';

import './Background.css'
import Header from '../Header/Header';

const Background = () => {
    return (
        <div >
            <div class="wrapper ">
                <Header></Header>

                <div>


                    <img style={{ marginTop: "100px" }} width="150" height="150" className="rounded-circle " src={me} alt="" />

                    <h3 style={{ color: "white" }}>Hi ! <span style={{ color: " cyan" }}>I'm SADIA SULTANA</span></h3>


                    <TypeAnimation

                        cursor={true}
                        sequence={[
                            'Front-End Developer',
                            2000,
                            'WEB Developer',
                            2000,
                            'JS Developer',
                            2000,
                            'React Developer',
                            2000,
                        ]}
                        wrapper="h2"
                        repeat={Infinity}
                    />
                </div>


                <div class="boxes">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>

        </div>
    );
};

export default Background;