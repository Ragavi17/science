import React from 'react';
import ReactDOM from 'react-dom';
import image1 from './images/space1.webp';
import image2 from './images/space2.jpg';
import image3 from './images/space3.jpg';

const articles = [
  {
    image: image1,
    title: 'New Space Telescope Reveals the Secrets of the Universe',
    date: 'July 31, 2024',
    author: 'Alison Sweeney',
  },
  {
    image: image2,
    title: 'Breakthroughs in Space Propulsion Technology',
    date: 'June 26, 2024',
    author: 'ROHAN J. KHADILKAR',
  },
  {
    image: image3,
    title: 'Advancements in Space Habitation Modules',
    date: 'May 24, 2024',
    author: 'BUDDHADITYA MUKHERJEE',
  },
];

const upcomingTechnologies = [
  {
    title: 'Reusable Rockets',
    description: 'SpaceX and Blue Origin are leading the charge in developing reusable rocket technology, significantly reducing the cost of space travel.',
  },
  {
    title: 'Space-Based Solar Power',
    description: 'New initiatives are exploring the potential of harvesting solar power in space and transmitting it to Earth, providing a constant and unlimited energy source.',
  },
];

const recentDiscoveries = [
  {
    title: 'Water Found on Mars',
    description: 'Recent missions have confirmed the presence of liquid water on Mars, opening up possibilities for future human colonization.',
  },
  {
    title: 'Exoplanet with Potential for Life',
    description: 'Astronomers have discovered an exoplanet in the habitable zone of its star, with conditions that might support life.',
  },
];

const techEvents = [
  {
    event: 'International Space Development Conference 2024',
    date: 'August 15-17, 2024',
    location: 'San Francisco, CA',
  },
  {
    event: 'Global Space Exploration Conference',
    date: 'September 10-12, 2024',
    location: 'New York, NY',
  },
];

const ArticleCard = ({ image, title, date, author }) => {
  const articleCardStyle = {
    display: 'flex',
    marginBottom: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  };

  const articleImageStyle = {
    width: '200px',
    height: 'auto',
  };

  const articleContentStyle = {
    padding: '20px',
    flex: '1',
  };

  const articleTitleStyle = {
    fontSize: '1.5em',
    margin: '0',
    color: '#2a5db0',
  };

  const articleDateStyle = {
    fontSize: '0.9em',
    color: '#777',
  };

  return (
    <div style={articleCardStyle}>
      <img src={image} alt={title} style={articleImageStyle} />
      <div style={articleContentStyle}>
        <h2 style={articleTitleStyle}>{title}</h2>
        <p style={articleDateStyle}>{date} | BY {author}</p>
      </div>
    </div>
  );
};

const ArticleList = () => {
  const articleListStyle = {
    padding: '20px',
    maxWidth: '800px',
    margin: '0 auto',
  };

  return (
    <div style={articleListStyle}>
      {articles.map((article, index) => (
        <ArticleCard
          key={index}
          image={article.image}
          title={article.title}
          date={article.date}
          author={article.author}
        />
      ))}
    </div>
  );
};

const UpcomingTech = () => {
  const sectionStyle = {
    padding: '20px',
    maxWidth: '800px',
    margin: '20px auto',
    backgroundColor: '#e3f2fd',
    borderRadius: '8px',
  };

  const titleStyle = {
    fontSize: '1.2em',
    color: '#2a5db0',
  };

  const descriptionStyle = {
    marginTop: '10px',
    color: '#555',
  };

  return (
    <div style={sectionStyle}>
      <h2 style={titleStyle}>Upcoming Space Technologies</h2>
      {upcomingTechnologies.map((tech, index) => (
        <div key={index}>
          <h3 style={titleStyle}>{tech.title}</h3>
          <p style={descriptionStyle}>{tech.description}</p>
        </div>
      ))}
    </div>
  );
};

const RecentDiscoveries = () => {
  const sectionStyle = {
    padding: '20px',
    maxWidth: '800px',
    margin: '20px auto',
    backgroundColor: '#fff3e0',
    borderRadius: '8px',
  };

  const titleStyle = {
    fontSize: '1.2em',
    color: '#e65100',
  };

  const descriptionStyle = {
    marginTop: '10px',
    color: '#555',
  };

  return (
    <div style={sectionStyle}>
      <h2 style={titleStyle}>Recent Discoveries in Space</h2>
      {recentDiscoveries.map((discovery, index) => (
        <div key={index}>
          <h3 style={titleStyle}>{discovery.title}</h3>
          <p style={descriptionStyle}>{discovery.description}</p>
        </div>
      ))}
    </div>
  );
};

const TechEvents = () => {
  const sectionStyle = {
    padding: '20px',
    maxWidth: '800px',
    margin: '20px auto',
    backgroundColor: '#f3e5f5',
    borderRadius: '8px',
  };

  const titleStyle = {
    fontSize: '1.2em',
    color: '#6a1b9a',
  };

  const eventStyle = {
    marginTop: '10px',
    color: '#555',
  };

  return (
    <div style={sectionStyle}>
      <h2 style={titleStyle}>Upcoming Space Tech Events</h2>
      {techEvents.map((event, index) => (
        <div key={index}>
          <h3 style={titleStyle}>{event.event}</h3>
          <p style={eventStyle}>{event.date} | {event.location}</p>
        </div>
      ))}
    </div>
  );
};

const App = () => {
  const appStyle = {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f5f5f5',
    minHeight: '100vh',
    padding: '20px',
  };

  const headerStyle = {
    display: 'flex',
    justifyContent: 'center', // Center align the header
    alignItems: 'center',
    marginBottom: '20px',
  };

  const h1Style = {
    fontSize: '1.5em',
    margin: '0',
  };

  return (
    <div style={appStyle}>
      <header style={headerStyle}>
        <h1 style={h1Style}>Trending Space Technologies</h1>
      </header>
      <ArticleList />
      <UpcomingTech />
      <RecentDiscoveries />
      <TechEvents />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));