import React from 'react';
import { Routes, Route } from 'react-router-dom';
import StudentsPage from '../components/StudentsPage';
import UsersPage from '../components/UsersPage';

function DashboardRoutes() {
  return (
    <Routes>
      <Route path="/" element={<h2>Welcome to the Dashboard</h2>} />
      <Route path="/students" element={<StudentsPage />} />
      <Route path="/users" element={<UsersPage />} />
    </Routes>
  );
}

export default DashboardRoutes;
