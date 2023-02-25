import React from "react";
import Chart from "react-apexcharts";

function Piechart() {
  const options = { labels: ["Comedy", "Action"] };
  const series = [4, 5]; //our data

  return (
    <div className="donut">
      <Chart options={options} series={series} type="pie" width="480" />
    </div>
  );
}
export default Piechart;
