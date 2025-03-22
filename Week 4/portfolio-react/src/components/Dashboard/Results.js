import React, { useState, useEffect } from 'react';

function Results({ currentUser }) {
  const [results, setResults] = useState({
    y1s1: [],
    y1s2: [],
    y2s1: [],
    y2s2: []
  });

  useEffect(() => {
    // Load results from localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.email === currentUser.email);
    if (user && user.results) {
      setResults(user.results);
    }
  }, [currentUser]);

  const calculateGPA = (mark) => {
    if (mark >= 80) return 5;
    if (mark >= 70) return 4;
    if (mark >= 60) return 3;
    if (mark >= 50) return 2;
    if (mark >= 40) return 1;
    return 0;
  };

  const handleChange = (semester, index, field, value) => {
    const newResults = { ...results };
    if (!newResults[semester][index]) {
      newResults[semester][index] = {
        courseName: '',
        mark: '',
        cu: '',
        gpa: 0
      };
    }

    newResults[semester][index][field] = value;
    
    if (field === 'mark' || field === 'cu') {
      const mark = parseFloat(newResults[semester][index].mark) || 0;
      const cu = parseFloat(newResults[semester][index].cu) || 0;
      newResults[semester][index].gpa = calculateGPA(mark);
    }

    setResults(newResults);

    // Update localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userIndex = users.findIndex(u => u.email === currentUser.email);
    if (userIndex !== -1) {
      users[userIndex].results = newResults;
      localStorage.setItem('users', JSON.stringify(users));
    }
  };

  const addRow = (semester) => {
    const newResults = { ...results };
    newResults[semester].push({
      courseName: '',
      mark: '',
      cu: '',
      gpa: 0
    });
    setResults(newResults);

    // Update localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userIndex = users.findIndex(u => u.email === currentUser.email);
    if (userIndex !== -1) {
      users[userIndex].results = newResults;
      localStorage.setItem('users', JSON.stringify(users));
    }
  };

  const renderTable = (semester, title) => (
    <div>
      <h3>{title}</h3>
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
          {results[semester].map((result, index) => (
            <tr key={index}>
              <td>
                <input
                  type="text"
                  value={result.courseName || ''}
                  onChange={(e) => handleChange(semester, index, 'courseName', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="number"
                  min="0"
                  max="100"
                  value={result.mark || ''}
                  onChange={(e) => handleChange(semester, index, 'mark', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="number"
                  min="1"
                  max="6"
                  value={result.cu || ''}
                  onChange={(e) => handleChange(semester, index, 'cu', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="number"
                  value={result.gpa || 0}
                  readOnly
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={() => addRow(semester)}>Add Course</button>
    </div>
  );

  return (
    <section>
      <h2>Academic Results</h2>
      {renderTable('y1s1', 'Year 1 - Semester 1')}
      {renderTable('y1s2', 'Year 1 - Semester 2')}
      {renderTable('y2s1', 'Year 2 - Semester 1')}
      {renderTable('y2s2', 'Year 2 - Semester 2')}
    </section>
  );
}

export default Results; 