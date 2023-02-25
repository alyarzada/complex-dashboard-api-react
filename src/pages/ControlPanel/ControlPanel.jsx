import { useSelector, useDispatch } from "react-redux";
import {
  Box,
  Typography,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { ReactSortable } from "react-sortablejs";
import { reOrderMenus } from "../../app/Slicers/data";
import { destroyModal } from "../../app/Slicers/modals";
import { useScrollToUp } from "../../hooks/useScrollToUp";
import { useTranslation } from "react-i18next";
import "react-toastify/dist/ReactToastify.css";
import "./styles/style.css";
import ConfirmModal from "./modals/ConfirmModal";
import FormModal from "./modals/FormModal";
import OtherModal from "./modals/OtherModal";
import DashboardPanel from "./DashboardPanel";
import CustomNestedModal from "../../components/UI/Modals/CustomNestedModal";
import TenantRegistrationModal from "./modals/TenantRegistrationModal";
import ControlPanelInvoice from "./ControlPanelInvoice";
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import ControlPanelStatus from "./ControlPanelStatus";
import emailCampaign from "../../assets/email-campaign.svg";
import ControlPanelRequests from "./ControlPanelRequests";
import ControlPanelRequestsArchive from "./ControlPanelRequestsArchive";
import Piechart from "../../components/UI/Charts/PieChart";
import LineCharts from "../../components/UI/Charts/LineCharts";
import Stackedbarchart from "../../components/UI/Charts/StackedBarChart";

const ControlPanel = () => {
  useScrollToUp();

  const dispatch = useDispatch();
  const { t } = useTranslation();

  const { isDraggable } = useSelector((state) => state.themes);
  const { modals } = useSelector((state) => state.modals);
  const { controlPanel } = useSelector((state) => state.data);
  const {
    user: {
      has_role: { role_id },
    },
  } = useSelector((state) => state.auth);

  return (
    <Box className="w-full">
      <Box>
        <Typography
          variant="h6"
          component="h1"
          className="font-bold text-textDark2 dark:text-logoColor text-[16px] mb-1 lg:mb-6"
        >
          {t("Dashboard")}
        </Typography>
      </Box>
      {role_id === 8 ? <ControlPanelInvoice /> : null}

      {role_id === 2 ? (
        <Box>
          <Stack direction="row" spacing={3}>
            <Box className="w-full">
              <Box className="mt-4 py-4 px-6 rounded bg-bgLight dark:bg-bgMain w-full drop-shadow-lg ">
                <Typography className="font-bold text-textDark2 dark:text-text2 text-[14px] mb-1 capitalize">
                  {t(["Paid invoices by services"])}
                </Typography>
                <Box className="flex justify-center">
                  <Piechart className="flex justify-center item-center" />
                </Box>
              </Box>
              <Box className="flex justify-around bg-[#0ACF97] p-2 rounded">
                <Typography className="font-bold text-textDark2 dark:text-black text-[18px] mb-1 capitalize text-center">
                  {t(["Count"])}:{" "}
                  <span className="dark:text-[#000] font-semibold text-[16px]">
                    15
                  </span>
                </Typography>
                <Typography className="font-bold text-textDark2 dark:text-black text-[18px] mb-1 capitalize text-center">
                  {t(["Amount"])}:{" "}
                  <span className=" dark:text-[#000] font-semibold text-[16px]">
                    2000 AZN{" "}
                  </span>
                </Typography>
              </Box>
            </Box>
            <Box className="w-full">
              <Box className="mt-4 py-4 px-6 rounded bg-bgLight dark:bg-bgMain w-full drop-shadow-lg ">
                <Typography className="font-bold text-textDark2 dark:text-text2 text-[14px] mb-1 capitalize">
                  {t(["Unpaid invoices by services"])}
                </Typography>
                <Box className="flex justify-center">
                  <Piechart className="flex justify-center item-center" />
                </Box>
              </Box>
              <Box className="flex justify-around bg-[#FA5C7C] p-2 rounded">
                <Typography className="font-bold text-textDark2 dark:text-black text-[18px] mb-1 capitalize text-center">
                  {t(["Count"])}:{" "}
                  <span className="dark:text-[#000] font-semibold text-[16px]">
                    15
                  </span>
                </Typography>
                <Typography className="font-bold text-textDark2 dark:text-black text-[18px] mb-1 capitalize text-center">
                  {t(["Amount"])}:{" "}
                  <span className=" dark:text-[#000] font-semibold text-[16px]">
                    2000 AZN{" "}
                  </span>
                </Typography>
              </Box>
            </Box>
          </Stack>
          <Box className="mt-4 py-4 px-6  rounded bg-bgLight dark:bg-bgMain w-full drop-shadow-lg ">
            <Typography className="font-bold text-textDark2 dark:text-text2 text-[16px] mb-4 capitalize ">
              {t(["Statistics for the current month"])}
            </Typography>
            <Box className="flex justify-around   mt-4 py-4 px-6 rounded bg-bgLight dark:bg-[#03032e] w-full drop-shadow-lg mb-6">
              <Box className="flex flex-col items-center">
                <Typography className="font-semibold text-textDark2 dark:text-text1 text-[14px] mb-1 capitalize">
                  {t(["Number of total services"])}
                </Typography>
                <Box className="flex items-center gap-2">
                  <Box className="bg-[#C9B26D] rounded w-[10px] h-[10px]"></Box>
                  <Typography className="font-semibold text-textDark2 dark:text-[#A6B4C1] text-[1.875rem] mb-1 capitalize">
                    3
                  </Typography>
                </Box>
              </Box>

              <Box className="flex flex-col items-center ">
                <Typography className="font-semibold text-textDark2 dark:text-text1 text-[14PX] mb-1 capitalize">
                  {t(["Count of paid invoices"])}
                </Typography>
                <Box className="flex items-center gap-2">
                  <Box className="bg-[#FA5C7C] rounded w-[10px] h-[10px]"></Box>
                  <Typography className="font-semibold text-textDark2 dark:text-[#A6B4C1] text-[1.875rem] mb-1 capitalize">
                    15
                  </Typography>
                </Box>
              </Box>
              <Box className="flex flex-col items-center">
                <Typography className="font-semibold text-textDark2 dark:text-text1 text-[14px] mb-1 capitalize">
                  {t(["Total amount paid"])}
                </Typography>
                <Box className="flex items-center gap-2">
                  <Box className="bg-[#0ACF97] rounded w-[10px] h-[10px]"></Box>
                  <Typography className="font-semibold text-textDark2 dark:text-[#A6B4C1] text-[1.875rem] mb-1 capitalize">
                    125 AZN
                  </Typography>
                </Box>
              </Box>
            </Box>
            <LineCharts />
          </Box>
          <Box className="mt-4 py-4 px-6 rounded bg-bgLight dark:bg-logoColor w-full drop-shadow-lg flex justify-between">
            <Box>
              <CampaignOutlinedIcon
                fontSize="large"
                color="action"
                className="mb-2"
              />
              <Typography className="text-[20px] text-[#fff]">
                Xidmətlərinizin fakturaları barəsində ətraflı məlumat almaq üçün
                buraya daxil olun <EastOutlinedIcon color="action" />
              </Typography>
            </Box>
            <Box className="w-[120px] h-[86px]">
              <img src={emailCampaign} alt="" />
            </Box>
          </Box>

          <Box className="mt-4 py-4 px-6 rounded bg-bgLight dark:bg-bgMain w-full drop-shadow-lg ">
            <Typography className="text-text2 mb-4 text-[0.9rem]">
              BORCLU MƏNZILLƏR
            </Typography>
            <Box>
              <TableContainer
                className="bg-transparent h-[240px] overflow-auto"
                component={Paper}
                sx={{
                  "&::-webkit-scrollbar": {
                    width: 3.5,
                  },
                  "&::-webkit-scrollbar-track": {
                    backgroundColor: "transparent",
                    borderRadius: 2,
                  },
                  "&::-webkit-scrollbar-thumb": {
                    backgroundColor: "gray",
                    borderRadius: 2,
                  },
                }}
              >
                <Table size="small" aria-label="a dense table">
                  <TableHead>
                    <TableRow>
                      <TableCell
                        className=" dark:text-text1 text-textDark2"
                        align="center"
                      >
                        {t(["Housing cooperative"])}
                      </TableCell>
                      <TableCell
                        className=" dark:text-text1 text-textDark2"
                        align="center"
                      >
                        {t(["Complex"])}
                      </TableCell>
                      <TableCell
                        className=" dark:text-text1 text-textDark2"
                        align="center"
                      >
                        {t(["Building"])}
                      </TableCell>
                      <TableCell
                        className=" dark:text-text1 text-textDark2"
                        align="center"
                      >
                        {t(["Apartment"])}
                      </TableCell>
                      <TableCell
                        className=" dark:text-text1 text-textDark2"
                        align="center"
                      >
                        {t(["Total debt"])}
                      </TableCell>
                      <TableCell className="dark:text-text1 text-textDark2 w-[30%]"></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody></TableBody>
                </Table>
              </TableContainer>
            </Box>
          </Box>
        </Box>
      ) : null}

      <ReactSortable
        list={controlPanel.map((menu) => ({ ...menu, chosen: true }))}
        setList={(newState) => dispatch(reOrderMenus(newState))}
        animation={400}
        disabled={!isDraggable}
      >
        {controlPanel.map((panel) => (
          <DashboardPanel key={panel.id} {...panel} />
        ))}
      </ReactSortable>

      {role_id === 4 ? (
        <Box>
          <ControlPanelRequests />
          <ControlPanelRequestsArchive />
          <Stackedbarchart />
          <Stack
            direction="row"
            justifyContent="center"
            gap={3}
            className="mb-6"
          >
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
              className="bg-bgMain rounded p-3"
            >
              <Typography className="text-text1">
                Təhlükəsizlik baxımından çatdırılma xidmətlərinin hər gün saat
                22:00-dan sonra binaya daxil olmaqlarına qadağa qoyulmasına nece
                baxırsınız?
              </Typography>
              <Piechart />
            </Stack>
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
              className="bg-bgMain rounded p-3"
            >
              <Typography className="text-text1">
                Təhlükəsizlik baxımından çatdırılma xidmətlərinin hər gün saat
                22:00-dan sonra binaya daxil olmaqlarına qadağa qoyulmasına nece
                baxırsınız?
              </Typography>
              <Piechart />
            </Stack>
          </Stack>
          <Stack direction="row" justifyContent="center" gap={3}>
            <Box className="bg-bgMain rounded p-3">
              <Typography className="text-text1 font-semibold">
                Kinozal
              </Typography>
              <Piechart />
            </Box>
            <Box className="bg-bgMain rounded p-3">
              <Typography className="text-text1 font-semibold">
                Masaj
              </Typography>
              <Piechart />
            </Box>
            <Box className="bg-bgMain rounded p-3">
              <Typography className="text-text1 font-semibold">
                İclas otağı
              </Typography>
              <Piechart />
            </Box>
          </Stack>
        </Box>
      ) : null}

      {modals.length > 0
        ? modals.map((modal, index) => (
            <CustomNestedModal
              handleClose={() => dispatch(destroyModal())}
              key={index}
              modal={modal}
              name={modal.name}
            >
              {modal.role === "children" && modal.type !== "form" ? (
                <ConfirmModal modal={modal} />
              ) : modal.role === "children" && modal.type === "form" ? (
                <FormModal modal={modal} />
              ) : modal.type === "form" && modal.category === "tenant" ? (
                <TenantRegistrationModal modal={modal} />
              ) : (
                <OtherModal modal={modal} />
              )}
            </CustomNestedModal>
          ))
        : null}
    </Box>
  );
};

export default ControlPanel;
