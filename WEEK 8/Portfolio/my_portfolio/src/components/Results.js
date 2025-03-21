// Results.js
import React, { useState } from 'react';

const Results = () => {
  const [results, setResults] = useState([]);
  const [newResult, setNewResult] = useState({
    courseName: '',
    mark: '',
    cu: '',
    gpa: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewResult(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newResult.courseName && newResult.mark && newResult.cu && newResult.gpa) {
      setResults(prev => [...prev, { ...newResult, id: Date.now() }]);
      setNewResult({
        courseName: '',
        mark: '',
        cu: '',
        gpa: ''
      });
    }
  };

  return (
    <section className="results-section">
      <h2>Semester Results</h2>
      
      <form className="add-result-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="courseName"
          placeholder="Course Name"
          value={newResult.courseName}
          onChange={handleInputChange}
          required
        />
        <input
          type="number"
          name="mark"
          placeholder="Mark"
          value={newResult.mark}
          onChange={handleInputChange}
          required
        />
        <input
          type="number"
          name="cu"
          placeholder="Credit Units"
          value={newResult.cu}
          onChange={handleInputChange}
          required
        />
        <input
          type="number"
          name="gpa"
          placeholder="GPA"
          value={newResult.gpa}
          onChange={handleInputChange}
          required
        />
        <button type="submit">Add Result</button>
      </form>

      {results.length > 0 && (
        <div className="results-table-container">
          <table className="results-table">
        <thead>
          <tr>
                <th>Course Name</th>
                <th>Mark</th>
                <th>CU</th>
                <th>GPA</th>
          </tr>
        </thead>
        <tbody>
              {results.map(result => (
                <tr key={result.id}>
                  <td>{result.courseName}</td>
                  <td>{result.mark}</td>
                  <td>{result.cu}</td>
                  <td>{result.gpa}</td>
            </tr>
          ))}
        </tbody>
      </table>
        </div>
      )}
    </section>
  );
};

export default Results;