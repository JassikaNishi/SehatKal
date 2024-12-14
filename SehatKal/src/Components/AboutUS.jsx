import React from "react";
import "./aboutus.css";

function About() {
    return (
        <>
            <div className="about">
                <div className="navbar">
                    <div className="logo-container">
                        <div className="logo">
                            <span className="logo1"></span>
                            ROSE
                        </div>
                    </div>

                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About Us</a>
                            <div className="dropdown">
                                <a href="#aboutus">About Us</a>
                                <a href="#product">About Our Product</a>
                            </div>
                        </li>
                       
                       
                        
                        
                    </ul>
                </div>

                <div className="content-section">
                    <div className="section-title">About Us</div>
                    <div className="section-content">
                        <p>
                            ROSE is a dynamic team of tech enthusiasts dedicated to bringing innovative solutions to the market.
                            Our passion for technology drives us to create products that not only meet the needs of today but also
                            anticipate the demands of tomorrow. Explore our site to learn more about our services, our team, and how
                            we can help you achieve your goals.
                        </p>
                        <h3>Our Mission</h3>
                        <p>
                            At ROSE, our mission is to leverage cutting-edge technology to deliver high-quality, user-friendly products
                            that enhance productivity and improve the lives of our customers.
                        </p>
                        <h3>Our Vision</h3>
                        <p>
                            We envision a future where technology seamlessly integrates into daily life, making tasks easier and more
                            efficient. Our goal is to be at the forefront of this technological revolution, providing solutions that
                            are not only innovative but also accessible to everyone.
                        </p>
                    </div>
                </div>

                <div className="content-section solid-background">
                    <div className="section-title">Our Values</div>
                    <div className="section-content">
                        <ul>
                            <li><strong>Innovation:</strong> We strive to bring new and creative solutions to the market.</li>
                            <li><strong>Quality:</strong> We are committed to delivering high-quality products that exceed customer expectations.</li>
                            <li><strong>Integrity:</strong> We conduct our business with honesty and transparency.</li>
                            <li><strong>Customer Focus:</strong> We put our customers at the center of everything we do.</li>
                        </ul>
                    </div>
                </div>

                <footer className="footer">
                    <div className="section-content">
                        &copy; 2024 ROSE. All rights reserved.
                    </div>
                </footer>
            </div>
        </>
    );
}

export default About;