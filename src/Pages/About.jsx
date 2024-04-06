import React, { useState } from 'react';

import "./About.css";

function About () {
    const [contactVisible, setContactVisible] = useState(false);

function showData() {
    setContactVisible(true);
}

    return (
    <div className="about page">
            <h3>Jennifer Navarro</h3>

    {contactVisible ? <div className="box">
        <p>
            For questions or concerns please email <b>jennifer.navarro.sudo@gmail.com</b>
        </p>
    </div> : null }

        <button onClick={showData} className="btn btn-outline-dark"> View Contact Info</button>
    </div>
    );
}

export default About;