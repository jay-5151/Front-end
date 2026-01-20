import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addUser,
  updateUser,
  clearEditUser,
} from "../feature/userslice";

const UserForm = () => {
  const dispatch = useDispatch();
  const editUser = useSelector((state) => state.users.editUser);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
  });

  useEffect(() => {
    if (editUser) setForm(editUser);
  }, [editUser]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editUser) {
      dispatch(updateUser(form));
      dispatch(clearEditUser());
    } else {
      dispatch(addUser(form));
    }

    setForm({ name: "", phone: "", email: "", address: "" });
  };

  return (
    <div className="card">
      <form onSubmit={handleSubmit}>
        <h2>{editUser ? "Edit User" : "Add User"}</h2>

        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="Phone"
        />
        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          name="address"
          value={form.address}
          onChange={handleChange}
          placeholder="Address"
        />

        <button>{editUser ? "Update User" : "Add User"}</button>
      </form>
    </div>
  );
};

export default UserForm;