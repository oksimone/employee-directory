import React from "react";
import Form from "react-bootstrap/Form";

const styles = {
  divInput: {
    marginLeft: "auto",
    textAlign: "center",
    marginRight: "auto",
  },
};
function Search(props) {


  return (
    <div className="col-8" style={styles.divInput}>
      <Form>
        <Form.Group>
          <Form.Control onChange={e => props.searchGrey(e)} type="text"></Form.Control>
        </Form.Group>
      </Form>
    
    </div>
  );
}

export default Search;
