import React from 'react';
import './Category.css';
import { useNavigate } from 'react-router-dom';

const SocialMedia = () => {
    const handleClick = () => {
        alert('Thank you for participating in the social media poll!');
    };
    const navigate = useNavigate();

    return (
        <div className="education-poll-container">
            <h1>Social Media Poll</h1>
            <p>We value your opinion on various social media topics. Please take a moment to participate in our poll and share your thoughts.</p>
            
            <div className="poll-question">
                <p>1. Which social media platform do you use the most?</p>
                <input type="radio" name="q1" value="A" /> Facebook<br />
                <input type="radio" name="q1" value="B" /> Instagram<br />
                <input type="radio" name="q1" value="C" /> Twitter<br />
                <input type="radio" name="q1" value="D" /> TikTok<br />
                <input type="radio" name="q1" value="E" /> LinkedIn<br />
            </div>
            
            <div className="poll-question">
                <p>2. How many hours per day do you spend on social media?</p>
                <input type="radio" name="q2" value="A" /> Less than 1 hour<br />
                <input type="radio" name="q2" value="B" /> 1-2 hours<br />
                <input type="radio" name="q2" value="C" /> 2-4 hours<br />
                <input type="radio" name="q2" value="D" /> More than 4 hours<br />
            </div>
            
            <div className="poll-question">
                <p>3. Do you think social media has a positive or negative impact on society?</p>
                <input type="radio" name="q3" value="Positive" /> Positive<br />
                <input type="radio" name="q3" value="Negative" /> Negative<br />
            </div>
            
            <div className="poll-question">
                <p>4. Should there be more regulation on social media platforms to control misinformation?</p>
                <input type="radio" name="q4" value="Yes" /> Yes<br />
                <input type="radio" name="q4" value="No" /> No<br />
            </div>
            
            <div className="poll-question">
                <p>5. On a scale of 1 to 5, how important is social media to your daily life?</p>
                <input type="radio" name="q5" value="1" /> 1 (Not Important)<br />
                <input type="radio" name="q5" value="2" /> 2<br />
                <input type="radio" name="q5" value="3" /> 3<br />
                <input type="radio" name="q5" value="4" /> 4<br />
                <input type="radio" name="q5" value="5" /> 5 (Very Important)<br />
            </div>
            
            <div className="poll-question">
                <p>6. What changes would you like to see on social media platforms to improve user experience?</p>
                <textarea name="q6" rows="4" cols="50"></textarea>
            </div>

            <button onClick={handleClick} className="poll-button">Submit Your Vote</button>
            <button className="back-button" onClick={() => navigate('/publicdashboard')}>Back</button>
        </div>
    );
};

export default SocialMedia;
