import React from 'react';
import './Category.css';
import { useNavigate } from 'react-router-dom';

const Sports = () => {
    const handleClick = () => {
        alert('Thank you for participating in the sports poll!');
    };
    const navigate = useNavigate();

    return (
        <div className="education-poll-container">
            <h1>Sports Poll</h1>
            <p>We value your opinion on various sports topics. Please take a moment to participate in our poll and share your thoughts.</p>
            
            <div className="poll-question">
                <p>1. What is your favorite sport to watch?</p>
                <input type="radio" name="q1" value="A" /> Football<br />
                <input type="radio" name="q1" value="B" /> Basketball<br />
                <input type="radio" name="q1" value="C" /> Baseball<br />
                <input type="radio" name="q1" value="D" /> Soccer<br />
                <input type="radio" name="q1" value="E" /> Other<br />
            </div>
            
            <div className="poll-question">
                <p>2. How often do you participate in sports or physical activities?</p>
                <input type="radio" name="q2" value="A" /> Daily<br />
                <input type="radio" name="q2" value="B" /> Weekly<br />
                <input type="radio" name="q2" value="C" /> Monthly<br />
                <input type="radio" name="q2" value="D" /> Rarely<br />
                <input type="radio" name="q2" value="E" /> Never<br />
            </div>
            
            <div className="poll-question">
                <p>3. Do you think sports should be a mandatory part of the school curriculum?</p>
                <input type="radio" name="q3" value="Yes" /> Yes<br />
                <input type="radio" name="q3" value="No" /> No<br />
            </div>
            
            <div className="poll-question">
                <p>4. Should professional athletes be considered role models?</p>
                <input type="radio" name="q4" value="Yes" /> Yes<br />
                <input type="radio" name="q4" value="No" /> No<br />
            </div>
            
            <div className="poll-question">
                <p>5. On a scale of 1 to 5, how important is sportsmanship in professional sports?</p>
                <input type="radio" name="q5" value="1" /> 1 (Not Important)<br />
                <input type="radio" name="q5" value="2" /> 2<br />
                <input type="radio" name="q5" value="3" /> 3<br />
                <input type="radio" name="q5" value="4" /> 4<br />
                <input type="radio" name="q5" value="5" /> 5 (Very Important)<br />
            </div>
            
            <div className="poll-question">
                <p>6. What changes would you like to see in sports to improve the experience for fans and players?</p>
                <textarea name="q6" rows="4" cols="50"></textarea>
            </div>

            <button onClick={handleClick} className="poll-button">Submit Your Vote</button>
            <button className="back-button" onClick={() => navigate('/publicdashboard')}>Back</button>
        </div>
    );
};

export default Sports;
