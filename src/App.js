import React from "react";
import Header from "./components/header";
import Search from "./components/search";
import TableData from "./components/table";
import greys from "./greys.json";

import "./App.css";
class App extends React.Component {
  state = {
    greys: greys,
    shadowGreys: greys,
  };

  handleInputChange = (event) => {
    console.log(event.target.value);
    const currentValueArray = event.target.value.toLocaleLowerCase().split("")
    if(currentValueArray.length === 0){
      this.setState({
        greys: this.state.shadowGreys
      })
    }else {
      const newGrey = this.state.shadowGreys.filter(employee => {
        const fullName = employee.name.toLocaleLowerCase().split("");
        const comparisonArray = [];
        for(let i = 0; i<currentValueArray.length; i++){
          comparisonArray.push(fullName[i])
        }
        console.log(comparisonArray.join(""), currentValueArray.join(""))
        return comparisonArray.join("") === currentValueArray.join("");
      })

      this.setState({
        greys: newGrey
      })
    }


  };

  render() {
    return (
      <div className="container">
        <Header />
        <Search searchGrey={this.handleInputChange} />
        <TableData state={this.state} />
      </div>
    );
  }
}

export default App;
