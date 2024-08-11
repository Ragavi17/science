import React from 'react';
import img1 from './title1/EarthBlog1.1.jpg';

const EarthBlog1 = () => {
  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        {/* Title */}
        <h1 style={styles.title}>Earth Blogs</h1>

        {/* Description */}
        <div style={styles.description}>
          <h2 style={styles.subtitle}>Surprise Snowfall: Winter’s Late Arrival Down Under</h2>
        </div>

        {/* Metadata (Date and Author) */}
        <div style={styles.metadata}>
          <span style={styles.date}>August 3, 2024</span>
          <span style={styles.author}> | Lindsey Doermann</span>
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
      <h2 style ={styles.subheading}>Fresh powder fell on Australia’s tallest peaks and popular ski resorts.
      </h2>
      In July 2024, southeastern Australia’s Snowy Mountains experienced a late but significant snowfall, enhancing conditions for skiing. This event, captured by Landsat 8’s OLI, marked a shift from the season’s slow start, with substantial snow accumulating after July 19.
        </p>
        <p style={styles.paragraph}>
        <h2 style ={styles.subheading}>Winter’s Grand Arrival in Southeastern Australia</h2>
       
          Winter made a late, but bold, entrance to the mountains in southeastern Australia. Much to the delight of skiers Down Under, a period of seasonal weather in July 2024 brought significant accumulations to the Snowy Mountains in New South Wales.
          <br></br><br></br>
          The OLI (Operational Land Imager) on Landsat 8 acquired this wintry image of Australia’s Snowy Mountains on July 28. Part of the Australian Alps, the range is home to the country’s tallest peaks, including Mount Kosciuszko at 2,228 meters (7,310 feet), as well as several popular ski resorts. Peak snow season in this region usually lasts from June to August, although snow commonly falls at higher elevations in May and can linger through October.
        </p>
     
       <h2 style={styles.subheading}>A Slow Start to the Ski Season</h2>
       Winter got off to a slow start in the Snowy Mountains in 2024, however. Slopes were mostly bare for the traditional opening of the ski season in early June, according to news reports. 
<br></br><br></br>
Meteorologists attributed the lack of snow to blocking highs, or strong high pressure systems, that persisted over the Great Australian Bight.
<h2 style={styles.subheading}>Climate Impact on Snow Patterns</h2>
Variable snow years are the norm in the Australian Alps, according to the Australian Bureau of Meteorology. Climate patterns such as El Niño, La Niña, and the Indian Ocean Dipole modulate each winter’s snowpack. Despite the significant year-to-year variability, long-term observations point to a thinning alpine snowpack. 
<br></br><br></br>
Maximum snow depth has trended down since the late 1950s, the agency reported, adding that the declines are linked with warming trends. The annual average temperature has risen about 1.4 degrees Celsius (2.5 degrees Fahrenheit) in the region since 1950.
          
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

export default EarthBlog1;
