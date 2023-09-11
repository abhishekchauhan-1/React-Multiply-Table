import { Component, createRef } from "react";
import "./style.css";
import myImage from "./favicon.png";

class MultiplicationTable extends Component {
  constructor() {
    super();
    this.inputRef = createRef();
    this.state = {
      inputValue: "",
      temporaryInputValue:"",
      showTable: false,
    };
  }

  handleInputChange = (event) => {
    const temporaryInputValue = event.target.value;
    this.setState({ temporaryInputValue });
  };

  handleSubmitClick = () => {
    const inputValue = parseInt(this.state.temporaryInputValue);
    if (!isNaN(inputValue) && inputValue > 0) {
      this.setState({ inputValue,showTable: true });
    } else {
      this.setState({ inputValue:"",showTable: false });
    }
  };

  renderTable() {
    const { inputValue } = this.state;
    const tableRows = [];

    for (let i = 1; i <= 10; i++) {
      const result = inputValue * i;

      tableRows.push(
        <tr key={i}>
          <td>{inputValue}</td>
          <td>{i}</td>
          <td>{result}</td>
        </tr>
      );
    }

    return (
      <table border="1px">
        <thead>
          <tr>
           <th>Multiplicand</th>
            <th>Multiplier</th> 
            <th>Result</th>
          </tr>
        </thead>
        <tbody>{tableRows}</tbody>
      </table>
    );
  }

  render() {
    const { showTable,temporaryInputValue } = this.state;

    return (
      <div className="main-container">
        <img className="image-class" alt="logo-table" src={myImage} />
        <div className="table-input">
          <h1>Multiplication Table Generator</h1>
          <label>Enter a number:</label>
          <input
            type="number"
            ref={this.inputRef}
            value={temporaryInputValue}
            onChange={this.handleInputChange}
          />
          <button className="button" type="button" onClick={this.handleSubmitClick}>
            Generate Table
          </button>
          {showTable ? this.renderTable() : null}
        </div>
        <p>
          Made With <i className="fa-solid fa-heart text-red-600 icon"></i> by
          Abhishek Singh Chauhan
        </p>
      </div>
     );
  }
}

export default MultiplicationTable;
