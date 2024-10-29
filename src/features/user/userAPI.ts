export const fetchUserData = async () => {
    const response = await fetch('https://f2ed36a4mh.execute-api.ap-south-1.amazonaws.com/');
    if (!response.ok) throw new Error('Failed to fetch user data');
    return await response.json();
  };
  