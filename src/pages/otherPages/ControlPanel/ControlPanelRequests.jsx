import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Box,
  Typography,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import { getAllRequests } from "../../../services/requestsReqs";

const ControlPanelRequests = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const { allRequests } = useSelector((state) => state.requests);
  const [lastRequests, setLastRequests] = useState([]);
  const { data } = useQuery({
    queryKey: ["requests"],
    queryFn: getAllRequests,
  });

  useEffect(() => {
    if (allRequests.length > 0) {
      setLastRequests(allRequests?.slice(0, 5));
    }
  }, [allRequests]);

  return (
    <Box className="p-4 bg-bgLight  dark:bg-bgMain rounded-xl	mb-6">
      <Typography className="text-slate-400	font-bold	text-lg mb-2	">
        {t("Last requests")}
      </Typography>
      <Box>
        <TableContainer className="bg-bgLight dark:bg-bgMain" component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell className="w-[15%]">{t("Applicant")}</TableCell>
                <TableCell>{t("Request")}</TableCell>
                <TableCell className="w-[15%]">{t("Start date")}</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {lastRequests?.length > 0
                ? lastRequests.map((request, index) => (
                    <TableRow
                      className="h-12"
                      key={request.id}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell className="w-[1px]" component="th" scope="row">
                        {index + 1}
                      </TableCell>
                      <TableCell>
                        <Link to={`/requests/details/${request.id}`}>
                          {request.userData.name}
                        </Link>
                      </TableCell>
                      <TableCell>
                        <Link to={`/requests/details/${request.id}`}>
                          <span className="underline">
                            {request.request_departments}
                          </span>{" "}
                          : {request.message}
                        </Link>
                      </TableCell>
                      <TableCell>{request.last_message_date}</TableCell>
                    </TableRow>
                  ))
                : null}
            </TableBody>
          </Table>
        </TableContainer>
        <Box>
          <Button
            variant="contained"
            className="capitalize bg-logoColor mt-5 shadow-md shadow-logoColor/50"
            onClick={() => navigate("/request-panel")}
          >
            {t("View all")}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ControlPanelRequests;
