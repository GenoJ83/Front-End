import React from 'react';
import { CourseResult } from '../types';

interface ResultsTableProps {
  id: string;
  results: CourseResult[];
  onAddRow: (tableId: string) => void;
  onUpdateResult: (tableId: string, index: number, result: CourseResult) => void;
}

export const ResultsTable: React.FC<ResultsTableProps> = ({
  id,
  results,
  onAddRow,
  onUpdateResult,
}) => {
  const calculateGPA = (mark: number): number => {
    if (mark >= 80) return 5;
    if (mark >= 75) return 4.5;
    if (mark >= 70) return 4;
    if (mark >= 65) return 3.5;
    if (mark >= 60) return 3;
    if (mark >= 55) return 2.5;
    if (mark >= 50) return 2;
    if (mark >= 40) return 1;
    return 0;
  };

  return (
    <div className="mb-8">
      <table className="results-table w-full">
        <thead>
          <tr>
            <th className="px-6 py-3 bg-blue-600 text-white">Course Name</th>
            <th className="px-6 py-3 bg-blue-600 text-white">Mark</th>
            <th className="px-6 py-3 bg-blue-600 text-white">CU</th>
            <th className="px-6 py-3 bg-blue-600 text-white">GPA</th>
          </tr>
        </thead>
        <tbody>
          {results.map((result, index) => (
            <tr key={index} className="border-t border-gray-200 dark:border-gray-700">
              <td className="px-6 py-4">
                <input
                  type="text"
                  value={result.courseName}
                  onChange={(e) =>
                    onUpdateResult(id, index, {
                      ...result,
                      courseName: e.target.value,
                    })
                  }
                  className="w-full bg-transparent border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2"
                />
              </td>
              <td className="px-6 py-4">
                <input
                  type="number"
                  min="0"
                  max="100"
                  value={result.mark}
                  onChange={(e) => {
                    const mark = Number(e.target.value);
                    onUpdateResult(id, index, {
                      ...result,
                      mark,
                      gpa: calculateGPA(mark),
                    });
                  }}
                  className="w-full bg-transparent border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2"
                />
              </td>
              <td className="px-6 py-4">
                <input
                  type="number"
                  min="1"
                  max="6"
                  value={result.cu}
                  onChange={(e) =>
                    onUpdateResult(id, index, {
                      ...result,
                      cu: Number(e.target.value),
                    })
                  }
                  className="w-full bg-transparent border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2"
                />
              </td>
              <td className="px-6 py-4">
                <input
                  type="number"
                  value={result.gpa}
                  readOnly
                  className="w-full bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        onClick={() => onAddRow(id)}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
      >
        Add Course
      </button>
    </div>
  );
};