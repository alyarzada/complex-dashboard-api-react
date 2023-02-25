import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { Box, Typography } from "@mui/material";
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
          <Typography className="text-text1">{t("No comments")}</Typography>
        </Box>
      )}
    </motion.div>
  );
};

export default News;
