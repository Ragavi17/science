import React from 'react';
import image1 from './title1/EarthBlog1.1.jpg';
import image2 from './title1/EarthBlog2.1.webp';
import image3 from './title1/EarthBlog3.1.jpg';
import image4 from './title1/EarthBlog4.1.jpg';
import image5 from './title1/EarthBlog5.1.webp';


const posts = [
    {
        image: image1,
        title: 'Surprise Snowfall: Winter’s Late Arrival Down Under',
        date: 'August 4, 2024',
        author: 'Lindsey Doermann',
        description: 'Weather patterns changed on July 19, and heavy snow reached the mountains. On July 21, the Thredbo ski resort reported that 59 centimeters (23 inches) of snow had fallen during the storm. Smaller accumulations came in subsequent days. '
    },
    {
      image: image2,
      title: 'Scientists Find Nitrogen Emissions Cool the Climate – Could This Really Help Solve Climate Change?',
      date: 'August 2, 2024',
      author:'University of Sydney',
      description: 'A study reveals that nitrogen emissions have a cooling effect on the climate, but their overall environmental impact, including pollution and exacerbation of global warming, necessitates urgent reduction in greenhouse gas emissions.',
    },
    {
      image: image3,
      title: 'Ice in Crisis: Andean Glaciers Have Retreated to Lowest Levels in 11,700 Years',
      date: 'August 1 , 2024',
      author: 'Boston College',
      description: 'No longer covered in ice, Andean rocks signal the world’s glaciers are melting far faster than predicted.'
  },
    
    {
        image: image4,
        title: 'Revolutionizing Weather Forecasts: Scientists Decode the Rain Formation Bottleneck',
        date: 'July 31, 2024',
        author: 'National Center for Atmospheric Research',
        description: 'New findings have the potential to enhance computer models used for weather and climate prediction.'
    },
    { 
      image: image5,
      title: 'Ice Shelf Mysteries, Then Disappears Without a Trace',
      date: 'August 2, 2024',
      author:'University of Gothenburg',
      description: 'The expedition was carried out in regions of drifting ice in West Antarctica in 2022. On the return visit in 2024, Ran disappeared without a trace under the ice. ',
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

function Earth() {
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.scienceTitle}>Earth</h1>
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

export default Earth;
