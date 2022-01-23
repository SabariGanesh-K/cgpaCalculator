import React, { Component, useEffect, useState } from "react";

import "./inputBox.css";

function InputBox(props) {
  const [credit, changeCredit] = useState(1);
  const [grade, changeGrade] = useState(10);
  const [color,changeColor] = useState("orange")
  function handleCreditChange(event) {
    changeCredit(event.target.value);
  }

  function handleGradeChange(event) {
    changeGrade(event.target.value);
  }
  useEffect(() => {
    props.list(props.id, credit, grade);
  }, [credit, grade]);

  useEffect(()=>{
    if (props.id%2===0){
      changeColor("golden")
  }
  })

  return (

    <div style={{ padding: "5%" }}>
        <div style = {{display:'flex', justifyContent:'center'}}>
      <p className = "inputId">#{props.id + 1}</p>
      </div>
      <form>
        <label className="inputbox" style = {{backgroundColor:color}}>
          GRADE
          <select value={credit} onChange={handleCreditChange}>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
          </select>
        </label>
      
        
       
        <label className="inputbox"  style = {{backgroundColor:color}}>
          <select value={grade} onChange={handleGradeChange}>
            <option value={10}>S</option>
            <option value={9}>A</option>
            <option value={8}>B</option>
            <option value={7}>C</option>
            <option value={6}>D</option>
            <option value={5}>E</option>
          </select>
          CREDIT
        </label>
      </form>
    </div>
  );
}

export default InputBox;
