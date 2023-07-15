import React, { Component } from 'react';
import calculateBMI from './calculateBMI';
import './bmi.css';

class BMIForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weight: '',
      height: '',
      result: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleWeightChange = this.handleWeightChange.bind(this);
    this.handleHeightChange = this.handleHeightChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const bmi = calculateBMI(parseFloat(this.state.weight), parseFloat(this.state.height));
    this.setState({ result: `Your BMI is ${bmi}` });
  }

  handleWeightChange(e) {
    this.setState({ weight: e.target.value });
  }

  handleHeightChange(e) {
    this.setState({ height: e.target.value });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form-container">
        <label>
          Weight (in kilograms):
          <input type="number" step="0.01" value={this.state.weight} onChange={this.handleWeightChange} />
        </label>
        <label>
          Height (in meters):
          <input type="number" step="0.01" value={this.state.height} onChange={this.handleHeightChange} />
        </label>
        <button type="submit" className="calculate-button">Calculate BMI</button>
        <p className="result">{this.state.result}</p>
      </form>
    );
  }
}

export default BMIForm;
