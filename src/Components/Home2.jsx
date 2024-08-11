import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Home from './Home';
import About from './About';
import Blog from './Blog';
import Contact from './Contact';
import { Carousel } from 'react-responsive-carousel';

const headerStyle = {
  background: 'rgba(0, 0, 0, 0.7) url("https://media.istockphoto.com/id/1305012465/vector/internet-connection-abstract-sense-of-science-and-technology-graphic-design-background.jpg?s=612x612&w=0&k=20&c=WC7evuE5zPhwRv8hk9uiydDAQGca-WKKRHlTrFjEOD8=") no-repeat center center fixed',
  backgroundSize: 'cover',
  fontFamily: "'Roboto', sans-serif",
  color: '#fff',
  padding: '1em 0',
  textAlign: 'center',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1em 2em',
  position: 'fixed',
  width: '100%',
  top: 0,
  zIndex: 1000,
};

const mainContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  background: 'url("https://slidescorner.com/wp-content/uploads/2024/02/Aesthetic-Pastel-Cute-PowerPoint-Background-Organic-Shapes-Stars-by-SlidesCorner.com_.jpg") no-repeat center center fixed',
  backgroundSize: 'cover'
};

const logoStyle = {
  display: 'flex',
  alignItems: 'center',
};

const logoImgStyle = {
  width: '50px',
  height: '50px',
  borderRadius: '50%',
  marginRight: '10px',
};

const navStyle = {
  listStyleType: 'none',
  display: 'flex',
  gap: '1px',
  margin: 0,
  padding: '10px',
};

const navItemStyle = {
  margin: '0 1em',
};

const navLinkStyle = {
  color: '#fff',
  textDecoration: 'none',
  fontSize: '1em',
  padding: '0.5em 1em',
  borderRadius: '5px',
  transition: 'background-color 0.3s, color 0.3s',
  fontFamily: "cursive",
};

const navLinkHoverStyle = {
  backgroundColor: '#fff',
  color: '#000',
};

const footerStyle = {
  backgroundColor: '#003366',
  color: 'white',
  padding: '20px',
};

const footerTopStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  marginBottom: '20px',
};

const footerContentStyle = {
  maxWidth: '400px',
};

const footerIconsStyle = {
  display: 'flex',
  gap: '10px',
};

const iconStyle = {
  width: '24px',
  height: '24px',
};

const footerSitemapStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '20px',
  marginLeft:'30px'
};

const footerSectionStyle = {
  maxWidth: '200px',
};

const listStyle = {
  listStyleType: 'none',
  padding: '0',
};

const listItemStyle = {
  marginBottom: '10px',
};

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
};

const wechatQrStyle = {
  width: '100px',
  height: '100px',
};

const footerBottomStyle = {
  textAlign: 'center',
  borderTop: '1px solid white',
  paddingTop: '10px',
};

const Articles = () => {
  const carouselImages = [
    {
      image: 'https://media.licdn.com/dms/image/D4E22AQGlsVZSMfjBMw/feedshare-shrink_800/0/1689328031303?e=2147483647&v=beta&t=Dk2430zGONYnQnQrbZPG-_tCeTVQka21M8JwD5oi1D8'
    },
    {
      image: 'https://steemitimages.com/1280x0/https://cdn.steemitimages.com/DQmb2Pjz6vXaF9JzewGeFkPwuDRd8nR5jSWPN6RtwZ75ifw/4f2b52b6746ecdc233679ba057a8b5dd.jpg'
    },
    {
      image: 'https://www.voronoiapp.com/_next/image?url=https%3A%2F%2Fcdn.voronoiapp.com%2Fpublic%2Fimages%2Fvoronoi-The-Top-10-Emerging-Technologies-of-2024--20240722154814.webp&w=3840&q=75'
    },
    {
      image: 'https://www.voronoiapp.com/_next/image?url=https%3A%2F%2Fcdn.voronoiapp.com%2Fpublic%2Fimages%2Fvoronoi-The-Top-10-Emerging-Technologies-of-2024--20240722154814.webp&w=3840&q=75'
    },
    {
      image: 'https://i0.wp.com/www.trendydigitalmarketing.com/wp-content/uploads/2024/02/image-28.png'
    }
  ];

  return (
    <div>
      <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true} interval={2000}>
        {carouselImages.map((slide, index) => (
          <div key={index}>
            <img src={slide.image} alt={slide.title} style={{ width: '90%', height: '500px', objectFit: 'fit' }} />
            <p className="legend" style={{ fontSize: '1.5em', background: 'rgba(0, 0, 0, 0.5)', padding: '10px' }}>{slide.title}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

function Home2() {
  return (
    <Router>
      <div style={mainContainerStyle}>
        <header style={headerStyle}>
          <div style={logoStyle}>
            <img src="https://cdn-icons-png.flaticon.com/512/732/732598.png" alt="Logo" style={logoImgStyle} />
            <h1 style={{ fontFamily: "'Roboto', sans-serif", color: '' }}>𝚂𝚌𝚒𝚎𝚗𝚌𝚎 𝚊𝚗𝚍 𝚃𝚎𝚌𝚑𝚗𝚘𝚕𝚘𝚐𝚢 </h1>
          </div>
          <nav>
            <ul style={navStyle}>
              {['Home', 'About', 'Blog', 'Quizzee', 'Contact'].map((text) => (
                <li style={navItemStyle} key={text}>
                  <Link to={`/${text.toLowerCase()}`} style={navLinkStyle} activeStyle={navLinkHoverStyle}>
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </header>
        <main style={{ marginTop: '100px', padding: '20px' }}>
         
        </main>
        <footer style={footerStyle}>
          <div style={footerTopStyle}>
            <div style={footerContentStyle}>
              <h3>About SciTech</h3>
              <p>Science is essentially 'knowledge' and is concerned with human understanding of the real world around us...</p>
              <div style={footerIconsStyle}>
                <a href="https://www.facebook.com"><img src="https://cdn-icons-png.flaticon.com/512/124/124010.png" alt="Facebook" style={iconStyle} /></a>
                <a href="https://www.twitter.com"><img src="https://cdn-icons-png.flaticon.com/512/124/124021.png" alt="Twitter" style={iconStyle} /></a>
                <a href="https://www.instagram.com"><img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" style={iconStyle} /></a>
                <a href="https://www.linkedin.com"><img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" style={iconStyle} /></a>
              </div>
            </div>
            <div>
              <img src="https://www.qr-code-generator.com/wp-content/themes/qr/frontend/dist/images/websiteQRCode_noFrame.png" alt="WeChat QR Code" style={wechatQrStyle} />
            </div>
          </div>
          <div style={footerSitemapStyle}>
            {['Company', 'Resources', 'Contact'].map((section, index) => (
              <div style={footerSectionStyle} key={index}>
                <h4>{section}</h4>
                <ul style={listStyle}>
                  {['About Us', 'Careers', 'Press', 'Blog'].map((item) => (
                    <li style={listItemStyle} key={item}><a href="#" style={linkStyle}>{item}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div style={footerBottomStyle}>
            <p>&copy; 2023 SciTech. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default Home2;
