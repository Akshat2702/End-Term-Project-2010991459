import React from 'react';
import { Link } from 'react-router-dom';

export default function Thanku() {
    return (
        <div className="content">
            <div className="wrapper-1">
                <div className="wrapper-2">
                    <h1 className='h1'>Thank you !</h1>
                    <p>It is a pleasure to be of help to you.</p>
                    <p>Our correspondent will personally be assigned to work with you soon.</p>
                    <Link to='/'><button className="go-home">Back To Home</button></Link>
                </div>
                <div className="footer-like">
                    <p>
                        We will get back to you soon!
                    </p>
                </div>
            </div>
        </div>
    );
}
