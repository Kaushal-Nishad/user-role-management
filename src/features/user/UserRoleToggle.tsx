import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { updateRole } from './userSlice';
import { useNavigate } from 'react-router-dom';


interface UserRoleToggleProps {
  onRoleChange: (newRole: string) => void;
}

const UserRoleToggle: React.FC<UserRoleToggleProps> = ({ onRoleChange }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const role = useSelector((state: RootState) => state.user.role);

  const handleRoleChange = () => {
    const newRole = role === 'admin' ? 'user' : 'admin';
    dispatch(updateRole(newRole));
    localStorage.setItem('role', newRole);
    onRoleChange(newRole);
    navigate('/');
  };

  return (
      <button className='nav-link' onClick={handleRoleChange} >Switch Role</button> 
  );
};

export default UserRoleToggle;
