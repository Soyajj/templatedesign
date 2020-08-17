import React from 'react';
import '../App.css';

function Banner() {
    return (
        <div className = "banner">
            <div className = "bannerText">
                <h1>Minimal</h1>
                <h2>Website</h2>
                <h4>Design</h4>
            </div>
            <div className = "socials">
                <a href="https://instagram.com/" target="&blank"><i className = "fa fa-instagram" style= {{color:'#E1306C'}}/></a>
                <a href="https://twitter.com/" target="&blank"><i className = "fa fa-twitter" style= {{color:'#00acee'}}/></a>
                <a href="https://github.com/" target="&blank"><i className = "fa fa-github" id="github" /></a>
                <a href="https://youtube.com/" target="&blank"><i className = "fa fa-pinterest" style= {{color:'#c4302b '}} /></a>
                <a href="https://linkedin.com/" target="&blank"><i className = "fa fa-linkedin" style={{color:'#0e76a8'}} /></a>
            </div>
        </div>
    )
}

export default Banner
