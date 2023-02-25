import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { Box, Typography, IconButton, Divider } from "@mui/material";
import CustomTextField from "../../components/Form/CustomTextField";
import SuccessButton from "../../components/UI/Buttons/SuccessButton";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import SentimentSatisfiedAltOutlinedIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import { Formik, Form } from "formik";
import EachNews from "./EachNews";
import { useTranslation } from "react-i18next";

const variants = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  hidden: { opacity: 0, y: 50 },
};

const News = () => {
  const { news, status } = useSelector((state) => state.news);
  const { t } = useTranslation();

  return (
    <Box>
      <Box className="mb-4 dark:bg-bgMain rounded p-4 text-textDark4 dark:text-text1 bg-white drop-shadow-lg">
        <Box>
          <Typography>
            <BorderColorOutlinedIcon /> {t(["Create New Post"])}
          </Typography>
        </Box>
        <Divider className="my-4" />
        <Box className=" rounded p-4 text-textDark4 dark:text-text1">
          <Formik
            initialValues={{
              requestform_type: "",
              requestform_department: [],
              requestform_dep_employess: [],
              title: "",
              message: "",
            }}
          >
            <Form>
              <Box>
                <CustomTextField
                  className="mb-0"
                  multiline
                  rows="3"
                  placeholder={t(["Write your post text"])}
                />
              </Box>
            </Form>
          </Formik>
        </Box>

        <Box className="flex justify-between mb-4 dark:bg-bgMain rounded p-4 text-textDark4 dark:text-text1 bg-white drop-shadow-lg">
          <Box>
            <IconButton>
              <ImageOutlinedIcon />
            </IconButton>
            <IconButton>
              <SentimentSatisfiedAltOutlinedIcon />
            </IconButton>
          </Box>
          <Box>
            <SuccessButton>{t(["Post"])}</SuccessButton>
          </Box>
        </Box>
      </Box>

      <motion.div variants={variants} initial="hidden" animate="visible">
        {status === "loading" ? (
          <Box>
            <EachNews />
            <EachNews />
            <EachNews />
          </Box>
        ) : status === "succeeded" && news.length > 0 ? (
          news.map((news) => <EachNews key={news.id} news={news} />)
        ) : (
          <Box className="p-3">
            <Typography className="text-text1">Şərh yoxdur</Typography>
          </Box>
        )}
      </motion.div>
    </Box>
  );
};

export default News;
