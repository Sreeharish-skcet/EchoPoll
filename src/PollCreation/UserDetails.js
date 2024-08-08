import React, { useState, useEffect } from 'react';
import './UserDetails.css';

const fontFamilies = [
  'Arial', 'Verdana', 'Helvetica', 'Times New Roman', 'Courier New', 'Georgia', 'Palatino', 'Garamond', 'Comic Sans MS', 'Arial Black', 'Tahoma', 'Impact'
];

function UserDetails({ pollDetails, onPollDetailsChange }) {
  const [localPollDetails, setLocalPollDetails] = useState(pollDetails);

  useEffect(() => {
    setLocalPollDetails(pollDetails);
  }, [pollDetails]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLocalPollDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleStyleChange = (e) => {
    const { name, value } = e.target;
    setLocalPollDetails((prevDetails) => ({
      ...prevDetails,
      style: {
        ...prevDetails.style,
        [name]: value,
      },
    }));
  };

  const handleOptionsChange = (e, index) => {
    const newOptions = [...localPollDetails.options];
    newOptions[index] = e.target.value;
    setLocalPollDetails((prevDetails) => ({
      ...prevDetails,
      options: newOptions,
    }));
  };

  const handleAddOption = () => {
    setLocalPollDetails((prevDetails) => ({
      ...prevDetails,
      options: [...prevDetails.options, ''],
    }));
  };

  const handleMatrixChange = (e, index, type) => {
    const newMatrix = [...localPollDetails[type]];
    newMatrix[index] = e.target.value;
    setLocalPollDetails((prevDetails) => ({
      ...prevDetails,
      [type]: newMatrix,
    }));
  };

  const handleAddMatrixRow = () => {
    setLocalPollDetails((prevDetails) => ({
      ...prevDetails,
      matrixRows: [...prevDetails.matrixRows, ''],
    }));
  };

  const handleAddMatrixColumn = () => {
    setLocalPollDetails((prevDetails) => ({
      ...prevDetails,
      matrixColumns: [...prevDetails.matrixColumns, ''],
    }));
  };

  const handlePollTypeChange = (e) => {
    setLocalPollDetails((prevDetails) => ({
      ...prevDetails,
      pollType: e.target.value,
      options: [], // Reset options when poll type changes
      matrixRows: [], // Reset matrix rows
      matrixColumns: [], // Reset matrix columns
    }));
  };

  const handleSaveChanges = () => {
    onPollDetailsChange(localPollDetails);
  };

  return (
    <div className="user-details">
      <h2>Poll Details</h2>
      <div className="form-group">
        <label htmlFor="pollType">Poll Type</label>
        <select id="pollType" name="pollType" value={localPollDetails.pollType} onChange={handlePollTypeChange}>
          <option value="">Select Poll Type</option>
          <option value="Single Choice Polls">Single Choice Polls</option>
          <option value="Multiple Choice Polls">Multiple Choice Polls</option>
          <option value="Rating Polls">Rating Polls</option>
          <option value="Yes/No Polls">Yes/No Polls</option>
          <option value="Ranking Polls">Ranking Polls</option>
          <option value="Open-Ended Polls">Open-Ended Polls</option>
          <option value="Matrix Polls">Matrix Polls</option>
          <option value="Demographic Polls">Demographic Polls</option>
          <option value="Poll with Comments">Poll with Comments</option>
          <option value="Image Polls">Image Polls</option>
          <option value="Time-based Polls">Time-based Polls</option>
          <option value="Conditional Polls">Conditional Polls</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="question">Question</label>
        <input
          type="text"
          id="question"
          name="question"
          value={localPollDetails.question}
          onChange={handleChange}
        />
      </div>
      {(localPollDetails.pollType === 'Single Choice Polls' || localPollDetails.pollType === 'Multiple Choice Polls' || localPollDetails.pollType === 'Poll with Comments') && (
        <div className="form-group">
          <label>Options</label>
          {localPollDetails.options.map((option, index) => (
            <input
              key={index}
              type="text"
              value={option}
              onChange={(e) => handleOptionsChange(e, index)}
            />
          ))}
          <button onClick={handleAddOption}>Add Option</button>
        </div>
      )}
      {localPollDetails.pollType === 'Matrix Polls' && (
        <>
          <div className="form-group">
            <label>Matrix Rows</label>
            {localPollDetails.matrixRows.map((row, index) => (
              <input
                key={index}
                type="text"
                value={row}
                onChange={(e) => handleMatrixChange(e, index, 'matrixRows')}
              />
            ))}
            <button onClick={handleAddMatrixRow}>Add Row</button>
          </div>
          <div className="form-group">
            <label>Matrix Columns</label>
            {localPollDetails.matrixColumns.map((col, index) => (
              <input
                key={index}
                type="text"
                value={col}
                onChange={(e) => handleMatrixChange(e, index, 'matrixColumns')}
              />
            ))}
            <button onClick={handleAddMatrixColumn}>Add Column</button>
          </div>
        </>
      )}
      <div className="form-group">
        <label htmlFor="fontFamily">Font Family</label>
        <select id="fontFamily" name="fontFamily" value={localPollDetails.style.fontFamily} onChange={handleStyleChange}>
          {fontFamilies.map((font) => (
            <option key={font} value={font}>
              {font}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="fontSize">Font Size</label>
        <input
          type="text"
          id="fontSize"
          name="fontSize"
          value={localPollDetails.style.fontSize}
          onChange={handleStyleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="fontColor">Font Color</label>
        <input
          type="color"
          id="fontColor"
          name="fontColor"
          value={localPollDetails.style.fontColor}
          onChange={handleStyleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="backgroundColor">Background Color</label>
        <input
          type="color"
          id="backgroundColor"
          name="backgroundColor"
          value={localPollDetails.style.backgroundColor}
          onChange={handleStyleChange}
        />
      </div>
      <button onClick={handleSaveChanges}>Save Changes</button>
    </div>
  );
}

export default UserDetails;