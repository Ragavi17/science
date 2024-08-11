import React from 'react';
import img1 from './title1/SpaceBlog3.1.jpg';
import img2 from './title1/SpaceBlog3.2.jpg';


const SpaceBlog3 = () => {
  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        {/* Title */}
        <h1 style={styles.title}>Space Blogs</h1>

        {/* Description */}
        <div style={styles.description}>
          <h2 style={styles.subtitle}>NASA’s Solar Dynamics Observatory Chronicles Major Flare Event</h2>
        </div>

        {/* Metadata (Date and Author) */}
        <div style={styles.metadata}>
          <span style={styles.date}>July 30, 2024</span>
          <span style={styles.author}> | John LoSecco </span>
        </div>

        {/* First Paragraph */}
        <p style={styles.paragraph}>
          <b>NASA’s Solar Dynamics Observatory captured this image of a solar flare — seen as the bright flash in the center – on July 28, 2024. The image shows a subset of extreme ultraviolet light that highlights the extremely hot material in flares and which is colorized in yellow and orange. </b>
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
        NASA’s Solar Dynamics Observatory recorded a significant X1.5 solar flare on July 28, 2024.
          <br></br><br></br>
          On July 28, 2024, the Sun released a strong X1.5 class solar flare, observed by NASA’s Solar Dynamics Observatory. It reached its peak at 10:37 p.m. EDT. This category of solar flare, known for being the most intense, can significantly disrupt radio communications, navigation signals, and electric power grids, and poses risks to space operations involving spacecraft and astronauts.
          <br></br><br></br>
          Solar flares are powerful bursts of radiation emanating from the release of magnetic energy associated with sunspots. These flares are one of the most spectacular forms of solar activity, observable across many wavelengths from radio to x-rays. The Sun releases energy that heats its own surface to millions of degrees, causing the solar atmosphere to erupt and send light and energetic particles far into space. Although the energy from a flare itself cannot make it through Earth’s atmosphere to physically impact humans, when intense enough, these flares can disturb the layer of the atmosphere where GPS and communications signals travel.
          <br></br><br></br>
          To assess the strength and potential impact of solar flares, scientists classify them into three categories: C, M, and X, with each category having a numerical scale from 1 to 9. This system, akin to the Richter scale used for earthquakes, helps in quickly assessing the flare’s intensity and potential effects on Earth. C-class flares are small with few noticeable consequences on Earth. M-class flares are medium-sized; they can cause brief radio blackouts that affect Earth’s polar regions. X-class flares are the largest and most powerful, with the potential to trigger planet-wide radio blackouts and long-lasting radiation storms. The number provides more detail about the strength within each class; for instance, an X1 flare is weaker than an X2 flare, but both are significantly stronger than any M-class flares.
        </p>

        {/* Second Image */}
        <div style={styles.imageWrapper}>
          <img
            src={img2}
            alt="Space image"
            style={styles.image}
          />
        </div>

        {/* Third Paragraph */}
        <p style={styles.paragraph}>
        NASA’s Solar Dynamics Observatory (SDO) is a mission dedicated to understanding the Sun’s influence on Earth and near-Earth space by observing the solar atmosphere in extraordinary detail. Launched on February 11, 2010, SDO has been a vital part of the Living With a Star (LWS) program, which aims to develop the scientific understanding necessary to effectively address those aspects of the connected Sun-Earth system that directly affect life and society.
          <br></br><br></br>
          SDO provides high-resolution measurements of the solar photosphere, chromosphere, and corona, which have led to numerous discoveries about the outer layers of the Sun and how space weather results from the solar activity.
          <br></br><br></br>
          Equipped with a suite of sophisticated instruments, the SDO captures ultraviolet images and spectra of the Sun at multiple wavelengths every few seconds. One of its primary instruments, the Atmospheric Imaging Assembly (AIA), takes images of the solar atmosphere in 10 different wavelength bands, several of which are invisible to the naked eye. 
          <br></br><br></br>
          Another key instrument, the Helioseismic and Magnetic Imager (HMI), measures the Sun’s magnetic field and produces data that help scientists observe what’s happening inside the Sun by studying vibrations and movements. Together, these instruments provide insights into the dynamics of the Sun’s magnetic fields and how they produce the types of energy that can cause solar flares and coronal mass ejections. Through its continuous monitoring, SDO plays a crucial role in improving the ability to forecast space weather events that can have significant effects on Earth’s technology and astronauts in space.
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

export default SpaceBlog3;
