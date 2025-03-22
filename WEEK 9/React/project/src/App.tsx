import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './components/Header';
import { AuthLayout } from './components/AuthLayout';
import { ProfileSection } from './components/ProfileSection';
import { ResultsTable } from './components/ResultsTable';
import { User, Results, UserResults, CourseResult } from './types';

const App: React.FC = () => {
  const [isDark, setIsDark] = useState(false);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [users, setUsers] = useState<User[]>([]);
  const [results, setResults] = useState<UserResults>({});

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDark(true);
      document.body.classList.add('dark');
    }

    const savedUsers = localStorage.getItem('users');
    if (savedUsers) {
      setUsers(JSON.parse(savedUsers));
    }

    const savedResults = localStorage.getItem('results');
    if (savedResults) {
      setResults(JSON.parse(savedResults));
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.body.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'light' : 'dark');
  };

  const handleLogin = (email: string, password: string) => {
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
      setCurrentUser(user);
      return true;
    }
    return false;
  };

  const handleLogout = () => {
    setCurrentUser(null);
  };

  const handleSignup = (name: string, email: string, password: string) => {
    if (users.some(user => user.email === email)) {
      return false;
    }

    const newUser = { name, email, password };
    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    
    const updatedResults = {
      ...results,
      [email]: {
        y1s1: [], y1s2: [], y2s1: [], y2s2: []
      }
    };
    setResults(updatedResults);

    localStorage.setItem('users', JSON.stringify(updatedUsers));
    localStorage.setItem('results', JSON.stringify(updatedResults));
    return true;
  };

  const handleAddRow = (tableId: string) => {
    if (!currentUser) return;

    const semester = tableId.replace('Table', '');
    const newResult: CourseResult = {
      courseName: '',
      mark: 0,
      cu: 0,
      gpa: 0
    };

    const updatedResults = {
      ...results,
      [currentUser.email]: {
        ...results[currentUser.email],
        [semester]: [...results[currentUser.email][semester], newResult]
      }
    };

    setResults(updatedResults);
    localStorage.setItem('results', JSON.stringify(updatedResults));
  };

  const handleUpdateResult = (tableId: string, index: number, result: CourseResult) => {
    if (!currentUser) return;

    const semester = tableId.replace('Table', '');
    const updatedResults = {
      ...results,
      [currentUser.email]: {
        ...results[currentUser.email],
        [semester]: results[currentUser.email][semester].map((r, i) => 
          i === index ? result : r
        )
      }
    };

    setResults(updatedResults);
    localStorage.setItem('results', JSON.stringify(updatedResults));
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
        <Header isDark={isDark} onThemeToggle={toggleTheme} />
        
        <Routes>
          <Route path="/auth" element={<AuthLayout />}>
            {/* Add auth routes here */}
          </Route>

          <Route
            path="/dashboard"
            element={
              currentUser ? (
                <main className="container py-8">
                  <ProfileSection />
                  <section>
                    <h2 className="text-2xl font-bold mb-6">Academic Results</h2>
                    
                    <h3 className="text-xl font-semibold mb-4">Year 1 - Semester 1</h3>
                    <ResultsTable
                      id="y1s1"
                      results={results[currentUser.email]?.y1s1 || []}
                      onAddRow={handleAddRow}
                      onUpdateResult={handleUpdateResult}
                    />

                    <h3 className="text-xl font-semibold mb-4">Year 1 - Semester 2</h3>
                    <ResultsTable
                      id="y1s2"
                      results={results[currentUser.email]?.y1s2 || []}
                      onAddRow={handleAddRow}
                      onUpdateResult={handleUpdateResult}
                    />

                    <h3 className="text-xl font-semibold mb-4">Year 2 - Semester 1</h3>
                    <ResultsTable
                      id="y2s1"
                      results={results[currentUser.email]?.y2s1 || []}
                      onAddRow={handleAddRow}
                      onUpdateResult={handleUpdateResult}
                    />

                    <h3 className="text-xl font-semibold mb-4">Year 2 - Semester 2</h3>
                    <ResultsTable
                      id="y2s2"
                      results={results[currentUser.email]?.y2s2 || []}
                      onAddRow={handleAddRow}
                      onUpdateResult={handleUpdateResult}
                    />
                  </section>
                  <button
                    onClick={handleLogout}
                    className="mt-8 px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                  >
                    Logout
                  </button>
                </main>
              ) : (
                <Navigate to="/auth/login" replace />
              )
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;