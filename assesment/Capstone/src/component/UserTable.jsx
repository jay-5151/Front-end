import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchUsers,
  deleteUser,
  setEditUser,
} from "../feature/userslice";

const UserTable = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.list);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div className="card">
      {users.length === 0 ? (
        <p>No records found</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Address</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.id}>
                <td>{u.name}</td>
                <td>{u.phone}</td>
                <td>{u.email}</td>
                <td>{u.address}</td>
                <td>
                  <div className="action-buttons">
                    <button
                      className="edit-btn"
                      onClick={() => dispatch(setEditUser(u))}
                    >
                      Edit
                    </button>

                    <button
                      className="view-btn"
                      onClick={() =>
                        alert(
                          `Name: ${u.name}\nEmail: ${u.email}\nPhone: ${u.phone}\nAddress: ${u.address}`
                        )
                      }
                    >
                      View
                    </button>

                    <button
                      className="delete-btn"
                      onClick={() =>
                        confirm("Delete user?") && dispatch(deleteUser(u.id))
                      }
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default UserTable;