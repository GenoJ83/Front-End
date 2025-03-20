import React, { useState } from 'react';

const ResultsTable = () => {
  const [semesters, setSemesters] = useState([]);
  const [cgpa, setCgpa] = useState(0);

  const addSemester = () => {
    setSemesters([...semesters, {
      id: Date.now(),
      courses: [{ id: Date.now(), code: '', name: '', mark: '', credits: '', gp: 0 }],
      semesterGPA: 0
    }]);
  };

  const addCourse = (semesterId) => {
    setSemesters(semesters.map(semester => {
      if (semester.id === semesterId) {
        return {
          ...semester,
          courses: [...semester.courses, { id: Date.now(), code: '', name: '', mark: '', credits: '', gp: 0 }]
        };
      }
      return semester;
    }));
  };

  const calculateGP = (mark) => {
    if (mark >= 70) return 5.0;
    if (mark >= 60) return 4.0;
    if (mark >= 50) return 3.0;
    if (mark >= 45) return 2.0;
    if (mark >= 40) return 1.0;
    return 0.0;
  };

  const updateCourse = (semesterId, courseId, field, value) => {
    setSemesters(semesters.map(semester => {
      if (semester.id === semesterId) {
        const updatedCourses = semester.courses.map(course => {
          if (course.id === courseId) {
            const updatedCourse = { ...course, [field]: value };
            if (field === 'mark' || field === 'credits') {
              const mark = field === 'mark' ? value : course.mark;
              const credits = field === 'credits' ? value : course.credits;
              if (mark && credits) {
                updatedCourse.gp = calculateGP(parseFloat(mark)) * parseFloat(credits);
              }
            }
            return updatedCourse;
          }
          return course;
        });

        // Calculate semester GPA
        const totalCredits = updatedCourses.reduce((sum, course) => sum + (parseFloat(course.credits) || 0), 0);
        const totalGP = updatedCourses.reduce((sum, course) => sum + (course.gp || 0), 0);
        const semesterGPA = totalCredits > 0 ? totalGP / totalCredits : 0;

        return { ...semester, courses: updatedCourses, semesterGPA };
      }
      return semester;
    }));
  };

  const calculateCGPA = () => {
    let totalCredits = 0;
    let totalGP = 0;

    semesters.forEach(semester => {
      semester.courses.forEach(course => {
        if (course.credits && course.gp) {
          totalCredits += parseFloat(course.credits);
          totalGP += course.gp;
        }
      });
    });

    setCgpa(totalCredits > 0 ? totalGP / totalCredits : 0);
  };

  const removeCourse = (semesterId, courseId) => {
    setSemesters(semesters.map(semester => {
      if (semester.id === semesterId) {
        return {
          ...semester,
          courses: semester.courses.filter(course => course.id !== courseId)
        };
      }
      return semester;
    }));
  };

  const removeSemester = (semesterId) => {
    setSemesters(semesters.filter(semester => semester.id !== semesterId));
  };

  return (
    <div className="results-container">
      <h2>Academic Results</h2>
      <button className="button" onClick={addSemester}>Add New Semester</button>
      
      {semesters.map((semester, index) => (
        <div key={semester.id} className="semester-table">
          <div className="semester-header">
            <h3>Semester {index + 1}</h3>
            <button className="button" onClick={() => addCourse(semester.id)}>Add Course</button>
            <button className="button delete" onClick={() => removeSemester(semester.id)}>Remove Semester</button>
          </div>
          
          <table>
            <thead>
              <tr>
                <th>Course Code</th>
                <th>Course Name</th>
                <th>Mark</th>
                <th>Credit Units</th>
                <th>GP</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {semester.courses.map(course => (
                <tr key={course.id}>
                  <td>
                    <input
                      type="text"
                      value={course.code}
                      onChange={(e) => updateCourse(semester.id, course.id, 'code', e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={course.name}
                      onChange={(e) => updateCourse(semester.id, course.id, 'name', e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      min="0"
                      max="100"
                      value={course.mark}
                      onChange={(e) => updateCourse(semester.id, course.id, 'mark', e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      min="0"
                      step="0.5"
                      value={course.credits}
                      onChange={(e) => updateCourse(semester.id, course.id, 'credits', e.target.value)}
                    />
                  </td>
                  <td>{course.gp.toFixed(2)}</td>
                  <td>
                    <button className="button delete" onClick={() => removeCourse(semester.id, course.id)}>
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="semester-gpa">
            Semester GPA: {semester.semesterGPA.toFixed(2)}
          </div>
        </div>
      ))}

      <div className="cgpa-section">
        <button className="button" onClick={calculateCGPA}>Calculate CGPA</button>
        <h3>Current CGPA: {cgpa.toFixed(2)}</h3>
      </div>
    </div>
  );
};

export default ResultsTable; 