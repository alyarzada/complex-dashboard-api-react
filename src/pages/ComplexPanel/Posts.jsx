import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { Box, Typography, IconButton, Divider } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Formik, Form } from "formik";
import { useOutletContext } from "react-router-dom";

import SentimentSatisfiedAltOutlinedIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import CustomTextField from "../../components/Form/CustomTextField";
import SuccessButton from "../../components/UI/Buttons/SuccessButton";
import EachPost from "./EachPost";

const variants = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  hidden: { opacity: 0, y: 50 },
};

const Posts = () => {
  const { role_id } = useSelector((state) => state.user);
  const { t } = useTranslation();
  const [posts, loading] = useOutletContext();

  return (
    <Box>
      {role_id === 2 ||
        (role_id === 4 && (
          <Box className="mb-4 dark:bg-bgMain rounded-xl p-4 text-textDark4 dark:text-text1 bg-white drop-shadow-lg">
            <Box>
              <Typography>
                <BorderColorOutlinedIcon /> {t(["Create New Post"])}
              </Typography>
            </Box>
            <Divider className="my-4" />
            <Box className=" rounded p-4 text-textDark4 dark:text-text1">
              <Formik
                initialValues={{
                  title: "",
                }}
              >
                <Form>
                  <Box>
                    <CustomTextField
                      name="title"
                      rows="3"
                      multiline
                      className="mb-0"
                      placeholder={t(["Write your post text"])}
                    />
                  </Box>
                </Form>
              </Formik>
            </Box>
            <Box className="flex justify-between mb-4 dark:bg-bgMain rounded-xl p-4 text-textDark4 dark:text-text1 bg-white drop-shadow-lg">
              <Box>
                <IconButton>
                  <ImageOutlinedIcon />
                </IconButton>
                <IconButton>
                  <SentimentSatisfiedAltOutlinedIcon />
                </IconButton>
              </Box>
              <Box>
                <SuccessButton variant="contained">{t(["Post"])}</SuccessButton>
              </Box>
            </Box>
          </Box>
        ))}

      <motion.div variants={variants} initial="hidden" animate="visible">
        {loading ? (
          <Box>
            <EachPost />
            <EachPost />
            <EachPost />
          </Box>
        ) : !loading && posts.length > 0 ? (
          posts.map((post) => (
            <EachPost key={post.id} post={post} loading={loading} />
          ))
        ) : (
          <Box className="p-3">
            <Typography className="text-text1">Şərh yoxdur</Typography>
          </Box>
        )}
      </motion.div>
    </Box>
  );
};

export default Posts;
