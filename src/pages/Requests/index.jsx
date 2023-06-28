import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Box, Stack } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useNavigate, Outlet } from "react-router-dom";
import { requestPanels } from "../../data/apartment-owner/request-data";
import { useQuery } from "@tanstack/react-query";
import { getAllRequests } from "../../services/requestsReqs";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import DefaultButton from "../../components/UI/Buttons/DefaultButton";
import Header from "../../components/UI/Header";

import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";

const Requests = () => {
  const { role_id } = useSelector((state) => state.user);
  const [active, setActive] = useState(1);
  const [panel, setPanel] = useState("");

  const { data: refetchAllRequests } = useQuery({
    queryKey: ["requests"],
    queryFn: getAllRequests,
    enabled: false,
  });

  const { t } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    if (role_id === 8) {
      // refetchMyRequests();
    } else {
      refetchAllRequests();
    }
  });

  return (
    <Box className="w-full">
      <Header currentPage={{ title: "Requests", icon: CommentOutlinedIcon }} />
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        className="mb-6"
      >
        <FormControl variant="standard" className="w-1/5">
          <InputLabel id="demo-simple-select-standard-label">
            Müraciətin növü
          </InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={panel}
            onChange={(event) => setPanel(event.target.value)}
            label="Müraciətin növü"
          >
            {requestPanels.map((panel) => (
              <MenuItem
                onClick={() => {
                  setActive(panel.id);
                  navigate(`${panel.path}/${panel.type}`);
                }}
                value={panel.title}
                key={panel.id}
              >
                {t(panel.title)}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <DefaultButton
          startIcon={<AddCircleOutlineOutlinedIcon />}
          variant="contained"
          onClick={() => navigate("/requests/createnewrequest")}
        >
          {t("New Request")}
        </DefaultButton>
      </Stack>
      <Stack direction={{ xs: "column-reverse", lg: "row" }} spacing={2}>
        <Box className="flex-1">
          <Outlet active={active} />
        </Box>
      </Stack>
    </Box>
  );
};

export default Requests;
