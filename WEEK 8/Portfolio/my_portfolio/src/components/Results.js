// Results.js
import React from "react";

const Results = () => {
  return (
    <div className="card">
      <h2>Academic Results</h2>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Subject</th>
              <th>Grade</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Web Development</td>
              <td>A</td>
              <td className="success">Passed</td>
            </tr>
            <tr>
              <td>Database Systems</td>
              <td>B+</td>
              <td className="success">Passed</td>
            </tr>
            <tr>
              <td>Computer Networks</td>
              <td>A-</td>
              <td className="success">Passed</td>
            </tr>
            <tr>
              <td>Operating Systems</td>
              <td>B</td>
              <td className="success">Passed</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Results;