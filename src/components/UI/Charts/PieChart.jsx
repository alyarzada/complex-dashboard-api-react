import React from "react";
import Chart from "react-apexcharts";

function Piechart() {
  // const options = { labels: ["Binanin servis haqqi", "Parkinq","Isti su"] };
  const series = [1, 7,7]; //our data
  var options = {
    series: [1, 7, 7],
    labels: ['Binanin servis haqqi', 'Parkinq', 'Isti su'],
    plugins:{
      legend: {
        display: false
      }
     },
  chart: {
    type: 'donut',
    foreColor: '#ffffff'
  },
  grid: {
    borderColor: "none"
  },
  plotOptions: {
    pie: {
      expandOnClick: false
    }
  },
  stroke:{
    show: false,
        width:0
   },
   legend:{
    position:'bottom'
   }
 
  };

 
  return (
    <div className="donut">
      <Chart options={options}  series={series} type="pie" width="380" />
    </div>
  );
}
export default Piechart;
