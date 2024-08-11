import React from 'react';
import image1 from './title1/SpaceBlog1.1.webp';
import image2 from './title1/space6.webp';
import image3 from './title1/SpaceBlog3.1.jpg';
import image4 from './title1/SpaceBlog4.1.jpg';
import image5 from './title1/SpaceBlog5.1.jpg';


const posts = [
    {
        image: image1,
        title: 'WIYN 3.5-meter telescope at Kitt Peak discovers extremely strange orbit of rare exoplanet',
        date: 'August 3, 2024',
        author: 'Alison Sweeney',
        description: 'An exoplanet’s elongated, backwards orbit holds clues to the formation history and future trajectories of high-mass gas giants.'
    },
    {
      image: image2,
      date: 'August 2, 2024',
      title: 'Astronomers Detect Potential Dark Matter Objects in Space Using Pulsars',
      description: '“Science has developed very precise methods to measure time,” said the astronomer behind the research, Professor John LoSecco, of the University of Notre Dame, who recently presented his findings at the National Astronomy Meeting at the University of Hull.',
    },
    {
      image: image3,
      title: 'NASA’s Solar Dynamics Observatory Chronicles Major Flare Event',
      date: 'July 30, 2024',
      author: 'ROHAN J. KHADILKAR',
      description: 'NASA’s Solar Dynamics Observatory recorded a significant X1.5 solar flare on July 28, 2024.'
  },
    
    {
        image: image4,
        title: 'PLATO Exoplanet Hunter Begins Search for Another Earth in 2026',
        date: 'August 3, 2024',
        author: 'BUDDHADITYA MUKHERJEE',
        description: 'This telescope is designed to search for Earth-like rocky planets around Sun-like stars that might be habitable.'
    },
    { 
      image: image5,
      date: 'July 29, 2024',
      title: 'Cosmic Oddity: Rare Second-Gen Star Found Beyond the Milky Way',
      description: 'New hints about the origins of the universe’s elements have been revealed by stars from the Large Magellanic Cloud.',
    },
    
];

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    backgroundColor: '#f0f0f0', 
    maxWidth:'1000px',
    marginLeft:'250px',
  },
  header: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  scienceTitle: {
    fontSize: '3em',
    color: '#333',
    marginBottom: '10px',
    fontWeight: 'bold',
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  item: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  image: {
    width: '150px',  // Set consistent width
    height: '150px', // Set consistent height
    marginRight: '20px',
    borderRadius: '5px',
    objectFit: 'cover', // Ensure the image covers the specified dimensions
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
  },
  itemTitle: {
    color: '#007bff',
    fontSize: '1.5em',
    margin: '0 0 10px 0',
  },
  meta: {
    color: '#555',
    marginBottom: '10px',
  },
  description: {
    color: '#666',
    fontSize: '1em',
  },
};

function Space() {
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.scienceTitle}>SPACE</h1>
      </div>
      <div style={styles.list}>
        {posts.map((post, index) => (
          <div style={styles.item} key={index}>
            {post.image && <img src={post.image} alt={post.title} style={styles.image} />}
            <div style={styles.content}>
              <h3 style={styles.itemTitle}>{post.title}</h3>
              <p style={styles.meta}>
                <span>{post.date}</span> | By {post.author}
              </p>
              <p style={styles.description}>{post.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Space;
