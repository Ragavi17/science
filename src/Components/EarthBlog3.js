import React from 'react';
import img1 from './title1/EarthBlog3.1.jpg';
import img2 from './title1/EarthBlog3.2.jpg';
const EarthBlog3= () => {
  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        {/* Title */}
        <h1 style={styles.title}>Earth Blogs</h1>

        {/* Description */}
        <div style={styles.description}>
          <h2 style={styles.subtitle}>Ice in Crisis: Andean Glaciers Have Retreated to Lowest Levels in 11,700 Years</h2>
        </div>

        {/* Metadata (Date and Author) */}
        <div style={styles.metadata}>
          <span style={styles.date}>August 1, 2024</span>
          <span style={styles.author}> | Boston College  </span>
        </div>

        {/* First Image */}
        <div style={styles.imageWrapper}>
          <img
            src={img1}
            alt="Science Illustration"
            style={styles.image}
          />
          <p style={styles.caption}>Figure 1: A study reveals that tropical glaciers are at their smallest in over 11,700 years, surpassing warming thresholds of the Holocene and entering the Anthropocene. This finding, based on isotope analyses near Andean glaciers, points to a rapid and concerning retreat pattern.

</p>
        </div>

        {/* Second Paragraph */}
        <p style={styles.paragraph}>
       <b>No longer covered in ice, Andean rocks signal the world’s glaciers are melting far faster than predicted.</b>
        </p>
        <p style={styles.paragraph}>
        Tropical glaciers have reached their smallest size in over 11,700 years, according to a study in Science by Boston College researchers. Utilizing isotope analysis of rocks near Andean glaciers, evidence indicates these glaciers are smaller than at any point in the Holocene, suggesting a significant warming of the tropics.
          <br></br>
         <b> <h2 style={styles.subheading}>Tropical Glaciers Shrinking Rapidly</h2></b>
         Rocks recently exposed to the sky after being covered with prehistoric ice show that tropical glaciers have shrunk to their smallest size in more than 11,700 years, revealing the tropics have already warmed past limits last seen earlier in the Holocene age, researchers from Boston College report today (August 1) in the journal Science.
        </p>
        Scientists have predicted glaciers would melt, or retreat, as temperatures warm in the tropics – those regions bordering the Earth’s equator. But the study’s analysis of rock samples adjacent to four glaciers in the Andes Mountains shows that glacial retreat has happened far faster and already passed an alarming cross-epoch benchmark, said Boston College Associate Professor of Earth and Environmental Sciences Jeremy Shakun.   
<br></br>
<div style={styles.imageWrapper}>
          <img
            src={img2}
            alt="Science Illustration"
            style={styles.image}
          />
          </div>
          
        <p style={styles.paragraph}>
       <b><h2 style={styles.subheading}>Evidence of Unprecedented Glacial Retreat
       </h2></b>
       We have pretty strong evidence that these glaciers are smaller now than they have been any time in the past 11,000 years,” said Shakun, a paleoclimatologist and co-author of the report. 
       <br></br>
       “Given that modern glacier retreat is mostly due to rising temperatures – as opposed to less snowfall, or changes in cloud cover – our findings suggest the tropics have already warmed outside their Holocene range and into the Anthropocene.”
<br></br>
The findings signal more of the world’s glaciers are likely retreating far faster than predicted, possibly decades ahead of a grim climatological schedule.
<b><h2 style={styles.subheading}>A ‘Canary in the Coal Mine’</h2></b>
“This is the first large region of the planet where we have strong evidence that glaciers have crossed this important benchmark – it is a ‘canary in the coalmine’ for glaciers everywhere,” said Shakun.
<br></br>
<b><h2 style={styles.subheading}>Research Expedition and Methodology</h2></b>
Researchers who formed the international team of scientists traveled to Colombia, Peru, and Bolivia to measure the chemistry of bedrock only recently uncovered in front of four melting glaciers spanning the tropical Andes. Two rare isotopes – beryllium-10 and carbon-14 – build up in bedrock surfaces when they are exposed to cosmic radiation from outer space, Shakun said.
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

export default EarthBlog3;
