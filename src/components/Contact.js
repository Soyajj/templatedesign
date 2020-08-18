import React from 'react';
import Map from './map.jpg'

function Contact() {
    return (
        <div className = "contact">
            <div className = "contact-left">
                <h3>Email</h3>
                <h5>someone@example.com</h5>
                <h3>Phone Number</h3>
                <h5>+977(98########)</h5>
                <h3>Mailing Address</h3>
                <h5>Kathmandu,NP</h5>
            </div>
            <div className="map">
                <img src={Map} alt="map" />
                <h5>Write something about your Hometown...</h5> 
            </div>
        </div>
    )
}

export default Contact
