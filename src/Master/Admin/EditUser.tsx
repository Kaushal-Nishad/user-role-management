import React, { useState } from 'react';

interface User {
  username: string;
  role: string;
}

interface EditFormProps {
  user: User;
  onSave: (updatedUser: User) => void;
  onCancel: () => void;
}

const EditUser: React.FC<EditFormProps> = ({ user, onSave, onCancel }) => {
  const [username, setUsername] = useState(user.username);
  const [role, setRole] = useState(user.role);

  const handleSave = () => {
    onSave({ username, role });
  };

  return (
    <div className="edit-form">
      <h3>Edit User</h3>
      <div>
        <label>Username:</label>
        <input
        disabled={true}
          type="text"
          className='form-control'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className='mb-4'>
        <label>Role:</label>
        <input
          type="text"
          className='form-control'
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />
      </div>
      <button className='btn btn-primary me-3' onClick={handleSave}>Save</button>
      <button className='btn btn-danger' onClick={onCancel}>Cancel</button>
    </div>
  );
};

export default EditUser;
