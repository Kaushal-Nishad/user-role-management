import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Header, Table } from '../../shared/components';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserData } from '../../features/user/userAPI';
import { setUser, setUsers } from '../../features/user/userSlice';
import { RootState } from '../../app/store';
import EditUser from './EditUser';
import AddUser from './AddUser';

interface User {
  username: string;
  role: string;
}

const UserManagement: React.FC = () => {

  const dispatch = useDispatch();
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [addingUser, setAddingUser] = useState(false);

  const users = useSelector((state: RootState) => state.user.users);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const userData = await fetchUserData();
        // console.log('Fetched User Data:', userData);
        dispatch(setUsers([userData]));
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    getUserData();
  }, [dispatch]);

  const columns = [
    { header: 'Name', accessor: 'username' },
    { header: 'Email', accessor: 'email' },
    { header: 'Role', accessor: 'role' },
  ];


  const handleEdit = (username: string) => {
    const userToEdit = users.find(user => user.username === username);
    if (userToEdit) setEditingUser(userToEdit);
  };

  const handleSave = (updatedUser: User) => {
    const updatedUsers = users.map(user =>
      user.username === updatedUser.username ? updatedUser : user
    );
    dispatch(setUsers(updatedUsers)); 
    setEditingUser(null); 
  };

  const handleAddNewUser = (newUser: User) => {
    dispatch(setUsers([...users, newUser]));
    setAddingUser(false);
  };

  const handleCancel = () => {
    setEditingUser(null);
    setAddingUser(false);
  };

  const handleDelete = (username: string) => {
    // console.log('Delete user with ID:', username);
    const updatedUsers = users.filter(user => user.username !== username);
    dispatch(setUsers(updatedUsers));
    alert('Delete user with Username:'+ username);
  };

  
  return (
    <>
      <Header />
      <div className="container my-4">
        <div className="row mb-3">
          <div className="col-md-8">
            <h1 className="fs-3">User Management</h1>
          </div>
          <div className="col-md-4">
            <button className="btn btn-primary float-end" 
            onClick={() => setAddingUser(true)}
            >
              <FontAwesomeIcon icon={faPlus} /> Add New User
            </button>
          </div>
        </div>
        <Table users={users} columns={columns} onEdit={handleEdit} onDelete={handleDelete} />
        {editingUser && (
        <EditUser
          user={editingUser}
          onSave={handleSave}
          onCancel={handleCancel}
        />
      )}
      {addingUser && (
        <AddUser
          onSave={handleAddNewUser}
          onCancel={handleCancel}
        />
      )}
      </div>
    </>
  );
};

export default UserManagement;
