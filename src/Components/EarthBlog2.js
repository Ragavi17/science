import React from 'react';
import img1 from './title1/EarthBlog2.1.webp';

const EarthBlog2 = () => {
  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        {/* Title */}
        <h1 style={styles.title}>Earth Blogs</h1>

        {/* Description */}
        <div style={styles.description}>
          <h2 style={styles.subtitle}>Scientists Find Nitrogen Emissions Cool the Climate – Could This Really Help Solve Climate Change?</h2>
        </div>

        {/* Metadata (Date and Author) */}
        <div style={styles.metadata}>
          <span style={styles.date}>August 2, 2024</span>
          <span style={styles.author}> |  University of Sydney </span>
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
        Researchers have found that while nitrogen emissions from human activities, like the use of fertilizers and burning fossil fuels, can cool the climate by blocking sunlight and promoting plant growth, these benefits are outweighed by negative effects, including environmental pollution and global warming exacerbation. Urgent action is necessary to reduce greenhouse gases, as relying on nitrogen’s cooling effects is insufficient and harmful to the environment.
        </p>
        <p style={styles.paragraph}>
        <b><h2 style ={styles.subheading}>A study reveals that nitrogen emissions have a cooling effect on the climate, but their overall environmental impact, including pollution and exacerbation of global warming, necessitates urgent reduction in greenhouse gas emissions.</h2></b>
       
        An international team of researchers has discovered that nitrogen emissions from fertilizers and fossil fuels contribute to a net cooling effect on the climate. However, they caution that rising atmospheric nitrogen levels have harmful environmental impacts and emphasize the urgent need to reduce greenhouse gas emissions to combat global warming.
          <br></br><br></br>
      
        Published in Nature, the paper found that reactive nitrogen released in the environment through human activities cools the climate by minus 0.34 watts per square meter. While global warming would have advanced further without the input of human-generated nitrogen, the amount would not offset the level of greenhouse gasses heating the atmosphere.
        <br></br><br></br>
        The paper was led by the Max Planck Institute in Germany and included authors from the University of Sydney. It comes one day after new data from the European Union’s Copernicus Climate Change Service indicated that Sunday, 21 July was the hottest day recorded in recent history.
        </p>
     
       <h2 style={styles.subheading}>Mechanisms of Cooling</h2>
       The net cooling effect occurs in four ways:
<br></br>
<b>.</b>      Short-lived nitrogen oxides produced by the combustion of fossil fuels pollute the atmosphere by forming fine suspended particles that shield sunlight, in turn cooling the climate;
<br></br>
<b>.</b>
              nitrogen applied to crops allows plants to grow more abundantly, absorbing more CO2 from the atmosphere, enabling a cooling effect;
<br></br><br></br>
The researchers warned that increasing atmospheric nitrogen was not a solution for combatting climate change.


          
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

export default EarthBlog2;
