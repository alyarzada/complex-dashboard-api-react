import React from "react";
import ResponsiveTable from "./ResponsiveTable/index";

const ResponsivePagination = ({ data, columns, page }) => {
  return (
    <ResponsiveTable
      data={data.slice((page - 1) * 10, page * 10)}
      columns={columns}
    />
  );
};

export default ResponsivePagination;
