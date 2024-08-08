import React, { useState } from 'react';
import './trending.css';

const Questionnaire = () => {
  const [formData, setFormData] = useState({
    favoriteColor: '',
    music: [],
    exercise: '',
    comments: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData((prevState) => {
        const newMusic = checked
          ? [...prevState.music, value]
          : prevState.music.filter((music) => music !== value);
        return { ...prevState, music: newMusic };
      });
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
  };

  return (
    <div className="container">
      <h1>Survey Questionnaire</h1>
      <form onSubmit={handleSubmit}>
        {/* Question 1 */}
        <div className="question">
          <label htmlFor="favoriteColor">1. What are your thoughts on the rapid development of AI and its impact on jobs?</label><br />
          <input
            type="text"
            id="favoriteColor"
            name="favoriteColor"
            value={formData.favoriteColor}
            onChange={handleChange}
            placeholder="Enter your opinion"
          />
        </div>

        {/* Question 2 */}
        <div className="question">
          <label>2. How do you think blockchain technology will change the future of finance?</label><br />
          <input
            type="checkbox"
            id="musicRock"
            name="music"
            value="Rock"
            checked={formData.music.includes('Rock')}
            onChange={handleChange}
          />
          <label htmlFor="musicRock">A. Increase Transparency</label><br />
          <input
            type="checkbox"
            id="musicPop"
            name="music"
            value="Pop"
            checked={formData.music.includes('Pop')}
            onChange={handleChange}
          />
          <label htmlFor="musicPop">B. Reduce Transaction Costs</label><br />
          <input
            type="checkbox"
            id="musicClassical"
            name="music"
            value="Classical"
            checked={formData.music.includes('Classical')}
            onChange={handleChange}
          />
          <label htmlFor="musicClassical">C. Improve Security</label><br />
          <input
            type="checkbox"
            id="musicJazz"
            name="music"
            value="Jazz"
            checked={formData.music.includes('Jazz')}
            onChange={handleChange}
          />
          <label htmlFor="musicJazz">C. Enable Decentralized Finance (DeFi)</label><br />
          <input
            type="checkbox"
            id="musicHipHop"
            name="music"
            value="Hip-Hop"
            checked={formData.music.includes('Hip-Hop')}
            onChange={handleChange}
          />
          <label htmlFor="musicHipHop">E. No Significant Change</label>
        </div>
        

        {/* Question 3 */}
        <div className="question">
          <label>3. How often do you exercise?</label><br />
          <input
            type="radio"
            id="exerciseDaily"
            name="exercise"
            value="Daily"
            checked={formData.exercise === 'Daily'}
            onChange={handleChange}
          />
          <label htmlFor="exerciseDaily">Daily</label><br />
          <input
            type="radio"
            id="exerciseWeekly"
            name="exercise"
            value="Weekly"
            checked={formData.exercise === 'Weekly'}
            onChange={handleChange}
          />
          <label htmlFor="exerciseWeekly">Weekly</label><br />
          <input
            type="radio"
            id="exerciseMonthly"
            name="exercise"
            value="Monthly"
            checked={formData.exercise === 'Monthly'}
            onChange={handleChange}
          />
          <label htmlFor="exerciseMonthly">Monthly</label><br />
          <input
            type="radio"
            id="exerciseRarely"
            name="exercise"
            value="Rarely"
            checked={formData.exercise === 'Rarely'}
            onChange={handleChange}
          />
          <label htmlFor="exerciseRarely">Rarely</label>
        </div>

        {/* Question 4 */}
        <div className="question">
          <label htmlFor="comments">4. Please provide any additional comments:</label><br />
          <textarea
            id="comments"
            name="comments"
            rows="4"
            value={formData.comments}
            onChange={handleChange}
            placeholder="Enter your comments here"
          />
        </div>

        {/* Submit Button */}
        <div className="submit-btn">
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};

export default Questionnaire;
