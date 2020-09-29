import React from "react";
import { Table } from "react-bootstrap";


const styles = {
  table: {
    background: "lavender",
    color: "black",
  },
};

function TableData(props) {
    return (
      <Table striped bordered hover variant="dark" style={styles.table}>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Occupation</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {props.state.greys.map((grey) => (
            <tr>
              <td>{grey.id}</td>
              <td>{grey.name}</td>
              <td>{grey.occupation}</td>
              <td>{grey.email}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
}

export default TableData;
