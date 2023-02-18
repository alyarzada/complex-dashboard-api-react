import { Breadcrumbs, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import HomeIcon from "@mui/icons-material/Home";

const Header = (props) => {
  const Icon = props.currentPage.icon;
  const { t } = useTranslation();

  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      justifyContent="space-between"
      className="print:hidden"
    >
      <Typography
        variant="h6"
        component="h1"
        className="font-bold text-textDark2 dark:text-logoColor text-[16px] mb-1 lg:mb-6"
      >
        {t(props.currentPage.title)}
      </Typography>
      <Breadcrumbs className="mb-4 lg:mb-6" aria-label="breadcrumb">
        <Link
          underline="hover"
          className="text-logoColor flex items-center font-bold"
          to="/"
        >
          <HomeIcon
            sx={{ mr: 0.5, mb: 0.3 }}
            className="text-logoColor align-middle"
            fontSize="inherit"
          />
          {t("Home")}
        </Link>
        {props.extra ? (
          <Link
            underline="hover"
            className="text-logoColor flex items-center"
            to={"/" + props.to}
          >
            {props.icon}
            {t(props.extra)}
          </Link>
        ) : null}
        <Typography className="flex items-center">
          <Icon className="text-base mr-1 text-textDark2" />
          {t(props.currentPage.title)}
        </Typography>
      </Breadcrumbs>
    </Stack>
  );
};

export default Header;
