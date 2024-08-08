import React, { useState } from 'react';
import './FeatureCards.css';

const FeatureCards = () => {
  const [formData, setFormData] = useState({
    productivity: [],
    socialMedia: [],
    climateResponsibility: []
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData((prevState) => {
        const newSelection = checked
          ? [...prevState[name], value]
          : prevState[name].filter((item) => item !== value);
        return { ...prevState, [name]: newSelection };
      });
    }
  };

  const handleDelete = (section) => {
    setFormData((prevState) => ({ ...prevState, [section]: [] }));
  };

  const handleUpload = (section) => {
    console.log(`Data for ${section} uploaded:`, formData[section]);
    // You can add your upload logic here
  };

  return (
   
    <section className="cardsss">
     <div className='Recently-created'>
        <h1>Here are some of your Recently created Polls</h1>
      </div>
      <div className="card">
        <h3>How has remote work affected your productivity?</h3>
        <input
          type="checkbox"
          id="increased"
          name="productivity"
          value="Increased"
          checked={formData.productivity.includes('Increased')}
          onChange={handleChange}
        />
        <label htmlFor="increased">A. Increased</label><br />
        <input
          type="checkbox"
          id="decreased"
          name="productivity"
          value="Decreased"
          checked={formData.productivity.includes('Decreased')}
          onChange={handleChange}
        />
        <label htmlFor="decreased">B. Decreased</label><br />
        <input
          type="checkbox"
          id="noChange"
          name="productivity"
          value="No Change"
          checked={formData.productivity.includes('No Change')}
          onChange={handleChange}
        />
        <label htmlFor="noChange">C. No Change</label><br />
        <input
          type="checkbox"
          id="varies"
          name="productivity"
          value="Varies"
          checked={formData.productivity.includes('Varies')}
          onChange={handleChange}
        />
        <label htmlFor="varies">D. Varies</label><br />

        <button className='gg' onClick={() => handleDelete('productivity')}>Delete</button>
        <button onClick={() => handleUpload('productivity')}>Upload</button>
      </div>

      <div className="card">
        <h3>How do you feel about the influence of social media on your daily life?</h3>
        <input
          type="checkbox"
          id="positive"
          name="socialMedia"
          value="Positive"
          checked={formData.socialMedia.includes('Positive')}
          onChange={handleChange}
        />
        <label htmlFor="positive">A. Positive</label><br />
        <input
          type="checkbox"
          id="negative"
          name="socialMedia"
          value="Negative"
          checked={formData.socialMedia.includes('Negative')}
          onChange={handleChange}
        />
        <label htmlFor="negative">B. Negative</label><br />
        <input
          type="checkbox"
          id="neutral"
          name="socialMedia"
          value="Neutral"
          checked={formData.socialMedia.includes('Neutral')}
          onChange={handleChange}
        />
        <label htmlFor="neutral">C. Neutral</label><br />
        <input
          type="checkbox"
          id="avoidance"
          name="socialMedia"
          value="Avoidance"
          checked={formData.socialMedia.includes('Avoidance')}
          onChange={handleChange}
        />
        <label htmlFor="avoidance">D. Avoidance</label><br />

        <button onClick={() => handleDelete('socialMedia')}>Delete</button>
        <button onClick={() => handleUpload('socialMedia')}>Upload</button>
      </div>

      <div className="card">
        <h3>Who do you think should bear the most responsibility for combating climate change?</h3>
        <input
          type="checkbox"
          id="governments"
          name="climateResponsibility"
          value="Governments"
          checked={formData.climateResponsibility.includes('Governments')}
          onChange={handleChange}
        />
        <label htmlFor="governments">A. Governments</label><br />
        <input
          type="checkbox"
          id="corporations"
          name="climateResponsibility"
          value="Corporations"
          checked={formData.climateResponsibility.includes('Corporations')}
          onChange={handleChange}
        />
        <label htmlFor="corporations">B. Corporations</label><br />
        <input
          type="checkbox"
          id="individuals"
          name="climateResponsibility"
          value="Individuals"
          checked={formData.climateResponsibility.includes('Individuals')}
          onChange={handleChange}
        />
        <label htmlFor="individuals">C. Individuals</label><br />
        <input
          type="checkbox"
          id="internationalOrgs"
          name="climateResponsibility"
          value="International Organizations"
          checked={formData.climateResponsibility.includes('International Organizations')}
          onChange={handleChange}
        />
        <label htmlFor="internationalOrgs">D. International Organizations</label><br />

        <button onClick={() => handleDelete('climateResponsibility')}>Delete</button>
        <button onClick={() => handleUpload('climateResponsibility')}>Upload</button>
      </div>
    </section>
  );
};

export default FeatureCards;
