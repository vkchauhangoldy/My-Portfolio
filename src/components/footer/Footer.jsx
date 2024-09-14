import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin, FaPhoneAlt, FaTwitter } from "react-icons/fa"
import "./Footer.css"
import { FaLocationDot } from "react-icons/fa6"

const Footer = () => {
    return (
        <div className="bg">
            <footer className="footer">
                <svg
                    className="footer-wave-svg"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 100"
                    preserveAspectRatio="none"
                >
                    <path
                        className="footer-wave-path"
                        d="M851.8,100c125,0,288.3-45,348.2-64V0H0v44c3.7-1,7.3-1.9,11-2.9C80.7,22,151.7,10.8,223.5,6.3C276.7,2.9,330,4,383,9.8 c52.2,5.7,103.3,16.2,153.4,32.8C623.9,71.3,726.8,100,851.8,100z"
                    />
                </svg>
                <div className="footer-content">
                    <div className="footer-content-column">

                        <div className="footer-menu">
                            <h2 className="footer-menu-name"> Contact Here</h2>
                            <ul id="menu-get-started" className="footer-menu-list">
                                <li className="menu-item menu-item-type-post_type menu-item-object-product">
                                    <span > <FaLocationDot /> Bangalore, Karnataka, India</span>
                                </li>
                                <li className="menu-item menu-item-type-post_type menu-item-object-product">

                                    <span > <FaPhoneAlt /> +91 - 8948499916</span>
                                </li>
                                <li className="menu-item menu-item-type-post_type menu-item-object-product">
                                    <span > <FaEnvelope /> vkchauhagoldy@gmail.com</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-content-column">
                        <div className="footer-menu">
                            <h2 className="footer-menu-name">Expertise</h2>
                            <ul id="menu-company" className="footer-menu-list">
                                <li className="menu-item menu-item-type-post_type menu-item-object-page">
                                    <a href="#">Full Stack Development</a>
                                </li>
                                <li className="menu-item menu-item-type-taxonomy menu-item-object-category">
                                    <a href="#">App Development</a>
                                </li>
                                <li className="menu-item menu-item-type-post_type menu-item-object-page">
                                    <a href="#">Problem Solving</a>
                                </li>
                                <li className="menu-item menu-item-type-post_type menu-item-object-page">
                                    <a href="#">DSA</a>
                                </li>
                            </ul>
                        </div>

                    </div>
                    <div className="footer-content-column">
                        <div className="footer-menu">
                            <h2 className="footer-menu-name"> Quick Links</h2>
                            <ul id="menu-quick-links" className="footer-menu-list">
                                <li className="menu-item menu-item-type-custom menu-item-object-custom">
                                    <a rel="noopener noreferrer" href="/">
                                        Home
                                    </a>
                                </li>
                                <li className="menu-item menu-item-type-custom menu-item-object-custom">
                                    <a rel="noopener noreferrer" href="/about">
                                        About
                                    </a>
                                </li>
                                <li className="menu-item menu-item-type-post_type menu-item-object-page">
                                    <a href="/project">Projects</a>
                                </li>
                                <li className="menu-item menu-item-type-post_type menu-item-object-page">
                                    <a href="/contact">Contact</a>
                                </li>

                            </ul>
                        </div>
                    </div>
                    <div className="footer-content-column">
                        <div className="footer-call-to-action">
                            <h2 className="footer-call-to-action-title"> Let&apos;s Chat</h2>
                            <p className="footer-call-to-action-description">
                                {" "}
                                Do you  have any query?
                            </p>
                            <a
                                className="footer-call-to-action-button button"
                                href="contact"
                                target="_self"
                            >
                                {" "}
                                Get in Touch{" "}
                            </a>
                            <div className="footer-social-links d-flex">
                                {" "}
                                <a className="footer-social-link " href="https://www.linkedin.com/in/vinay-kumar-chauhan-543203226" target="_blank">
                                    <span className="hidden-link-text">Linkedin</span>
                                    <FaLinkedin color="white" />
                                </a>
                                <a className="footer-social-link " href="https://x.com/vk_goldy" target="_blank">
                                    <span className="hidden-link-text">Twitter</span>
                                    <FaTwitter color="white" />
                                </a>
                                <a className="footer-social-link " href="https://www.instagram.com/vk_chauhan_goldy/" target="_blank">
                                    <span className="hidden-link-text">Instagram</span>
                                    <FaInstagram color="white" />

                                </a>
                                <a className="footer-social-link " href="https://github.com/vkchauhangoldy" target="_blank">
                                    <span className="hidden-link-text">Github</span>
                                    <FaGithub color="white" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright">
                    <div className="footer-copyright-wrapper">
                        <p className="footer-copyright-text">
                            <a className="footer-copyright-link" href="" target="_self">
                                {" "}
                                ©2024. | Copyright. | All rights reserved.{" "}
                            </a>
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
