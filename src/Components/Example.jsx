// Example.js
import React from 'react';

const posts = [
  {
    title: "Tapping Earth's Heat: India's Next Big Leap In Clean Energy",
    date: 'JUL 06, 2024',
    author: 'RATNESHWAR THAKUR',
    image: '', // Add the path to the image if there is one
  },
  {
    title: 'Kisan Kavach To Protect Farmers From Lethal Effects Of Insecticides',
    date: 'JUN 12, 2024',
    author: 'RATNESHWAR THAKUR',
    image: 'path_to_image.jpg', // Add the path to the image
  },
];

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
  },
  title: {
    textAlign: 'center',
    fontSize: '2em',
    marginBottom: '20px',
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
    backgroundColor: '#fef7f5',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  image: {
    maxWidth: '150px',
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
  },
};

function Example() {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Recent Posts</h2>
      <div style={styles.list}>
        {posts.map((post, index) => (
          <div style={styles.item} key={index}>
            {post.image && <img src={post.image} alt={post.title} style={styles.image} />}
            <div style={styles.content}>
              <h3 style={styles.itemTitle}>{post.title}</h3>
              <p style={styles.meta}>
                <span>{post.date}</span> | By {post.author}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Example;
