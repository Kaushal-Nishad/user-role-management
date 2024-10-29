import React, { useState } from 'react';

interface User {
  username: string;
  role: string;
}

interface AddUserFormProps {
  onSave: (user: User) => void;
  onCancel: () => void;
}

const AddUser: React.FC<AddUserFormProps> = ({ onSave, onCancel }) => {
  const [username, setUsername] = useState('');
  const [role, setRole] = useState('');

  const handleSubmit = () => {
    if (username && role) {
      onSave({ username, role });
    }
  };

  return (
    <div>
      <h3>Add New User</h3>
      <input
        type="text"
        placeholder="Username"
        className='form-control mb-3'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="text"
        placeholder="Role"
        className='form-control mb-3'
        value={role}
        onChange={(e) => setRole(e.target.value)}
      />
      <button className='btn btn-primary me-3' onClick={handleSubmit}>Save</button>
      <button className='btn btn-danger' onClick={onCancel}>Cancel</button>
    </div>
  );
};

export default AddUser;
