import { useSelector, useDispatch } from "react-redux";
import { Box, Typography, Stack } from "@mui/material";
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
import ControlPanelStatus from "./ControlPanelStatus";
import ControlPanelRequests from "./ControlPanelRequests";
import ControlPanelRequestsArchive from "./ControlPanelRequestsArchive";
import Piechart from "../../components/UI/Charts/PieChart";

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
        <Stack direction="row">
          <Piechart />
          <Piechart />
        </Stack>
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

      {/* {role_id !== 8 ? <ControlPanelTasks /> : null} */}
      {role_id === 4 ? <ControlPanelRequests /> : null}
      {role_id === 4 ? <ControlPanelRequestsArchive /> : null}
      {role_id === 4 ? <ControlPanelStatus /> : null}

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
