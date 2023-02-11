import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box } from "@mui/material";
import { ReactSortable } from "react-sortablejs";
import { useTranslation } from "react-i18next";
import { reOrderMenus } from "../../app/Slicers/data";
import { destroyModal } from "../../app/Slicers/modals";
import { useScrollToUp } from "../../hooks/useScrollToUp";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import "react-toastify/dist/ReactToastify.css";
import "./styles/style.css";

// custom components
import Header from "../../components/UI/Header";
import ConfirmModal from "./modals/ConfirmModal";
import FormModal from "./modals/FormModal";
import OtherModal from "./modals/OtherModal";
import DashboardPanel from "./DashboardPanel";
import CustomNestedModal from "../../components/UI/CustomNestedModal";
import TenantRegistrationModal from "./modals/TenantRegistrationModal";
import ControlPanelInvoice from "./ControlPanelInvoice";
import ControlPanelTasks from "./ControlPanelTasks";
import ControlPanelStatus from "./ControlPanelStatus";
import ControlPanelRequests from "./ControlPanelRequests";
import ControlPanelRequestsArchive from "./ControlPanelRequestsArchive";

const ControlPanel = () => {
  useScrollToUp();

  const { isDraggable } = useSelector((state) => state.themes);
  const { modals } = useSelector((state) => state.modals);
  const { controlPanel } = useSelector((state) => state.data);
  const {
    user: {
      has_role: { role_id },
    },
  } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <Box className="w-full">
      <Header
        currentPage={{
          title: "Dashboard",
          icon: AdminPanelSettingsOutlinedIcon,
        }}
      />
      {role_id === 8 ? <ControlPanelInvoice /> : null}
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

      {role_id !== 8 ? <ControlPanelTasks /> : null}
      {role_id !== 8 ? <ControlPanelRequests /> : null}
      {role_id !== 8 ? <ControlPanelRequestsArchive /> : null}
      {role_id !== 8 ? <ControlPanelStatus /> : null}

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
