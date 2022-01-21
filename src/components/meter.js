import React, { Component } from "react";

import {
  CircularGaugeComponent,
  AxesDirective,
  AxisDirective,
  PointersDirective,
  PointerDirective,
} from "@syncfusion/ej2-react-circulargauge";
import "./meter.css";

class Meter extends React.Component {
  render() {
    const gpa = this.props.gpa.toFixed(2);
    const comment = () => {
      if (gpa < 5) return "You are Fked up !! 🙃";
      else if (gpa >= 5 && gpa <= 8.4)
        return "Grop up maannn..Not enoughhhhh 🤷‍♂️";
      else if (gpa > 8.4 && gpa < 10)
        return "Amazing wooorkkkk .... Cheersss 🥂🍻";
      else return "Hehe.. Stop dreaming.. Upload ur real score 😏 ";
    };
    return (
      <div>
        <div>
          <div className="cgpa">{gpa}</div>
          <div className="meter">
            <CircularGaugeComponent
              id="circulargauge"
              width="100%"
              height="100%"
              background="#1F1B24"
            >
              <AxesDirective style={{ background: "#1F1B24", fontSize: "0" }}>
                <AxisDirective
                  lineStyle={{
                    width: 2,
                    color: "red",
                  }}
                  background="#1F1B24"
                >
                  <PointersDirective>
                    <PointerDirective value={gpa * 10}></PointerDirective>
                  </PointersDirective>
                </AxisDirective>
              </AxesDirective>
            </CircularGaugeComponent>
          </div>
        </div>
        <div className="comments" >{comment()}</div>
      </div>
    );
  }
}

export default Meter;
