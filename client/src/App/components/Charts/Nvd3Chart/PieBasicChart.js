import React from "react";
import NVD3Chart from "react-nvd3";

class PieBasicChart extends React.Component {
  render() {
    const { datum } = this.props;
    return (
      <NVD3Chart
        id="chart"
        height={300}
        type="pieChart"
        datum={datum}
        x="key"
        y="y"
      />
    );
  }
}

export default PieBasicChart;
