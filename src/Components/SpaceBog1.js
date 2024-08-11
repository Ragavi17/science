import React from 'react';
import img1 from './title1/SpaceBlog1.1.webp';
import img2 from './title1/Blog1.jpg';
import img3 from './title1/Blog2.jpg';

const SpaceBog1 = () => {
  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        {/* Title */}
        <h1 style={styles.title}>Space Blogs</h1>

        {/* Description */}
        <div style={styles.description}>
          <h2 style={styles.subtitle}>WIYN 3.5-meter telescope at Kitt Peak discovers extremely strange orbit of rare exoplanet</h2>
        </div>

        {/* Metadata (Date and Author) */}
        <div style={styles.metadata}>
          <span style={styles.date}>August 3, 2024</span>
          <span style={styles.author}> | Alison Sweeney </span>
        </div>

        {/* First Paragraph */}
        <p style={styles.paragraph}>
          <b>An exoplanet’s elongated, backwards orbit holds clues to the formation history and future trajectories of high-mass gas giants.

Astronomers have observed an exoplanet with a highly eccentric and retrograde orbit using the WIYN telescope. This exoplanet, named TIC 241249530 b, could significantly advance our understanding of the formation and migration of hot Jupiters, which are typically larger gas giants that migrate to very close orbits around their stars.</b>
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
        At present, there are over 5,600 confirmed exoplanets in just over 4,000 star systems. Within this population, about 300–500 exoplanets fall into the curious class known as hot Jupiters — large, Jupiter-like exoplanets that orbit very close to their star, some even as close as Mercury is to our Sun.
          <br></br><br></br>
          How hot Jupiters end up in such close orbits is a mystery, but astronomers postulate that they begin in orbits far from their star and then migrate inward over time.
          <br></br><br></br>
          The early stages of this process have rarely been observed, but with this new analysis of an exoplanet with an unusual orbit, astronomers are one step closer to unraveling the hot Jupiter mystery.
        </p>

        {/* Second Image */}
        <div style={styles.imageWrapper}>
          <img
            src={img2}
            alt="Space image"
            style={styles.image}
          />
          <p style={styles.caption}>Figure 2: This illustration shows the orbit of the newly discovered Jupiter-like exoplanet named TIC 241249530 b.</p>
        </div>

        {/* Third Paragraph */}
        <p style={styles.paragraph}>
        Arvind Gupta, NOIRLab postdoctoral researcher and lead author of the paper published in Nature, praised NESSI and NEID as being critical to the team’s efforts to characterize and confirm the exoplanet’s signal.
          <br></br><br></br>
          “NESSI gave us a sharper view of the star than would have been possible otherwise, and NEID precisely measured the star’s spectrum to detect shifts in response to the orbiting exoplanet,” explained Gupta. 
          <br></br><br></br>
          “The WIYN telescope is playing a crucial role in helping us understand why the planets found in other solar systems can be so different from system to system,” said NSF’s Chris Davis, program director for NSF NOIRLab. “The collaboration between NSF and NASA on the NN-EXPLORE program continues to yield impressive results in exoplanet research.”
          <br></br><br></br>
          <h2 style={styles.subheading}>Implications of Eccentric and Retrograde Orbits</h2>
          Detailed analysis of the spectrum confirmed that the exoplanet is approximately five times more massive than Jupiter. The spectrum also revealed that the exoplanet is orbiting along an extremely eccentric, or stretched-out, path. The eccentricity of a planet’s orbit is measured on a scale from 0 to 1, with 0 being a perfectly circular orbit and 1 being highly elliptical.
          <br></br><br></br>
          This exoplanet has an orbital eccentricity of 0.94, making it more eccentric than the orbit of any other exoplanet ever found via the transiting method [1]. For comparison, Pluto’s highly elliptical orbit around the Sun has an eccentricity of 0.25; Earth’s eccentricity is 0.02.
          <br></br><br></br>
          <div style={styles.imageWrapper}>
          <img
            src={img3}
            alt="Space image"
            style={styles.image}
          />
          <p style={styles.caption}>Figure 3: The interior of the WIYN 3.5-meter Telescope</p>
        </div>
         
        </p>
        <br></br><br></br>
        If this planet was part of our Solar System its orbit would stretch from its closest approach ten times closer to the Sun than Mercury all the way out to its most distant extent at Earth’s distance. This extreme orbit would cause temperatures on the planet to vary between that of a summer’s day to hot enough to melt titanium.
          <br></br><br></br>
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

export default SpaceBog1;
