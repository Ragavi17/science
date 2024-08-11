import React from 'react';
import img1 from './title1/EarthBlog5.1.webp';
import img2 from './title1/EarthBlog5.2.webp';
const EarthBlog5 = () => {
  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        {/* Title */}
        <h1 style={styles.title}>Earth Blogs</h1>

        {/* Description */}
        <div style={styles.description}>
          <h2 style={styles.subtitle}>Revolutionary Submarine Discovers Ice Shelf Mysteries, Then Disappears Without a Trace</h2>
        </div>

        {/* Metadata (Date and Author) */}
        <div style={styles.metadata}>
          <span style={styles.date}>August 2, 2024</span>
          <span style={styles.author}> |  University of Gothenburg</span>
        </div>

        {/* First Image */}
        <div style={styles.imageWrapper}>
          <img
            src={img1}
            alt="Science Illustration"
            style={styles.image}
          />
        </div>

        {/* Second Paragraph */}
        <p style={styles.paragraph}>
       <b>Using the unmanned submarine Ran, researchers mapped the underside of West Antarctica’s Dotson Ice Shelf, uncovering complex ice formations and significant melt areas driven by underwater currents, crucial for enhancing sea level rise predictions.</b>
        </p>
        <p style={styles.paragraph}>
        An international research team from the University of Gothenburg deployed the unmanned submarine ‘Ran’ beneath the thick ice of Antarctica. They received the first-ever detailed maps of the underside of a glacier, providing valuable insights into potential future sea level rise.   
          <br></br><br></br>
          The autonomous underwater vehicle, Ran, was programmed to dive into the cavity of Dotson ice shelf in West Antarctica and scan the ice above it with an advanced sonar system. For 27 days, the submarine traveled a total of over 1.000 kilometers back and forth under the glacier, reaching 17 kilometers into the cavity. An ice shelf is a mass of glacial ice, fed from land by tributary glaciers, that floats in the sea above an ice shelf cavity.
        </p>
     
       <h2 style={styles.subheading}>“Like seeing the back of the moon”</h2>
       “We have previously used satellite data and ice cores to observe how glaciers change over time. By navigating the submersible into the cavity, we were able to get high-resolution maps of the ice underside. It’s a bit like seeing the back of the moon,” says lead author Anna Wåhlin, Professor of Oceanography at the University of Gothenburg.
<br></br>
<div style={styles.imageWrapper}>
          <img
            src={img2}
            alt="Science Illustration"
            style={styles.image}
          />
           <p style={styles.caption}>Figure 1: The autonomous underwater vehicle Ran was programmed to perform missions under the ice shelf. An advanced multibeam sonar system was used to map the underside of the ice at a distance of about 50 meters. </p>
        </div>

<p>
In a new scientific paper in Science Advances, the researchers report on the findings of this unique survey. Some things are as expected. The glacier melts faster where strong underwater currents erode its base. Using the submersible, scientists were able to measure the currents below the glacier for the first time and prove why the western part of the Dotson Ice Shelf melts so fast. They also see evidence of very high melt at vertical fractures that extend through the glacier.
</p>


          
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    padding: '20px',
  },
  container: {
    padding: '30px',
    fontFamily: "'Merriweather', serif",
    lineHeight: '1.8',
    color: '#333',
    maxWidth: '900px',
    margin: '0 auto',
    backgroundColor: 'rgba(255, 255, 255, 0.9)', // Adds a slight white overlay to improve text readability
    boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
  },
  title: {
    fontSize: '3rem',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '20px',
    color: '#2c3e50',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)',
  },
  subtitle: {
    fontSize: '1.5rem',
    fontWeight: 'normal',
    marginBottom: '10px',
    color: '#34495e',
  },
  description: {
    fontSize: '1.2rem',
    margin: '0 auto',
    width: '80%',
    textAlign: 'center',
    marginBottom: '10px',
    color: '#666',
  },
  metadata: {
    textAlign: 'center',
    fontSize: '0.9rem',
    color: '#999',
    marginBottom: '20px',
  },
  date: {
    marginRight: '10px',
  },
  author: {
    marginLeft: '10px',
  },
  paragraph: {
    fontSize: '1.1rem',
    marginBottom: '25px',
    color: '#4a4a4a',
    textAlign: 'justify',
  },
  subheading: {
    fontSize: '1.3rem',
    fontWeight: 'bold',
    marginTop: '20px',
    color: '#34495e',
  },
  imageWrapper: {
    textAlign: 'center',
    marginBottom: '25px',
  },
  image: {
    width: '100%',
    height: 'auto',
    maxWidth: '600px',
    maxHeight: '400px',
    borderRadius: '10px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
  },
  caption: {
    fontSize: '0.9rem',
    color: '#7f8c8d',
    marginTop: '10px',
  },
};

export default EarthBlog5;
