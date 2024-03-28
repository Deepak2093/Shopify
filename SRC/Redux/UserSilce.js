import {createSlice} from '@reduxjs/toolkit';

const UserSlice = createSlice({
  name: 'users',
  initialState: [],
  reducers: {
    addUsers(state, action) {
      state.push(action.payload);
    },
    updateUser(state, action) {
      let list = state;
      list.map((item, index) => {
        if (item.id == action.payload.id) {
          (item.email = action.payload.email),
            (item.name = action.payload.name),
            (item.phone = action.payload.phone),
            (item.location = action.payload.location),
            (item.isActive = action.payload.isActive);
        }
      });
      state = list;
    },
    removeUser(state, action) {
      return (state = state.filter(item => item.id !== action.payload.id));
    },
  },
});

export const {addUsers, updateUser, removeUser} = UserSlice.actions;
export default UserSlice.reducer;
