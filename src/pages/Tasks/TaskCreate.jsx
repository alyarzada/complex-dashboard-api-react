import { Box, Button, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import Header from "../../components/UI/Header";
import AssignmentIcon from "@mui/icons-material/Assignment";
import InboxIcon from "@mui/icons-material/Inbox";

const buttons = [
  {
    id: 1,
    title: "Archive",
    icon: <InboxIcon />,
    count: 0,
  },
  {
    id: 2,
    title: "Archive",
    icon: <InboxIcon />,
    count: 0,
  },
  {
    id: 3,
    title: "Archive",
    icon: <InboxIcon />,
    count: 0,
  },
  {
    id: 4,
    title: "Archive",
    icon: <InboxIcon />,
    count: 0,
  },
  {
    id: 5,
    title: "Archive",
    icon: <InboxIcon />,
    count: 0,
  },
  {
    id: 6,
    title: "Archive",
    icon: <InboxIcon />,
    count: 0,
  },
];

const TaskCreate = () => {
  const { t } = useTranslation();
  return (
    <Box>
      <Header
        currentPage={{
          title: t(["New Tasks"]),
          icon: AssignmentIcon,
        }}
        extra={"Tasks"}
        to="tasks"
        icon={
          <AssignmentIcon
            sx={{ mr: 0.5, mt: -0.5 }}
            className="text-logoColor align-middle"
            fontSize="inherit"
          />
        }
      />
      <Box className="lg:flex-row-reverse flex flex-col lg:gap-3">
        <Box
          className="py-6 px-6 my-4 rounded  drop-shadow-lg bg-bgLight
 dark:bg-bgMain w-full"
        ></Box>
        <Box
          className="py-6 px-6 my-4 rounded  drop-shadow-lg bg-bgLight
 dark:bg-bgMain lg:w-[30%]"
        >
          {buttons.map((item) => {
            return (
              <Button className="capitalize text-white flex justify-between w-full text-sm">
                <Typography
                  className={
                    item.id == 1
                      ? "text-[#fa515e] font-bold items-center"
                      : "text-white  items-center"
                  }
                >
                  {item.icon} {item.title}
                </Typography>
                <Typography
                  className={
                    item.id == 1
                      ? "text-sm text-[#fa515e] font-bold items-center justify-center bg-[#fa515e11]"
                      : "text-sm text-white  items-center justify-center bg-[#fa515e11]"
                  }
                >
                  {item.count}
                </Typography>
              </Button>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default TaskCreate;
