import { useState } from "react";
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
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import {
  QuestionAnswerOutlined,
  FavoriteBorderOutlined,
  SendOutlined,
  CollectionsOutlined,
  EmojiEmotionsOutlined,
} from "@mui/icons-material";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { likePost, postComment } from "../../services/postsReqs";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import Cookies from "js-cookie";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import Skeleton from "@mui/material/Skeleton";

import EmojiesContainer from "../../components/UI/ReactionEmojies/EmojiesContainer";
import Comment from "./Comment";

import SaveAltIcon from "@mui/icons-material/SaveAlt";
import "react-toastify/dist/ReactToastify.css";

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

const EachPost = ({ post, loading }) => {
  const id = post?.id;
  const queryClient = useQueryClient();

  const { mutate: mutatePostComment } = useMutation({
    mutationFn: postComment,
    onSuccess: (comment) => {
      queryClient.setQueryData(["posts"], (posts) => {
        return posts.map((post) => {
          if (post.id === id) {
            return {
              ...post,
              comments: [...post.comments, comment],
            };
          }

          return post;
        });
      });
    },
  });

  const { mutate: mutateLikePost } = useMutation({
    mutationFn: likePost,
    onSuccess: (data) => {
      queryClient.setQueryData(["posts"], (posts) => {
        return posts.map((post) => {
          if (post.id === id) {
            return {
              ...post,
              totalLikes: post.totalLikes + 1,
            };
          }
          return post;
        });
      });
    },
  });

  const { light } = useSelector((state) => state.themes);
  const { t } = useTranslation();

  const [expandComments, setExpandComments] = useState(false);
  const [commentValue, setCommentValue] = useState("");
  const [openEmoji, setOpenEmoji] = useState(false);

  const words = post?.userData?.name.split(" ");
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
    mutatePostComment({
      body: {
        post_id: post?.id,
        files: [],
        comment: commentValue,
      },
      token: Cookies.get("token"),
    });
    setExpandComments(true);
    setCommentValue("");
  };

  const likePostHandler = () => {
    mutateLikePost({
      body: { likeType: 0, likeId: post?.id, likeEmoji: 1 },
      token: Cookies.get("token"),
    });
  };

  return (
    <Box className="mb-4 dark:bg-bgMain rounded-xl p-4 text-textDark4 dark:text-text1 bg-white drop-shadow-lg">
      <Stack
        direction="row"
        justifyContent="space-between"
        className="relative"
      >
        <Stack direction="row" alignItems="center" spacing={2}>
          <Avatar>{firstLetters}</Avatar>
          <Box>
            {loading ? (
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
              <Typography>{post?.userData.name}</Typography>
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
        {loading ? (
          <Skeleton animation="wave" height={300} width="100%" />
        ) : (
          <Typography className="mb-4 dark:text-text1 text-textDark4">
            {post?.post}
          </Typography>
        )}

        <Divider className="my-4" />
        <Stack direction="row" spacing={2} className="mb-3">
          <Stack
            direction="row"
            alignItems="center"
            className="gap-x-1 relative"
          >
            <Grid container justifyContent="center" style={{ width: "30%" }}>
              <Grid item>
                <Tooltip title=<EmojiesContainer peer="peer" /> placement="top">
                  <IconButton className="peer" onClick={likePostHandler}>
                    <FavoriteBorderOutlined />
                  </IconButton>
                </Tooltip>
              </Grid>
            </Grid>
            {loading ? (
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
              <Typography>
                {post?.totalLikes} {t(["Liked"])}
              </Typography>
            )}
          </Stack>
          <Stack direction="row" alignItems="center" className="gap-x-1">
            <IconButton onClick={pressComment}>
              <QuestionAnswerOutlined />
            </IconButton>
            {loading ? (
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
              <Typography>
                {post?.comments.length} {t("Comments")}
              </Typography>
            )}
          </Stack>
        </Stack>
        <Divider className="my-4" />

        <Box>
          {expandComments ? (
            <Box className="ml-4">
              {post?.comments.length > 0
                ? post.comments.map((comment) => (
                    <Comment
                      comment={comment}
                      key={comment.id}
                      postId={post.id}
                      setExpandComments={setExpandComments}
                    />
                  ))
                : null}
            </Box>
          ) : null}
        </Box>

        <form action="POST" onSubmit={submitComment}>
          <Stack
            direction="row"
            alignItems="center"
            spacing={1}
            className="mb-2"
          >
            <Avatar>{firstLetters}</Avatar>
            <TextField
              className="flex-1"
              autoComplete="off"
              id="outlined-basic"
              label={t("Write a comment")}
              value={commentValue}
              onChange={(e) => setCommentValue(e.target.value)}
              sx={{
                "& .MuiInputBase-input": {
                  height: "50px",
                },
              }}
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
        </form>
      </Box>
    </Box>
  );
};

export default EachPost;
