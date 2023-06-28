import { useState, useRef } from "react";
import {
  Box,
  Stack,
  Avatar,
  Typography,
  IconButton,
  Divider,
  TextField,
  Button,
  Grid,
  Tooltip,
} from "@mui/material";
import {
  MoreHoriz,
  FavoriteBorderOutlined,
  QuestionAnswerOutlined,
  SentimentSatisfiedAlt,
} from "@mui/icons-material";

import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteComment, editComment } from "../../services/postsReqs";
import Cookies from "js-cookie";

import EmojiesContainer from "../../components/UI/ReactionEmojies/EmojiesContainer";
import CustomMenu from "../../components/UI/Modals/CustomMenu";

const Comment = ({ comment, postId }) => {
  const queryClient = useQueryClient();

  const { mutate: mutateDeleteComment } = useMutation({
    mutationFn: deleteComment,
    onSuccess: (data) => {
      queryClient.setQueryData(["posts"], (posts) => {
        return posts.map((post) => {
          if (post.id === postId) {
            return {
              ...post,
              comments: post.comments.filter(
                (comment) => comment.id !== data.comment_id
              ),
            };
          }

          return post;
        });
      });
    },
  });

  const { mutate: mutateEditComment } = useMutation({
    mutationFn: editComment,
    onSuccess: (data) => {
      queryClient.setQueryData(["posts"], (posts) => {
        return posts.map((post) => {
          if (post.id === postId) {
            return {
              ...post,
              comments: post.comments.map((comment) => {
                if (comment.id === data.post_id) {
                  return {
                    ...comment,
                    comment: data.post_saved_data,
                  };
                }
                return comment;
              }),
            };
          }
          return post;
        });
      });
    },
  });
  const { user } = useSelector((state) => state.user);
  const { t } = useTranslation();

  const [openMenu, setOpenMenu] = useState(false);
  const [expand, setExpand] = useState(false);
  const [editCommentValue, setEditCommentValue] = useState("");
  const [openEdit, setOpenEdit] = useState(false);

  const btnRef = useRef(null);
  const token = Cookies.get("token");
  const words = comment?.user_name.split(" ");
  const firstLetters = words
    .map((word) => word.charAt(0))
    .reduce((acc, item) => acc + item, "");

  const onDelete = () => {
    mutateDeleteComment({
      id: { comment_id: comment.id },
      token,
    });
    setOpenMenu(false);
  };

  const onEdit = () => {
    setOpenEdit(true);
    setEditCommentValue(comment.comment);
    setOpenMenu(false);
  };

  const updateComment = () => {
    mutateEditComment({
      body: {
        commentId: comment.id,
        post_id: postId,
        comment: editCommentValue,
      },
      token,
    });
    setOpenEdit(false);
  };

  return (
    <Box className="mb-4">
      <Stack
        direction="row"
        alignItems="center"
        spacing={1}
        className="mb-4 relative"
      >
        <Avatar size="small">{firstLetters}</Avatar>
        <Box className="flex-1">
          <Typography className="text-sm">{comment.user_name}</Typography>
          <Typography className="text-xs">5 gun evvel</Typography>
        </Box>
        {comment.user_id === user.id ? (
          <IconButton onClick={() => setOpenMenu((prev) => !prev)} ref={btnRef}>
            <MoreHoriz />
          </IconButton>
        ) : null}

        {openMenu ? (
          <CustomMenu
            editDelete
            ref={btnRef}
            openMenu={openMenu}
            setOpenMenu={setOpenMenu}
            onDelete={onDelete}
            onEdit={onEdit}
            className="top-8 right-2 w-44"
          />
        ) : null}
      </Stack>

      {openEdit ? (
        <Box className="p-4 bg-slate-600 rounded-xl">
          <TextField
            multiline
            className="mb-4 w-full"
            value={editCommentValue}
            onChange={(e) => setEditCommentValue(e.target.value)}
          />
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Button
              variant="contained"
              className="capitalize"
              onClick={() => setOpenEdit(false)}
            >
              Legv etmek
            </Button>
            <Stack direction="row" alignItems="center" spacing={1}>
              <SentimentSatisfiedAlt />
              <Button
                variant="contained"
                color="success"
                className="capitalize"
                onClick={updateComment}
              >
                Yenilemek
              </Button>
            </Stack>
          </Stack>
        </Box>
      ) : (
        <Typography className="text-sm mb-3">{comment.comment}</Typography>
      )}
      <Stack direction="row" spacing={2} className="mb-3">
        <Stack direction="row" alignItems="center" className="gap-x-1 relative">
          <Grid container justifyContent="center" style={{ width: "30%" }}>
            <Grid item>
              <Tooltip title=<EmojiesContainer peer="peer" /> placement="top">
                <IconButton>
                  <FavoriteBorderOutlined />
                </IconButton>
              </Tooltip>
            </Grid>
          </Grid>
          <Typography className="text-sm">
            {comment.likes.length} {t(["Like"])}
          </Typography>
        </Stack>
        <Stack direction="row" alignItems="center" className="gap-x-1">
          <IconButton onClick={() => setExpand((prev) => !prev)}>
            <QuestionAnswerOutlined />
          </IconButton>
          <Typography className="text-sm">
            {comment.reply_comment.length} {t(["Comments"])}
          </Typography>
        </Stack>
      </Stack>
      {expand
        ? comment.reply_comment.map((reply) => (
            <Box className="ml-4" key={reply.id}>
              <Stack
                direction="row"
                spacing={1}
                alignItems="center"
                className="mb-2"
              >
                <Avatar>{firstLetters}</Avatar>
                <Typography>{reply.user_name}</Typography>
              </Stack>
              <Typography className="text-sm">{reply.comment}</Typography>
            </Box>
          ))
        : null}
      <Divider className="my-4" />
    </Box>
  );
};

export default Comment;
