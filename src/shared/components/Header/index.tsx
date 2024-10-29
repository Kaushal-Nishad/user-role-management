import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSignOutAlt, faLock, faUserCircle, faThLarge, faUsers, faFileInvoice } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import UserRoleToggle from '../../../features/user/UserRoleToggle';

const Navbar: React.FC = () => {
  const [uRole, setURole] = useState<string | null>(localStorage.getItem("role"));

  const handleRoleChange = (newRole: string) => {
    localStorage.setItem('role', newRole);
    setURole(newRole);
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">

        <a className="navbar-brand" href="#">
          Products
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <UserRoleToggle onRoleChange={handleRoleChange} />
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/"}>
                <FontAwesomeIcon icon={faThLarge} /> Dashboard
              </Link>
            </li>

            {uRole === 'admin' && (
              <li className="nav-item">
                <Link className="nav-link" to="/user-management">
                  <FontAwesomeIcon icon={faUsers} /> User Management
                </Link>
              </li>
            )}

            {uRole === 'user' && (
              <li className="nav-item">
                <Link className="nav-link" to="/invoices">
                  <FontAwesomeIcon icon={faFileInvoice} /> Invoices
                </Link>
              </li>
            )}

            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="userDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <FontAwesomeIcon icon={faUserCircle} />
              </Link>
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
                <li>
                  <Link className="dropdown-item" to="#">
                    <FontAwesomeIcon icon={faUser} /> My Profile
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#">
                    <FontAwesomeIcon icon={faLock} /> Change Password
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="#">
                    <FontAwesomeIcon icon={faSignOutAlt} /> Logout
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
