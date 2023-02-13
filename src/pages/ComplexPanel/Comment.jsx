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
import ReactionComponent from "../../components/UI/ReactionEmojies/ReactionComponent";
import CustomMenu from "../../components/UI/Modals/CustomMenu";
import { useDispatch, useSelector } from "react-redux";
import { deleteComment, editComment } from "../../app/Slicers/news";
import Cookies from "js-cookie";

const Comment = ({ comment, postId }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [expand, setExpand] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const [editCommentValue, setEditCommentValue] = useState("");
  const [openEdit, setOpenEdit] = useState(false);

  const btnRef = useRef(null);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const words = comment?.user_name.split(" ");
  const firstLetters = words
    .map((word) => word.charAt(0))
    .reduce((acc, item) => acc + item, "");

  const onDelete = () => {
    dispatch(
      deleteComment({
        id: { comment_id: comment.id },
        token: Cookies.get("token"),
      })
    );
    setOpenMenu(false);
  };

  const onEdit = () => {
    setOpenEdit(true);
    setEditCommentValue(comment.comment);
    setOpenMenu(false);
  };

  const updateComment = () => {
    dispatch(
      editComment({
        body: {
          commentId: comment.id,
          post_id: postId,
          comment: editCommentValue,
        },
        token: Cookies.get("token"),
      })
    );
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
        <Box className="p-4 bg-slate-600 rounded">
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
              <Tooltip title=<ReactionComponent peer="peer" /> placement="top">
                <IconButton>
                  <FavoriteBorderOutlined />
                </IconButton>
              </Tooltip>
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
