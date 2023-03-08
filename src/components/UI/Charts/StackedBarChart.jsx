import React from "react";
import Chart from "react-apexcharts";

function Stackedbarchart() {
  return (
    <React.Fragment>
      <div className="container-fluid mb-3">
        <Chart
          type="bar"
          width={1349}
          height={400}
          series={[
            // {
            //   name: "Hydro-Electric",
            //   data: [13, 578, 898, 532, 465],
            //   //color: '#f90000'
            // },
            {
              name: "Oil",
              data: [100, 338, 587, 276],
              color: "#FA5C7C",
            },
            {
              name: "Gas",
              data: [10, 218, 587, 229],
              color: "#FFBC00",
            },
            {
              name: "Nuclear",
              data: [100, 100, 675, 907, 233],
              color: "#52E2B1",
            },
            // {
            //   name: "Coal",
            //   data: [100, 100, 537, 333],
            //   // color: '#52E2B1'
            // },
          ]}
          options={{
            // title: {
            //   text: "Enegry Consumption in Years",
            // },
            chart: {
              stacked: true,
            },
            plotOptions: {
              bar: {
                horizontal: true,
                columnWidth: "100%",
              },
            },
            stroke: {
              width: 1,
            },
            xaxis: {
              // title: {
              //   text: "Energy Consumption in Year's",
              // },
              categories: ["2017", "2018", "2019", "2020", "2021"],
            },
            yaxis: {
              title: {
                text: "Data in (K)",
              },
            },
            legend: {
              position: "top",
            },
            dataLabels: {
              enabled: true,
            },
            grid: {
              show: true,
              xaxis: {
                lines: {
                  show: false,
                },
              },
              yaxis: {
                lines: {
                  show: false,
                },
              },
            },
          }}
        />
      </div>
    </React.Fragment>
  );
}
export default Stackedbarchart;
