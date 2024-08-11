import React from 'react';
import img1 from './title1/SpaceBlog4.1.jpg';
import img2 from './title1/SpaceBlog4.2.jpg';


const SpaceBlog4 = () => {
  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        {/* Title */}
        <h1 style={styles.title}>Space Blogs</h1>

        {/* Description */}
        <div style={styles.description}>
          <h2 style={styles.subtitle}>PLATO Exoplanet Hunter Begins Search for Another Earth in 2026</h2>
        </div>

        {/* Metadata (Date and Author) */}
        <div style={styles.metadata}>
          <span style={styles.date}> August 3, 2024

</span>
          <span style={styles.author}> | John LoSecco </span>
        </div>

        {/* First Paragraph */}
        <p style={styles.paragraph}>
          <b>This telescope is designed to search for Earth-like rocky planets around Sun-like stars that might be habitable.

</b> </p>  
      
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
        <h2 style={styles.paragraph}>Europe’s Next Big Space Mission</h2>
        Europe’s next big space mission — a telescope that will hunt for Earth-like rocky planets outside of our solar system — is on course to launch at the end of 2026.
          <br></br><br></br>
          PLATO, or PLAnetary Transits and Oscillations of stars, is being built to find nearby potentially habitable worlds around Sun-like stars that we can examine in detail.

The space telescope will blast into orbit on Europe’s new rocket, Ariane-6, which made its maiden flight last week after being developed at a cost of €4 billion ($4.3 billion).
          <br></br><br></br>
          “PLATO’s goal is to search for exoplanets around stars similar to the Sun and at orbital periods long enough for them to be in the habitable zone,” he said.
“One of the main mission objectives is to find another Earth-Sun equivalent pair, but it is also designed to carefully and precisely characterize the exoplanets that it finds (i.e. work out their masses, radii, and bulk density).”
        </p>

        <h2 style={styles.paragraph}>Stellar Science Mission</h2>
        
        As well as searching for exoplanets it will study the stars using a range of techniques including asteroseismology (measuring the vibrations and oscillations of stars) to work out their masses, radii, and ages.
        <br></br><br></br>
        Unlike most space telescopes, PLATO has multiple cameras – including a UK-named one called ArthurEddington, after the famous astronomer and physicist who won the Royal Astronomical Society’s prestigious Gold Medal in 1924.
        <br></br><br></br>

        <div style={styles.imageWrapper}>
          <img
            src={img2}
            alt="Space image"
            style={styles.image}
          />
        </div>

        {/* Third Paragraph */}
        <p style={styles.paragraph}>
        It has 24 ‘Normal’ cameras (N-CAMs) and 2 ‘Fast’ cameras (F-CAMs). The N-CAMs are arranged into four groups of six cameras, with the cameras in each group pointing in the same direction but the groups slightly offset.

This gives PLATO a very large field of view, improved scientific performance, redundancy against failures, and a built-in way to identify ‘false positive’ signals that might mimic an exoplanet transit, Dr. Brown explained.
          <br></br><br></br>
          It has 24 ‘Normal’ cameras (N-CAMs) and 2 ‘Fast’ cameras (F-CAMs). The N-CAMs are arranged into four groups of six cameras, with the cameras in each group pointing in the same direction but the groups slightly offset.
          <br></br><br></br>
This gives PLATO a very large field of view, improved scientific performance, redundancy against failures, and a built-in way to identify ‘false positive’ signals that might mimic an exoplanet transit, Dr. Brown explained.
         
          <br></br><br></br>
          Built by the Mullard Space Science Laboratory of University College London, these operate the cameras, digitize the images, and transfer them to the onboard data processing.
          <br></br><br></br>
         
         
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

export default SpaceBlog4;
