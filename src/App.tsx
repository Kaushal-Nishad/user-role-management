// src/App.tsx
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Login from './Master/Auth/Login';
import Register from './Master/Auth/Register';
import AdminDashboard from './Master/Admin/Dashboard';
import UserManagement from './Master/Admin/UserManagement';
import UserDashboard from './Master/User/Dashboard';
import Invoices from './Master/User/Invoices';
import { PrivateRoute } from './shared/components';
import { useSelector } from 'react-redux';
import { RootState } from './app/store';

const App: React.FC = () => {
  const getToken = localStorage.getItem('token');
 
  const [token, setToken] = useState<string | null>(getToken);
  
  const role = useSelector((state: RootState) => state.user.role);

  useEffect(() => {
    setToken(getToken);
  }, [getToken]);

  const isAuthenticated = !!token;

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {role === 'admin' ? (<>
          <Route path="/" element={<PrivateRoute element={<AdminDashboard />} isAuthenticated={isAuthenticated} />} />
          <Route path="/user-management" element={<PrivateRoute element={<UserManagement />} isAuthenticated={isAuthenticated} />} />
        </>) : (<>
          <Route path="/" element={<PrivateRoute element={<UserDashboard />} isAuthenticated={isAuthenticated} />} />
          <Route path="/invoices" element={<PrivateRoute element={<Invoices />} isAuthenticated={isAuthenticated} />} />
        </>)}
      </Routes>
    </Router>
  );
};

export default App;
