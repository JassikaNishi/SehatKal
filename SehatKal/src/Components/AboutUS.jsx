import React from "react";
import "./aboutus.css";

function AboutUs() {
    return (
        <>
            <div className="about">
                <div className="navbar">
                    <div className="logo-container">
                        <div className="logo">
                            <span className="logo1"></span>
                            FitTrack
                        </div>
                    </div>

                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About Us</a>
                            <div className="dropdown">
                                <a href="#aboutus">About Us</a>
                                <a href="#product">Our Product</a>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="content-section">
                    <div className="section-title">About Us</div>
                    <div className="section-content">
                        <p>
                            At <strong>FitTrack</strong>, we are passionate about helping students lead healthier, more active lives. Our mission is to provide an easy-to-use platform that empowers students to track their daily fitness and wellness activities. We believe that a balanced lifestyle—incorporating regular physical activity and proper hydration—is essential to a student's well-being and academic success.
                        </p>
                        <h3>Our Mission</h3>
                        <p>
                            Our mission is to deliver an accessible and effective way for students to track their daily steps, water intake, and fitness goals, helping them stay motivated to improve their physical and mental health.
                        </p>
                        <h3>Our Vision</h3>
                        <p>
                            We envision a future where students embrace healthy living habits that will lead them to success both in and out of the classroom. We want to foster a community that actively encourages and supports fitness and well-being.
                        </p>
                    </div>
                </div>

                <div className="content-section solid-background">
                    <div className="section-title">Our Values</div>
                    <div className="section-content">
                        <ul>
                            <li><strong>Innovation:</strong> We strive to provide new, creative tools that support students' health and fitness goals.</li>
                            <li><strong>Quality:</strong> We are committed to delivering high-quality, user-friendly solutions for students' wellness.</li>
                            <li><strong>Integrity:</strong> We operate with transparency and honesty, offering solutions that students can trust.</li>
                            <li><strong>Student Focus:</strong> We are dedicated to helping students lead healthier, balanced lives that improve both their academic and personal well-being.</li>
                        </ul>
                    </div>
                </div>

                <footer className="footer">
                    <div className="section-content">
                        &copy; 2024 FitTrack. All rights reserved.
                    </div>
                </footer>
            </div>
        </>
    );
}

export default AboutUs;
