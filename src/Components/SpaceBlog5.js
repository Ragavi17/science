import React from 'react';
import img1 from './title1/SpaceBlog5.1.jpg';
import img2 from './title1/SpaceBlog5.2.jpg';
import img3 from './title1/SpaceBlog5.3.jpg';
const SpaceBlog5 = () => {
  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        {/* Title */}
        <h1 style={styles.title}>Space Blogs</h1>

        {/* Description */}
        <div style={styles.description}>
          <h2 style={styles.subtitle}>Cosmic Oddity: Rare Second-Gen Star Found Beyond the Milky Way</h2>
        </div>

        {/* Metadata (Date and Author) */}
        <div style={styles.metadata}>
          <span style={styles.date}>July 29, 2024</span>
          <span style={styles.author}> | John LoSecco </span>
        </div>

        {/* First Paragraph */}
        <p style={styles.paragraph}>
        
          <b>New hints about the origins of the universe’s elements have been revealed by stars from the Large Magellanic Cloud.   
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
        The universe was forever changed by the first generation of stars. Within their cores, basic hydrogen and helium fused into a diverse array of elements. When these stars met their end, they exploded, scattering these new elements throughout the cosmos. The iron in your veins, the calcium in your teeth, and the sodium powering your thoughts were all born in the heart of a long-dead star.
        </p>
        <p style={styles.paragraph}>
        No one has been able to find one of those first generation of stars, but scientists have announced a unique finding: a star from the second generation that originally formed in a different galaxy from ours.
          <br></br><br></br>
          “This star provides a unique window into the very early element-forming process in galaxies other than our own,” said Anirudh Chiti, a University of Chicago postdoctoral fellow and first author on a paper announcing the findings. 
          <br></br><br></br>
          <h2 style={styles.subheading}>‘Fishing needles out of haystacks’</h2>
          <div style={styles.imageWrapper}>
          Chiti specializes in what is called stellar archaeology: Reconstructing how the earliest generations of stars changed the universe. “We want to understand what the properties of those first stars were and what were the elements they produced,” said Chiti.
          <br></br><br></br>
          But no one has yet managed to directly see these first-generation stars, if any remain in the universe. Instead, Chiti and his colleagues look for stars that formed from the ashes of that first generation.
          
          <img
            src={img2}
            alt="Space image"
            style={styles.image}
          />
         </div>
         
        </p>
        <br></br><br></br>
        It’s hard work, because even the second generation of stars is now incredibly ancient and rare. Most stars in the universe, including our own sun, are the result of tens to thousands of generations, building up more and more heavy elements each time. “Maybe fewer than 1 in 100,000 stars in the Milky Way is one of these second-gen stars,” he said. “You really are fishing needles out of haystacks.”
<br></br><br></br>
“If you can find a very old star and get its chemical composition, you can understand what the chemical composition of the universe was like where that star formed, billions of years ago.”
<br></br><br></br>

<h2 style={styles.subheading}>An intriguing oddity</h2>
          <br></br>
          The Large Magellanic Cloud is a bright swath of stars visible to the naked eye in the Southern Hemisphere. We now think it was once a separate galaxy that was captured by the Milky Way’s gravity just a few billion years ago.
          
  
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

export default SpaceBlog5;
