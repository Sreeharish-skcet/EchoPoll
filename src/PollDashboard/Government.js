import React from 'react';
import './Category.css';
import { useNavigate } from 'react-router-dom';

const Government = () => {
    const handleClick = () => {
        alert('Thank you for participating in the government poll!');
    };
    const navigate = useNavigate();

    return (
        <div className="education-poll-container">
            <h1>Government Poll</h1>
            <p>We value your opinion on various governmental topics. Please take a moment to participate in our poll and share your thoughts.</p>
            
            <div className="poll-question">
                <p>1. Which level of government do you think has the most impact on your daily life?</p>
                <input type="radio" name="q1" value="A" /> Local<br />
                <input type="radio" name="q1" value="B" /> State<br />
                <input type="radio" name="q1" value="C" /> Federal<br />
            </div>
            
            <div className="poll-question">
                <p>2. How would you rate the performance of the current government?</p>
                <input type="radio" name="q2" value="A" /> Excellent<br />
                <input type="radio" name="q2" value="B" /> Good<br />
                <input type="radio" name="q2" value="C" /> Average<br />
                <input type="radio" name="q2" value="D" /> Poor<br />
            </div>
            
            <div className="poll-question">
                <p>3. Do you believe the government is transparent in its operations?</p>
                <input type="radio" name="q3" value="Yes" /> Yes<br />
                <input type="radio" name="q3" value="No" /> No<br />
            </div>
            
            <div className="poll-question">
                <p>4. Should there be more regulations to ensure accountability in government?</p>
                <input type="radio" name="q4" value="Yes" /> Yes<br />
                <input type="radio" name="q4" value="No" /> No<br />
            </div>
            
            <div className="poll-question">
                <p>5. On a scale of 1 to 5, how satisfied are you with the current state of democracy in your country?</p>
                <input type="radio" name="q5" value="1" /> 1 (Very Dissatisfied)<br />
                <input type="radio" name="q5" value="2" /> 2<br />
                <input type="radio" name="q5" value="3" /> 3<br />
                <input type="radio" name="q5" value="4" /> 4<br />
                <input type="radio" name="q5" value="5" /> 5 (Very Satisfied)<br />
            </div>
            
            <div className="poll-question">
                <p>6. What changes would you like to see in the government to improve its effectiveness?</p>
                <textarea name="q6" rows="4" cols="50"></textarea>
            </div>

            <button onClick={handleClick} className="poll-button">Submit Your Vote</button>
            <button className="back-button" onClick={() => navigate('/publicdashboard')}>Back</button>
        </div>
    );
};

export default Government;
