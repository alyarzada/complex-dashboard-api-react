import { Typography, Box } from "@mui/material";
import { ReactSortable } from "react-sortablejs";
import { useDispatch, useSelector } from "react-redux";
import { reOrderPanels } from "../../app/Slicers/data";
import { useTranslation } from "react-i18next";
import EachPanel from "./EachPanel";

const DashboardPanel = ({ title, panels, id }) => {
  const { isDraggable } = useSelector((state) => state.themes);
  const { t } = useTranslation();
  const dispatch = useDispatch();





  return (
    <Box className="mb-6">
      <Typography
        className="font-bold text-textDark2 dark:text-text2 text-[16px] mb-1 lg:mb-6"
        variant="h6"
        component="h1"
      >
        {t(title)}
      </Typography>
      <ReactSortable
        list={panels.map((panel) => ({ ...panel, chosen: true }))}
        setList={(newState) =>
          dispatch(reOrderPanels({ data: newState, id: id }))
        }
        className="select-none grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xxl:grid-cols-4 exl:grid-cols-6 gap-4"
        animation={400}
        disabled={!isDraggable}
      >
        {panels.map((panel) => (
          <EachPanel key={panel.id} panelId={panel.id} id={id} {...panel} />
        ))}
      </ReactSortable>
    </Box>
  );
};

export default DashboardPanel;
