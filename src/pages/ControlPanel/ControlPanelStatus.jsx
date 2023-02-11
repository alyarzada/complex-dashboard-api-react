import React from "react";
import { Bar } from "britecharts-react";

const barData = [
  {
      name: 'Radiating',
      value: 2,
  },
  {
      name: 'Opalescent',
      value: 4,
  },
  {
      name: 'Shining',
      value: 3,
  },
  {
      name: 'Vibrant',
      value: 6,
  },
  {
      name: 'Vivid',
      value: 6,
  },
  {
      name: 'Brilliant',
      value: 1,
  },
];

// const marginObject = {
//   left: 100,
//   right: 40,
//   top: 40,
//   bottom: 40,
// };

const ControlPanelStatus = () => {
  return (
    <Bar
      data={barData}
      width={400}
      isHorizontal={true}
      height={400}
      betweenBarsPadding={0.3}
      // colorSchema={colors.colorSchemas.orange}
      // margin={marginObject}
  />
  );
};

export default ControlPanelStatus;
