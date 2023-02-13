import { Button, Stack, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { AddCircle, Inventory } from "@mui/icons-material";
import * as xlsx from "xlsx";

const Buttons = ({ dataTableRequests }) => {
  const navigate = useNavigate();

  const downloadExcel = () => {
    const workSheet = xlsx.utils.json_to_sheet(dataTableRequests);
    const workBook = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(workBook, workSheet, "list");
    //buffer
    let buf = xlsx.write(workBook, { bookType: "xlsx", type: "buffer" });
    //binary
    xlsx.write(workBook, { bookType: "xlsx", type: "binary" });
    //download
    xlsx.writeFile(workBook, "reportlist.xlsx");
  };

  const createNewRequest = () => {
    navigate("/requests/createnewrequest");
  };

  return (
    <Box className="capitalize">
      <Stack
        direction={{ sm: "column", md: "row" }}
        justifyContent="end"
        spacing={1}
      >
        <Button
          variant="contained"
          startIcon={<AddCircle />}
          className="bg-amber-400 capitalize mb-2 md:mb-0"
          onClick={downloadExcel}
        >
          Excel-ə köçür
        </Button>
        <Button
          variant="contained"
          startIcon={<AddCircle />}
          className="bg-green-600 capitalize mb-2 md:mb-0"
        >
          PDF-ə köçür
        </Button>
        <Button
          variant="contained"
          startIcon={<AddCircle />}
          className="bg-red-500 capitalize mb-2 md:mb-0"
          onClick={createNewRequest}
        >
          Müraciət yarat
        </Button>
        <Button
          variant="contained"
          startIcon={<Inventory className="text-xs mb-2 md:mb-0" />}
          className="bg-[#BDB26D] capitalize dark:text-text5"
        >
          Arxiv
        </Button>
      </Stack>
    </Box>
  );
};

export default Buttons;
