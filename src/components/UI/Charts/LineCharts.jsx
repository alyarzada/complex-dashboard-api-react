import { useState } from "react";
import Chart from "react-apexcharts";

const LineCharts = () => {
  const [product, setProduct] = useState([
    {
      name: "Binanin servis haqqi",
      data: [234, 45, 67, 987, 345, 456, 77, 223, 35, 469, 76, 190],
    },
    {
      name: "Parkinq",
      data: [134, 50, 77, 887, 235, 656, 97, 523, 65, 669, 16, 290],
    },
    {
      name: "Isti su",
      data: [34, 45, 67, 187, 345, 456, 87, 323, 45, 569, 76, 890],
    },
  ]);

  return (
    <div>
      <Chart
        type="line"
        width={"100%"}
        height={550}
        series={product}
        options={{
          xaxis: {
            categories: [
              "Mart, 22",
              "Aprel, 22",
              "May, 22",
              "Iyun, 22",
              "Iyul, 22",
              "Avqust, 22",
              "Sentyabr, 22",
              "Oktyabr, 22",
              "Noyabr, 22",
              "Dekabr, 22",
              "Yanvar, 22",
              "Fevral, 22",
            ],
          },
          legend: {
            show: false,
          },
          grid: {
            show: true,
            borderColor: "#90A4AE",
            strokeDashArray: 0,
            position: "back",
            xaxis: {
              lines: {
                show: false,
              },
            },
            yaxis: {
              lines: {
                show: true,
              },
            },
            row: {
              colors: undefined,
              opacity: 0.5,
            },
            column: {
              colors: undefined,
              opacity: 0.5,
            },
            padding: {
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
            },
          },
        }}
      />
    </div>
  );
};

export default LineCharts;
