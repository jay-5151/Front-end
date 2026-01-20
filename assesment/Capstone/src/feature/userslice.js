import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API = "https://jsonplaceholder.typicode.com/users";

/* GET */
export const fetchUsers = createAsyncThunk("users/fetch", async () => {
  const res = await fetch(API);
  const data = await res.json();

  // 🔧 FIX: normalize address object to string
  return data.map((u) => ({
    ...u,
    address: u.address ? `${u.address.street}, ${u.address.city}` : "",
  }));
});

/* POST */
export const addUser = createAsyncThunk("users/add", async (user) => {
  const res = await fetch(API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });
  return res.json();
});

/* PUT */
export const updateUser = createAsyncThunk("users/update", async (user) => {
  const res = await fetch(`${API}/${user.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });
  return res.json();
});

/* DELETE */
export const deleteUser = createAsyncThunk("users/delete", async (id) => {
  await fetch(`${API}/${id}`, { method: "DELETE" });
  return id;
});

const userSlice = createSlice({
  name: "users",
  initialState: {
    list: [],
    editUser: null,
  },
  reducers: {
    setEditUser: (state, action) => {
      state.editUser = action.payload;
    },
    clearEditUser: (state) => {
      state.editUser = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.list = action.payload;
      })
      .addCase(addUser.fulfilled, (state, action) => {
        state.list.unshift(action.payload);
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        const i = state.list.findIndex((u) => u.id === action.payload.id);
        state.list[i] = action.payload;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.list = state.list.filter((u) => u.id !== action.payload);
      });
  },
});

export const { setEditUser, clearEditUser } = userSlice.actions;
export default userSlice.reducer;