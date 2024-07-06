import React from 'react';
import './SearchFilters.css'; 

const RadioButtonContainer = () => {
  return (
    <div className="container">
      <div className="column">
        <input type="radio" id="option1" name="group1" />
        <label htmlFor="option1">Option 1</label><br />
        <input type="radio" id="option2" name="group1" />
        <label htmlFor="option2">Option 2</label><br />
        <input type="radio" id="option3" name="group1" />
        <label htmlFor="option3">Option 3</label><br />
      </div>
      <div className="column">
        <input type="radio" id="option4" name="group2" />
        <label htmlFor="option4">Option 4</label><br />
        <input type="radio" id="option5" name="group2" />
        <label htmlFor="option5">Option 5</label><br />
        <input type="radio" id="option6" name="group2" />
        <label htmlFor="option6">Option 6</label><br />
      </div>
      <div className="column">
        <input type="radio" id="option7" name="group3" />
        <label htmlFor="option7">Option 7</label><br />
        <input type="radio" id="option8" name="group3" />
        <label htmlFor="option8">Option 8</label><br />
        <input type="radio" id="option9" name="group3" />
        <label htmlFor="option9">Option 9</label><br />
      </div>
      <div className="column">
        <input type="radio" id="option10" name="group4" />
        <label htmlFor="option10">Option 10</label><br />
        <input type="radio" id="option11" name="group4" />
        <label htmlFor="option11">Option 11</label><br />
        <input type="radio" id="option12" name="group4" />
        <label htmlFor="option12">Option 12</label><br />
      </div>
    </div>
  );
}

export default SearchFilters;
