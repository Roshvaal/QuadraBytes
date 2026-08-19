import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [score, setScore] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const evaluateGrade = () => {
    const grade = Number(score);

    if (name === "" || score === "" || grade < 0 || grade > 100) {
      setError("Invalid score.");
      setResult(null);
      return;
    }

    setError("");

    let remarks = "";
    let color = "";

    if (grade <= 74) {
      remarks = "Failed";
      color = "red";
    } else if (grade <= 79) {
      remarks = "Passed";
      color = "yellow";
    } else if (grade <= 84) {
      remarks = "Good";
      color = "blue";
    } else if (grade <= 90) {
      remarks = "Very Good";
      color = "green";
    } else {
      remarks = "Excellent";
      color = "green";
    }

    setResult({
      name: name,
      score: grade,
      remarks: remarks,
      color: color
    });
  };

  const clearFields = () => {
    setName("");
    setScore("");
    setResult(null);
    setError("");
  };

  return (
    <div className="container">
      <div className="card">
        <div className="header">
          <h1>Student Grade Evaluation</h1>
          <p>Activity 2</p>
        </div>

        <div className="content">
          <label>Student Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label>Score</label>
          <input
            type="number"
            placeholder="Enter score (0-100)"
            value={score}
            onChange={(e) => setScore(e.target.value)}
          />

          {error && <div className="error">{error}</div>}

          <div className="buttons">
            <button onClick={evaluateGrade}>
              Evaluate
            </button>

            <button className="clear" onClick={clearFields}>
              Clear
            </button>
          </div>

          {result && (
            <div className={`result ${result.color}`}>
              <p>Student Name</p>
              <h2>{result.name}</h2>

              <p>Score</p>
              <h2>{result.score}</h2>

              <p>Remarks</p>
              <h1>{result.remarks}</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;