import React, { useState } from "react";
import "./App.css";
import Axios from "axios";

const App = () => {
  const [employeeList, setEmployeeList] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [country, setCountry] = useState("");
  const [position, setPosition] = useState("");
  const [year, setYear] = useState("");


// ----------------------------puuting data-------------------

  const handleData = () => {
    Axios.post("http://localhost:5000/create", {
      name: name,
      age: age,
      country: country,
      position: position,
      year: year,
    }).then((response) => {
      console.log(response);
    });
  };


  // ------------------showing data----------------

  const getEmployees = (e) => {
    Axios.get("http://localhost:5000/employees").then((response) => {
      setEmployeeList(response.data);
    });
  };

  return (
    <>
      <div className="container">
        <label className="labels" htmlFor="Name">
          Name
        </label>
        <input
          type="text"
          name="name"
          className="insert"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <hr />
        <label className="labels" htmlFor="Name">
          Age
        </label>
        <input
          type="number"
          name="age"
          className="insert"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <hr />
        <label className="labels" htmlFor="Name">
          Country
        </label>
        <input
          type="text"
          name="country"
          className="insert"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
        <hr />
        <label className="labels" htmlFor="Name">
          Position
        </label>
        <input
          type="text"
          name="position"
          className="insert"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
        />
        <hr />
        <label className="labels" htmlFor="Name">
          Year
        </label>
        <input
          type="number"
          name="year"
          className="insert"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
        <hr />
        <button type="submit" className="btn" onClick={handleData}>
          Submit
        </button>
      </div>
      <hr />
      <div className="show_emp">
        <button className="btn btn2" onClick={getEmployees}>
          Show Employees
        </button>
      </div>

{/* -----------------loop to show all values --------------- */}
      {employeeList.map((curElm, i) => {
        return (
          <>
            <table id="customers">
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Country</th>
                <th>Position</th>
                <th>Year</th>
              </tr>
              <tr>
                <td key={i}>{curElm.name}</td>
                <td key={i}>{curElm.age}</td>
                <td key={i}>{curElm.country}</td>
                <td key={i}>{curElm.position}</td>
                <td key={i}>{curElm.year}</td>
              </tr>
            </table>
          </>
        );
      })}
    </>
  );
};

export default App;
