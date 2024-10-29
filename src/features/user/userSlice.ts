import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface User {
  username: string;
  email?: string;
  password?: string;
  role: string;
}

interface UserState {
  users: User[],
  email?: string;
  password?: string;
  username: string;
  role: string;
}

const initialState: UserState = {
  users: [],
  username: '',
  email: '',
  password: '',
  role: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      state.username = action.payload.username;
      state.role = action.payload.role;
      if (action.payload.email) state.email = action.payload.email;
      if (action.payload.password) state.password = action.payload.password;
    },
    setUsers: (state, action: PayloadAction<User[]>) => {
      state.users = action.payload; 
    },
    updateRole: (state, action: PayloadAction<string>) => {
      state.role = action.payload;
    },
  },
});

export const { setUser, setUsers, updateRole } = userSlice.actions;
export default userSlice.reducer;