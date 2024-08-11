import React from 'react';
import img1 from './title1/SpaceBlog2.1.jpg';
import img2 from './title1/space6.webp';
import img3 from './title1/SpaceBlog2.2.png';
const SpaceBlog2 = () => {
  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        {/* Title */}
        <h1 style={styles.title}>Space Blogs</h1>

        {/* Description */}
        <div style={styles.description}>
          <h2 style={styles.subtitle}>Astronomers Detect Potential Dark Matter Objects in Space Using Pulsars</h2>
        </div>

        {/* Metadata (Date and Author) */}
        <div style={styles.metadata}>
          <span style={styles.date}>August 2, 2024</span>
          <span style={styles.author}> | John LoSecco </span>
        </div>

        {/* First Paragraph */}
        <p style={styles.paragraph}>
        
          <b>Evidence for potential dark matter objects has been detected using pulsars, which are neutron stars emitting regular beams of radio waves
          <br></br>
          These beams were analyzed by Professor John LoSecco, revealing variations and delays that indicate the presence of unseen mass, likely dark matter. LoSecco utilized data from the PPTA2 survey, involving precise measurements from several radio telescopes.
</b>
        </p>

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
      <h2 style ={styles.subheading}>Detecting Dark Matter With Pulsars
      </h2>
          Tantalizing evidence of potential dark matter objects has been detected with the help of the Universe’s ‘timekeepers’. 
        </p>
        <p style={styles.paragraph}>
        Pulsars earned their nickname because they send out electromagnetic radiation at very regular intervals, ranging from milliseconds to seconds, making them extremely accurate timekeepers.
          <br></br><br></br>
          “Science has developed very precise methods to measure time,” said the astronomer behind the research, Professor John LoSecco, of the University of Notre Dame, who recently presented his findings at the National Astronomy Meeting at the University of Hull.
          
          <div style={styles.imageWrapper}>
          <img
            src={img2}
            alt="Space image"
            style={styles.image}
          />
         </div>
         
        </p>
        <br></br><br></br>
        Observing Variations in Pulsar Timings
Professor LoSecco observed variations and delays in pulsar timings, indicating that the radio beams are traveling around an unseen concentration of mass somewhere between the pulsar and the telescope.

<br></br><br></br>
        Professor LoSecco studied delays in the arrival times of radio pulses, which normally have nanosecond accuracy. He searched along the path of radio pulses within the PPTA2 survey data release from the Parkes Pulsar Timing Array.
<br></br><br></br>
This ongoing project produces precise measurements of pulse arrival times using data from seven different radio telescopes: Effelsberg, Nançay, Westerbork, Green Bank, Arecibo, Parkes, and Lovell, the latter in Cheshire.

The pulses have a cadence of approximately three weeks in three observing bands.
      <br></br><br></br>
       
          
  
      <div style={styles.imageWrapper}>
          <img
            src={img3}
            alt="Space image"
            style={styles.image}
          />
         </div>

          
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

export default SpaceBlog2;
