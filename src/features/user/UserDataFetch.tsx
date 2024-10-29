import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from './userSlice';
import { fetchUserData } from './userAPI';

const UserDataFetch: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getUserData = async () => {
      try {
        const userData = await fetchUserData();
        console.log('Fetched User Data:', userData);
        dispatch(setUser(userData));
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    getUserData();
  }, [dispatch]);

  return null; 
};

export default UserDataFetch;
