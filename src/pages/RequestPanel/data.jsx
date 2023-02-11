import { Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const mobileColumns = [
  {
    key: "name",
    label: "Müraciət sahibi",
    width: 200,
    render: (value, data) => {
      return (
        <Link to={`/requests/details/${data.id}`}>
          {value + " - " + data.message}
        </Link>
      );
    },
  },
  {
    key: "status",
    label: "Status",
    width: 100,
    render: (value) => {
      if (value === 1) {
        return (
          <Typography className="text-xs bg-yellow-600 text-white py-1 px-2 rounded">
            Aşağı
          </Typography>
        );
      } else if (value === 2) {
        return (
          <Typography className="text-xs bg-red-500 text-white py-1 px-2 rounded">
            Yüksək
          </Typography>
        );
      } else {
        return (
          <Typography className="text-xs bg-green-600 text-white py-1 px-2 rounded">
            Normal
          </Typography>
        );
      }
    },
  },
  {
    key: "requestDepartments",
    label: "Şöbə",
    width: 150,
  },
  // {
  //   key: "message",
  //   label: "Müraciət",
  //   description: "This column has a value getter and is not sortable.",
  //   sortable: false,
  //   width: 250,
  // },
  { key: "startTime", label: "Başlama tarixi", width: 160 },
  { key: "endTime", label: "Bitmə tarixi", width: 160 },
];

const desktopColumns = [
  { field: "id", headerName: "ID", width: 80 },
  {
    field: "name",
    headerName: "Müraciət sahibi",
    width: 200,
    renderCell: (params) => {
      return (
        <Link to={`/requests/details/${params.row.id}`}>{params.row.name}</Link>
      );
    },
  },
  {
    field: "status",
    headerName: "Status",
    width: 100,
    renderCell: (params) => {
      if (params.row.status === 1) {
        return (
          <Typography className="text-xs bg-yellow-600 text-white py-1 px-2 rounded">
            Aşağı
          </Typography>
        );
      } else if (params.row.status === 2) {
        return (
          <Typography className="text-xs bg-red-500 text-white py-1 px-2 rounded">
            Yüksək
          </Typography>
        );
      } else {
        return (
          <Typography className="text-xs bg-green-600 text-white py-1 px-2 rounded">
            Normal
          </Typography>
        );
      }
    },
  },
  {
    field: "requestDepartments",
    headerName: "Şöbə",
    width: 150,
  },
  {
    field: "message",
    headerName: "Müraciət",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 250,
  },
  { field: "startTime", headerName: "Başlama tarixi", width: 160 },
  { field: "endTime", headerName: "Bitmə tarixi", width: 160 },
];

export { mobileColumns, desktopColumns };
