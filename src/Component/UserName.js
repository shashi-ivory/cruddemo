import React, { useEffect, useState } from "react";
import { Button, Container, Form, Table } from "react-bootstrap";

function UserName() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [nameList, setNameList] = useState([]);

  const handleInputChange = (e) => {
    setName(e.target.value);
  };
  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };
  const handleAddName = () => {
    if (name.trim() !== "" && age.trim() !== "") {
      const updatedList = [...nameList, { name, age }];
      setNameList(updatedList);
      localStorage.setItem("dataKey", JSON.stringify(updatedList));
      setName("");
      setAge("");
    }
  };
  const displayData = () => {
    const storedData = localStorage.getItem("dataKey");
    if (storedData) {
      setNameList(JSON.parse(storedData));
    }
  };

  return (
    <Container>
      <h1 className="my-4">Enter Your name</h1>
      <Form>
        <Form.Group controlId="formName">
          <Form.Control
            type="text"
            value={name}
            onChange={handleInputChange}
            className="my-4"
          />
          <Form.Control
            type="text"
            value={age}
            onChange={handleAgeChange}
            className="my-4"
          />
        </Form.Group>
        <Button variant="primary" onClick={handleAddName}>
          Add name
        </Button>
        <Button variant="primary m-2" onClick={displayData}>
          display Data
        </Button>
      </Form>
      <Table striped bordered hover className="mt-4">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {nameList.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default UserName;
