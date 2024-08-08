import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Category.css';

const Education = () => {
    const handleClick = () => {
        alert('Thank you for participating in the education poll!');
    };
    const navigate = useNavigate();

    return (
        <div className="education-poll-container">
            <h1>Education Poll</h1>
            <p>We value your opinion on various educational topics. Please take a moment to participate in our poll and share your thoughts.</p>
            
            <div className="poll-question">
                <p>1. What is the most important factor in improving the quality of education?</p>
                <input type="radio" name="q1" value="A" /> Qualified Teachers<br />
                <input type="radio" name="q1" value="B" /> Modern Infrastructure<br />
                <input type="radio" name="q1" value="C" /> Updated Curriculum<br />
                <input type="radio" name="q1" value="D" /> Technology Integration<br />
            </div>
            
            <div className="poll-question">
                <p>2. Which of the following subjects do you believe should receive more focus in schools?</p>
                <input type="radio" name="q2" value="A" /> Science<br />
                <input type="radio" name="q2" value="B" /> Mathematics<br />
                <input type="radio" name="q2" value="C" /> Arts and Humanities<br />
                <input type="radio" name="q2" value="D" /> Physical Education<br />
            </div>
            
            <div className="poll-question">
                <p>3. Do you think standardized testing accurately measures a student's academic abilities?</p>
                <input type="radio" name="q3" value="Yes" /> Yes<br />
                <input type="radio" name="q3" value="No" /> No<br />
            </div>
            
            <div className="poll-question">
                <p>4. Should schools offer more vocational training programs to prepare students for specific careers?</p>
                <input type="radio" name="q4" value="Yes" /> Yes<br />
                <input type="radio" name="q4" value="No" /> No<br />
            </div>
            
            <div className="poll-question">
                <p>5. On a scale of 1 to 5, how satisfied are you with the current state of education in your country?</p>
                <input type="radio" name="q5" value="1" /> 1 (Very Unsatisfied)<br />
                <input type="radio" name="q5" value="2" /> 2 (Unsatisfied)<br />
                <input type="radio" name="q5" value="3" /> 3 (Neutral)<br />
                <input type="radio" name="q5" value="4" /> 4 (Satisfied)<br />
                <input type="radio" name="q5" value="5" /> 5 (Very Satisfied)<br />
            </div>
            
            <div className="poll-question">
                <p>6. What changes would you like to see in the education system to better prepare students for the future?</p>
                <textarea name="q6" rows="4" cols="50"></textarea>
            </div>

            <button onClick={handleClick} className="poll-button">Submit Your Vote</button>
            <button className="back-button" onClick={() => navigate('/publicdashboard')}>Back</button>
        </div>
    );
};

export default Education;
