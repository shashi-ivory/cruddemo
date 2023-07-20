import React, { useState } from "react";

function Table() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [display, setDisplay] = useState(false);
  const [editIndex, setEditIndex] = useState(null); // Track the index of the user being edited

  const addUser = () => {
    if (name && id) {
      const newUser = { name, id };
      if (editIndex !== null) {
        // If editIndex is not null, it means we're updating an existing user
        const updatedUsers = [...users];
        updatedUsers[editIndex] = newUser;
        setUsers(updatedUsers);
        setEditIndex(null);
      } else {
        setUsers([...users, newUser]);
      }
      setName("");
      setId("");
      setDisplay(false);
    }
  };

  const editUser = (index) => {
    const userToEdit = users[index];
    setName(userToEdit.name);
    setId(userToEdit.id);
    setEditIndex(index);
    setDisplay(true);
  };

  const cancelEdit = () => {
    setEditIndex(null);
    setName("");
    setId("");
    setDisplay(false);
  };

  return (
    <div>
      <div style={{ marginTop: 10, marginRight: "58%" }}>
        <button className="btn btn-primary" onClick={() => setDisplay(true)}>
          Add User
        </button>
        {display ? (
          <form>
            <label>Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <label>ID</label>
            <input
              type="text"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
            <button className="btn btn-success m-1" onClick={addUser}>
              {editIndex !== null ? "Update" : "Add"}
            </button>
            <button className="btn btn-danger m-1" onClick={cancelEdit}>
              Cancel
            </button>
          </form>
        ) : null}
      </div>
      {display == false ? (
        <div className="container mt-2">
          <div className="table-responsive">
            <table className="table">
              <thead className="table-light">
                <tr>
                  <th scope="col">First</th>
                  <th scope="col">ID</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={index}>
                    <td>{user.name}</td>
                    <td>{user.id}</td>
                    <td>
                      <button
                        className="btn btn-success m-1"
                        onClick={() => editUser(index)}
                      >
                        Update
                      </button>
                      <button className="btn btn-danger m-1">DELETE</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Table;
