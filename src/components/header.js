import React from "react";
import { Jumbotron } from 'react-bootstrap';

const styles = {
  headerText: {
    marginLeft: "auto",
    textAlign: "center",
    marginRight: "auto",
    height: '175px',
    background:'lavender'
  
  },
};

function Header() {
  return (
   
    <Jumbotron fluid style = {styles.headerText}>
      <h1>Employee Directory</h1>
  </Jumbotron>
  

  );
}

export default Header;