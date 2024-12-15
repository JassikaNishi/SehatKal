import React from 'react';

export default function AboutUs() {
  const backgroundStyle = {
    backgroundImage: 'url("./aboutus.jpg")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'top',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
  };

  const contentBoxStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: '15px',
    padding: '30px',
    maxWidth: '800px',
    textAlign: 'center',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  };

  const headingStyle = {
    fontSize: '3rem',
    marginBottom: '20px',
    color: '#333',
  };

  const subHeadingStyle = {
    fontSize: '2rem',
    marginTop: '20px',
    color: '#555',
  };

  const paragraphStyle = {
    fontSize: '1.2rem',
    lineHeight: '1.6',
    color: '#666',
  };

  const listStyle = {
    listStyleType: 'disc',
    marginLeft: '20px',
    textAlign: 'left',
    color: '#666',
  };

  return (
    <div style={backgroundStyle}>
      <div style={contentBoxStyle}>
        <h1 style={headingStyle}>About Us</h1>
        <div>
          <h2 style={subHeadingStyle}>Our Mission</h2>
          <p style={paragraphStyle}>
            At SehatKal, our mission is to improve healthcare accessibility and awareness by
            leveraging the power of technology. We are dedicated to ensuring that everyone has access
            to accurate health information and quality services.
          </p>
        </div>
        <div>
          <h2 style={subHeadingStyle}>Our Vision</h2>
          <p style={paragraphStyle}>
            We envision a world where technology bridges gaps in healthcare, empowering individuals
            to take control of their health and well-being.
          </p>
        </div>
        <div>
          <h2 style={subHeadingStyle}>Our Values</h2>
          <p style={paragraphStyle}>
            Our core values include empathy, innovation, and inclusivity. We strive to create solutions
            that are accessible to all, regardless of location or background.
          </p>
        </div>
        <div>
          <h2 style={subHeadingStyle}>What We Offer</h2>
          <ul style={listStyle}>
            <li>Comprehensive health education resources.</li>
            <li>Technology-driven tools for self-diagnosis and monitoring.</li>
            <li>Accessible healthcare services through strategic partnerships.</li>
            <li>Community support for mental and physical well-being.</li>
          </ul>
        </div>
        <div>
          <h2 style={subHeadingStyle}>Our Team</h2>
          <p style={paragraphStyle}>
            SehatKal is powered by a team of dedicated professionals, including healthcare experts,
            software developers, and community leaders. Together, we work to make healthcare
            accessible, equitable, and efficient.
          </p>
        </div>
      </div>
    </div>
  );
}
