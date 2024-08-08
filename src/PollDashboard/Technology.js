import React from 'react';
import './Category.css';
import { useNavigate } from 'react-router-dom';

const Technology = () => {
    const handleClick = () => {
        alert('Thank you for participating in the technology poll!');
    };
    const navigate = useNavigate();

    return (
        <div className="education-poll-container">
            <h1>Technology Poll</h1>
            <p>We value your opinion on various technology topics. Please take a moment to participate in our poll and share your thoughts.</p>
            
            <div className="poll-question">
                <p>1. What is your favorite technology to work with?</p>
                <input type="radio" name="q1" value="A" /> Artificial Intelligence<br />
                <input type="radio" name="q1" value="B" /> Machine Learning<br />
                <input type="radio" name="q1" value="C" /> Blockchain<br />
                <input type="radio" name="q1" value="D" /> Cybersecurity<br />
                <input type="radio" name="q1" value="E" /> Cloud Computing<br />
                <input type="radio" name="q1" value="F" /> Other<br />
            </div>
            
            <div className="poll-question">
                <p>2. How often do you use the latest technology tools or software?</p>
                <input type="radio" name="q2" value="A" /> Daily<br />
                <input type="radio" name="q2" value="B" /> Weekly<br />
                <input type="radio" name="q2" value="C" /> Monthly<br />
                <input type="radio" name="q2" value="D" /> Rarely<br />
                <input type="radio" name="q2" value="E" /> Never<br />
            </div>
            
            <div className="poll-question">
                <p>3. Do you believe that technology is advancing too quickly?</p>
                <input type="radio" name="q3" value="Yes" /> Yes<br />
                <input type="radio" name="q3" value="No" /> No<br />
            </div>
            
            <div className="poll-question">
                <p>4. Should there be more regulation on the use of personal data by technology companies?</p>
                <input type="radio" name="q4" value="Yes" /> Yes<br />
                <input type="radio" name="q4" value="No" /> No<br />
            </div>
            
            <div className="poll-question">
                <p>5. On a scale of 1 to 5, how important is it for technology to be eco-friendly?</p>
                <input type="radio" name="q5" value="1" /> 1 (Not Important)<br />
                <input type="radio" name="q5" value="2" /> 2<br />
                <input type="radio" name="q5" value="3" /> 3<br />
                <input type="radio" name="q5" value="4" /> 4<br />
                <input type="radio" name="q5" value="5" /> 5 (Very Important)<br />
            </div>
            
            <div className="poll-question">
                <p>6. What technological advancements do you expect to see in the next 10 years?</p>
                <textarea name="q6" rows="4" cols="50"></textarea>
            </div>

            <button onClick={handleClick} className="poll-button">Submit Your Vote</button>
            <button className="back-button" onClick={() => navigate('/publicdashboard')}>Back</button>
        </div>
    );
};

export default Technology;
