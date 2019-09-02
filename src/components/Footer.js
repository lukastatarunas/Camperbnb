import React from 'react'
import './Footer.css'

const Footer = () => {
	return (
    <footer className="footer">
        <div className="list-area">
            <ul className="list">
                <li>camperbnb</li>
                <li><a href="http://localhost:3000/">Home</a></li>
                <li><a href="https://camperbnb.herokuapp.com/hacks">#Our Hacks</a></li>
            </ul>
            <ul className="list">
                <li>Useful Links</li>
                <li><a href="https://unsplash.com">unsplash.com</a></li>
                <li><a href="https://thenounproject.com/term/camping-prohibited/995150/">thenounproject.com</a></li>
                <li><a href="https://www.creative-tim.com/product/gaia-bootstrap-template">creative-tim.com</a></li>
            </ul>
            <ul className="list">
                <li>Find me on</li>
                <li><a href="https://www.azimuth.ltd"><i className="fas fa-paper-plane"></i><span className="azimuth">AZIMUTH</span></a></li>
                <li><a href="https://github.com/lukastatarunas"><i className="fab fa-github"></i><span className="github">GITHUB</span></a></li>
                <li><a href="https://webdevlukas.herokuapp.com"><i className="fa fa-user" aria-hidden="true"></i><span className="portfolio">PORTFOLIO</span></a></li>
            </ul>
        </div>
        <hr class="hr"></hr>
        <p className="footer-par">© by Lukas Tatarūnas for Azimuth 2019</p>
    </footer>
	)
}

export default Footer