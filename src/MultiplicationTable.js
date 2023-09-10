import { Component, createRef } from "react";
import "./style.css";
import myImage from "./favicon.png";

class MultiplicationTable extends Component {
  constructor() {
    super();
    this.inputRef = createRef();
    this.state = {
      inputValue: "",
      showTable: false,
    };
  }

  handleInputChange = (event) => {
    const inputValue = event.target.value;
    this.setState({ inputValue });
  };

  handleSubmitClick = () => {
    const inputValue = parseInt(this.state.inputValue);
    if (!isNaN(inputValue) && inputValue > 0) {
      this.setState({ showTable: true });
    } else {
      this.setState({ showTable: false });
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
            <th>Multiplier</th>
            <th>Multiplicand</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>{tableRows}</tbody>
      </table>
    );
  }

  render() {
    const { showTable } = this.state;

    return (
      <div className="main-container">
        <img className="image-class" alt="logo-table" src={myImage} />
        <div className="table-input">
          <h1>Multiplication Table Generator</h1>
          <label>Enter a number:</label>
          <input
            type="number"
            ref={this.inputRef}
            onChange={this.handleInputChange}
          />
          <button type="button" onClick={this.handleSubmitClick}>
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
