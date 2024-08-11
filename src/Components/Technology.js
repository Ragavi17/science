import React from 'react';
import sci1 from './images/sci.jpg';

const posts = [
  {
    title: 'Ancient Mystery Deepens With Discovery of Denisovan Remains in Tibetan Cave',
    date: 'JUN 12, 2024',
    author: 'RATNESHWAR THAKUR',
    image: sci1, // Add the path to the image
    description: 'Researchers have found more Denisovan remains in a cave in Tibet, providing new insights into the mysterious hominins.', // Add a description
  },
  {
    title: 'Kisan Kavach To Protect Farmers From Lethal Effects Of Insecticides',
    date: 'JUN 12, 2024',
    author: 'RATNESHWAR THAKUR',
    image: 'path_to_image.jpg', // Add the path to the image
    description: 'A new initiative aims to shield farmers from the harmful effects of insecticides.',
  },
  {
    title: 'Kisan Kavach To Protect Farmers From Lethal Effects Of Insecticides',
    date: 'JUN 12, 2024',
    author: 'RATNESHWAR THAKUR',
    image: 'path_to_image.jpg', // Add the path to the image
    description: 'A new initiative aims to shield farmers from the harmful effects of insecticides.',
  },
  {
    title: 'Kisan Kavach To Protect Farmers From Lethal Effects Of Insecticides',
    date: 'JUN 12, 2024',
    author: 'RATNESHWAR THAKUR',
    image: 'path_to_image.jpg', // Add the path to the image
    description: 'A new initiative aims to shield farmers from the harmful effects of insecticides.',
  },
];

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    backgroundColor: '#f0f0f0', 
    maxWidth:'1000px',
    marginLeft:'250px',
    // Background color for the container
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
    maxWidth: '300px',
    maxHeight: '300px',
    marginRight: '20px',
    borderRadius: '5px',
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

function Technology() {
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.scienceTitle}>SCIENCE</h1>
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

export default Technology;