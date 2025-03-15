// Results.js
import React from "react";

const Results = () => {
  const courses = [
    { code: "CS101", title: "Structured Programming", grade: "A", credits: 4 },
    { code: "CS102", title: "Essential Hardware and Software Concepts", grade: "A", credits: 4 },
    { code: "CS103", title: "Fundamentals of Computing", grade: "A", credits: 4 },
    { code: "CS104", title: "Discrete Mathematics", grade: "B", credits: 3 },
    { code: "CS105", title: "Writing and Study Skills", grade: "B+", credits: 3 },
    { code: "CS106", title: "Understanding the Old Testament", grade: "A", credits: 3 },
  ];

  return (
    <section>
      <h2>Year 1 Semester 1 Results</h2>
      <table>
        <thead>
          <tr>
            <th>Course Code</th>
            <th>Course Title</th>
            <th>Grade</th>
            <th>Credit Units</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course, index) => (
            <tr key={index}>
              <td>{course.code}</td>
              <td>{course.title}</td>
              <td>{course.grade}</td>
              <td>{course.credits}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Results;