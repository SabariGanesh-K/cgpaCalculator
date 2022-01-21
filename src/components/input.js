import { useState, React } from "react";
import InputBox from "./inputBox";
import Meter from "./meter";
import "./input.css";

function Calculator() {
  const [n, change_n] = useState(1);
  const initiate = [
    { credit: 1, grade: 10 },
    { credit: 1, grade: 10 },
    { credit: 1, grade: 10 },
    { credit: 1, grade: 10 },
    { credit: 1, grade: 10 },
    { credit: 1, grade: 10 },
    { credit: 1, grade: 10 },
    { credit: 1, grade: 10 },
    { credit: 1, grade: 10 },
    { credit: 1, grade: 10 },
    { credit: 1, grade: 10 },
  ];
  const handleNumberChange = (event) => {
    change_n(event.target.value);
  };

  const showInput = () => {
    console.log(n);

    var range = [];

    for (var i = 0; i < n; i++) {
      range.push(i);
    }
    console.log(range);

    const temp2 = range.map((i) => {
      console.log(i);

      return (
        <div key={i}>
          <InputBox id={i} list={updateList} />
        </div>
      );
    });
    setTemp(temp2);

    showCalculateButton(
      <calculatebutton onClick={computeGpa} style={{ width: "25%" }}>
        <div className="svg-wrapper-1">
          <div className="svg-wrapper">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path
                fill="currentColor"
                d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
              ></path>
            </svg>
          </div>
        </div>
        <span>CALCULATE</span>
      </calculatebutton>
    );
  };

  const [Scorelist, alterList] = useState(initiate);
  const [calculateButton, showCalculateButton] = useState(<div></div>);

  const [temp, setTemp] = useState(<div></div>);

  const computeGpa = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    showCalculateButton(<div></div>);

    var creditSum = 0;
    var creditGradeProductSum = 0;

    for (var j = 0; j < n; j++) {
      console.log(
        "credit",
        Scorelist[j]["credit"],
        "grade",
        Number(Scorelist[j]["grade"])
      );
      creditSum += Number(Scorelist[j]["credit"]);
      creditGradeProductSum +=
        Number(Scorelist[j]["credit"]) * Number(Scorelist[j]["grade"]);
    }
    console.log(creditSum);

    setTemp(<Meter gpa={creditGradeProductSum / creditSum} />);
  };

  function updateList(id, credit, grade) {
    const tempList = [...Scorelist];
    console.log(tempList);
    console.log("Called updateList for", id);

    tempList[id]["credit"] = credit;
    tempList[id]["grade"] = grade;
    alterList(tempList);
  }

  const reset = () => {
    setTemp(<div></div>);

    change_n(1);
    alterList(initiate);
    showCalculateButton(<div></div>);
  };

  return (
    <div style={{ padding: "5%", justifyContent: "center" }}>
      <form>
        <resetbutton className="noselect" onClick={reset}>
          <span className="text">RESET</span>
          <span className="icon">
            <svg
              viewBox="0 0 24 24"
              height="24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path>
            </svg>
          </span>
        </resetbutton>

        <div>
          <label className="inputbox">
            No of Subjects
            <select value={n} onChange={handleNumberChange}>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
              <option value={6}>6</option>
              <option value={7}>7</option>
              <option value={8}>8</option>
              <option value={9}>9</option>
              <option value={10}>1</option>
            </select>
          </label>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <proceedbutton onClick={showInput}>
            <span>Go Ahead</span>
            <div className="liquid"></div>
          </proceedbutton>
        </div>
      </form>
      {temp}
      {calculateButton}
    </div>
  );
}
export default Calculator;
