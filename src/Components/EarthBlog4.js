import React from 'react';
import img1 from './title1/EarthBlog4.1.jpg';

const EarthBlog4 = () => {
  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        {/* Title */}
        <h1 style={styles.title}>Earth Blogs</h1>

        {/* Description */}
        <div style={styles.description}>
          <h2 style={styles.subtitle}>Revolutionizing Weather Forecasts: Scientists Decode the Rain Formation Bottleneck</h2>
        </div>

        {/* Metadata (Date and Author) */}
        <div style={styles.metadata}>
          <span style={styles.date}>July 31, 2024</span>
          <span style={styles.author}> | National Center for Atmospheric Research</span>
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
        A study by NSF NCAR researchers shows that turbulence significantly speeds up rain formation in clouds, based on advanced simulations and data from a NASA field campaign. This discovery is crucial for improving weather and climate forecasts.
        </p>
        <p style={styles.paragraph}>
        <b>New findings have the potential to enhance computer models used for weather and climate prediction.</b>
       <br></br>
        For decades, scientists have sought to unravel the intricate and enigmatic sequence of events that allow tiny droplets in clouds to grow large enough to fall to the ground. Gaining a deeper understanding of this process, known as the “rain formation bottleneck,” is crucial for enhancing computer model simulations of weather and climate, which in turn leads to more accurate forecasts.
          <br></br><br></br>
          Now a research team led by scientists at the U.S. National Science Foundation National Center for Atmospheric Research (NSF NCAR) has found that the turbulent movements of air in clouds play a key role in the growth of droplets and the initiation of rain.
        <br></br><br></br>
        The researchers applied advanced computer modeling to detailed observations of droplets in cumulus clouds that were taken during a NASA field campaign. This enabled them to track the impacts of turbulence on embryonic droplets that eventually coalesce into raindrops.
        <br></br><br></br>
        “This research shows that turbulent effects on drop coalescence are critical for the evolution of droplet sizes and the initiation of rain,” said NSF NCAR scientist Kamal Kant Chandrakar, the lead author. “Turbulence in cumulus clouds substantially speeds up rainfall and leads to far greater amounts of rain.”
        </p>
     
       <h2 style={styles.subheading}>From small water droplets to rain
       </h2>
       The process of rain begins when small water droplets in clouds condense around microscopic particles of dust, salt, or other materials, which are called cloud condensation nuclei (CCN). As millions of droplets collide with each other, they coalesce into larger droplets that eventually become heavy enough to fall out of the cloud.
<br>
</br>
“The development of rain is fundamental to clouds, weather, and the entire climate system,” Chandrakar said. “Better understanding this process can point the way to significant improvements in our computer models and ultimately in weather forecasts and climate projections that help protect society.”

          
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

export default EarthBlog4;
