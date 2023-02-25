import { useState, useRef } from "react";
import {
  Box,
  Stack,
  Avatar,
  Typography,
  IconButton,
  Divider,
  TextField,
  Grid,
  Tooltip,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import {
  QuestionAnswerOutlined,
  FavoriteBorderOutlined,
  SendOutlined,
  CollectionsOutlined,
  EmojiEmotionsOutlined,
} from "@mui/icons-material";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import EmojiesContainer from "../../components/UI/ReactionEmojies/EmojiesContainer";

import Skeleton from "@mui/material/Skeleton";
import Comment from "./Comment";
import { useDispatch, useSelector } from "react-redux";
import { postComment, likePost } from "../../app/Slicers/news";
import Cookies from "js-cookie";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import { motion } from "framer-motion";
import SaveAltIcon from "@mui/icons-material/SaveAlt";

export const list = {
  visible: {
    opacity: 1,
    y: 0,
    transformOrigin: "50%",
    scale: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.04,
    },
  },
  hidden: {
    opacity: 0,
    y: 50,
    transformOrigin: "50%",
    scale: 0,
  },
};

const EachNews = ({ news }) => {
  const { status } = useSelector((state) => state.news);
  const [expandComments, setExpandComments] = useState(false);
  const [commentValue, setCommentValue] = useState("");
  const [openEmoji, setOpenEmoji] = useState(false);
  const { light } = useSelector((state) => state.themes);

  const { t } = useTranslation();
  const dispatch = useDispatch();

  const words = news?.userData?.name.split(" ");
  const firstLetters = words
    ?.map((word) => word.charAt(0))
    .reduce((acc, item) => acc + item, "");

  const notify = () =>
    toast("Post yadda saxlanıldı", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const pressComment = () => {
    setExpandComments((prev) => !prev);
  };

  const submitComment = (e) => {
    e.preventDefault();
    dispatch(
      postComment({
        body: {
          post_id: news.id,
          files: [],
          comment: commentValue,
        },
        token: Cookies.get("token"),
      })
    );
    setExpandComments(true);
    setCommentValue("");
  };

  const likePostHandler = () => {
    dispatch(
      likePost({
        body: { likeType: 0, likeId: news.id, likeEmoji: 1 },
        token: Cookies.get("token"),
      })
    );
  };

  return (
    <Box className="mb-4 dark:bg-bgMain rounded p-4 text-textDark4 dark:text-text1 bg-white drop-shadow-lg">
      <Stack
        direction="row"
        justifyContent="space-between"
        className="relative"
      >
        <Stack direction="row" alignItems="center" spacing={2}>
          <Avatar>{firstLetters}</Avatar>
          <Box>
            {status === "loading" ? (
              <Skeleton
                animation="wave"
                height={40}
                width={100}
                style={{
                  marginBottom: 6,
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              />
            ) : (
              <Typography>{news.userData.name}</Typography>
            )}
          </Box>
        </Stack>

        <Tooltip title={t("Save Post")} arrow>
          <IconButton onClick={notify}>
            <SaveAltIcon />
          </IconButton>
        </Tooltip>
      </Stack>
      <Divider className="my-4" />
      <Box>
        {status === "loading" ? (
          <Skeleton animation="wave" height={300} width="100%" />
        ) : (
          <Typography className="mb-4 dark:text-text1 text-textDark4">
            {news.post}
          </Typography>
        )}

        <Divider className="my-4" />
        <Stack direction="row" spacing={2} className="mb-3">
          <Stack
            direction="row"
            alignItems="center"
            className="gap-x-1 relative"
          >
            <Picker
              data={data}
              onEmojiSelect={""}
              previewPosition="none"
              theme={light ? "light" : "dark"}
            />
          </Stack>

          <Stack direction="row" justifyContent="end">
            <IconButton>
              <CollectionsOutlined />
            </IconButton>
            <IconButton onClick={() => setOpenEmoji((prev) => !prev)}>
              <EmojiEmotionsOutlined />
            </IconButton>
            <IconButton type="submit">
              <SendOutlined />
            </IconButton>
          </Stack>
          {openEmoji ? (
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: 10 }}
              transition={{ ease: "easeOut", duration: 0.5 }}
            >
              <Picker
                data={data}
                onEmojiSelect={console.log}
                previewPosition="none"
                theme={light ? "light" : "dark"}
              />
            </motion.div>
          ) : null}
        </Stack>
      </Box>
    </Box>
  );
};

export default EachNews;
