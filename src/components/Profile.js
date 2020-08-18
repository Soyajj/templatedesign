import React from 'react';
import Logo from './profile.jpeg';

function Profile() {
    return (
        <div className = "profile">
            <div className = "profile-left">
                <img src={Logo} alt= "profile"/>               
                <h3>Introduction</h3>
                <h5>Write your Introduction here...</h5>
                <h3>Skills</h3>
                <h5>Skills</h5>
                <h3>Hobbies and Interests</h3>
                <h5>Say something about your hobbies and interests..</h5>
            </div>
            <div className = "profile-right">
            <h3>Educational Background</h3>
                <h5>
                    College,Schools
                </h5>
            </div>
        </div>
    )
}

export default Profile
