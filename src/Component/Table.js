import React, { useState } from "react";

function Table() {
  const [user, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [display, setDisplay] = useState(false);

  const addUser = () => {
    if (name && id) {
      const newUser = { name, id };
      setUsers([...user, newUser]);
      console.log("new", newUser);

      console.log("name", name);
      console.log("id", id);
      setId("");
      setName("");
    }
    setDisplay(!display);
  };

  return (
    <div>
      <div style={{ marginTop: 10, marginRight: "58%" }}>
        <button className="btn btn-primary" onClick={addUser}>
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
            <label>Id</label>
            <input
              type="text"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
          </form>
        ) : null}
      </div>
      <div className="container mt-2">
        <div className="table-responsive">
          <table className="table">
            <thead className="table-light">
              <tr>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">ID</th>

                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {user.map((item, index) => {
                return (
                  <tr key={index}>
                    <th scope="row">{item.name}</th>
                    <th scope="row">{item.id}</th>
                  </tr>
                );
              })}
              <tr>
                <th scope="row">shashi</th>
                <td>sahani</td>
                <td>1</td>
                <td>
                  <button className="btn btn-success m-1">UPDATE</button>
                  <button className="btn btn-danger m-1">DELETE</button>
                  <button className="btn btn-primary m-1">VIEW</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Table;
