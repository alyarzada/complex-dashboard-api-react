import { useEffect, useState } from "react";
import Dropzone from "react-dropzone";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  Box,
  Typography,
  Divider,
  Button,
  Stack,
  Avatar,
  Select,
  InputLabel,
  MenuItem,
  FormControl,
  IconButton,
} from "@mui/material";
import { getRequestDetails } from "../../../app/Slicers/requests";
import { useScrollToUp } from "../../../hooks/useScrollToUp";
import { Formik, Form } from "formik";
import CustomTextField from "../../../components/Form/CustomTextField";
import Cookies from "js-cookie";
import { useTranslation } from "react-i18next";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import SendIcon from "@mui/icons-material/Send";

const readyAnswers = [
  {
    id: 1,
    value:
      "Hörmətli sakin müraciətiniz qeydə alınmışdır. Yaxın zamanda sizə geri dönüş ediləcək.",
  },
  { id: 2, value: "Hörmətli sakin müraciətinizlə bağlı işlər icra edilir" },
  { id: 3, value: "Hörmətli sakin müraciətinizlə bağlı işlər tamamlandı" },
];

const RequestDetails = () => {
  useScrollToUp();
  const params = useParams();
  const dispatch = useDispatch();
  const [readyAnswer, setReadyAnswer] = useState("");
  const [firstLetters, setFirstLetters] = useState("");
  const [files, setFiles] = useState([]);
  const { myRequestDetails } = useSelector((state) => state.requests);
  const {
    user: {
      has_role: { role_id },
    },
  } = useSelector((state) => state.auth);
  const { t } = useTranslation();

  const handleDelete = (index) => {
    setFiles(files.filter((file, i) => i !== index));
  };

  useEffect(() => {
    if (role_id !== 8) {
      setFirstLetters(() => {
        const words = myRequestDetails?.data?.userData?.name?.split(" ");
        return words
          ?.map((word) => word?.charAt(0))
          ?.reduce((acc, item) => acc + item, "");
      });
    }
  }, [myRequestDetails]);

  useEffect(() => {
    dispatch(
      getRequestDetails({
        body: {
          reqId: params?.id,
        },
        token: Cookies.get("token"),
      })
    );
  }, []);

  return (
    <Box className=" bg-bgLight dark:bg-bgMain p-6">
      <Box className="mt-6">
        {myRequestDetails?.comments?.map((comment) => {
          const words = comment.userData.name.split(" ");
          const firstLetters = words
            .map((word) => word.charAt(0))
            .reduce((acc, item) => acc + item, "");
          return (
            <Box key={comment.id} className="text-text1 mb-6">
              <Stack
                direction="row"
                justifyContent="space-between"
                className="mb-6"
              >
                <Stack direction="row" alignItems="center" spacing={1}>
                  <Avatar>{firstLetters}</Avatar>
                  <Box>
                    <Typography className="text-sm">
                      {comment.userData.name}
                    </Typography>
                    <Typography className="text-xs">
                      {comment.userData.email}
                    </Typography>
                  </Box>
                </Stack>
                <Typography>tarix</Typography>
              </Stack>
              <Box>
                <Typography className="text-sm">{comment.message}</Typography>
              </Box>
              <Divider className="my-4" />
            </Box>
          );
        })}
      </Box>
      <Box className="text-text1 drop-shadow-xl border border-slate-600  bg-bgLight dark:bg-bgMain to:bg-bgSecond rounded-xl p-4">
        <Box className="mb-6">
          <Formik
            initialValues={{
              comment: "",
              files: files,
            }}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              setSubmitting(false);
              // dispatch(
              //   sendRequestComment({
              //     body: {
              //       reqId: params?.id,
              //       message: values.comment,
              //     },
              //     token: Cookies.get("token"),
              //   })
              // );
            }}
          >
            {({ setFieldValue, isSubmitting }) => {
              return (
                <Form>
                  <CustomTextField
                    multiline
                    placeholder="Şərhinizi yazın..."
                    name="comment"
                    className="w-full mb-4"
                    rows={6}
                    readyAnswer={readyAnswer}
                  />
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Dropzone
                      onDrop={(acceptedFiles) => {
                        setFiles([...files, ...acceptedFiles]);
                        setFieldValue("files", [...files, ...acceptedFiles]);
                      }}
                    >
                      {({ getRootProps, getInputProps, isDragActive }) => (
                        <Box
                          {...getRootProps()}
                          className="h-[50px] w-[300px] p-4 border-2 border-color-[rgb(102, 102, 102)] border-dashed rounded-[5px] flex items-center justify-center"
                        >
                          <input {...getInputProps()} />
                          {isDragActive ? (
                            <p>Drop the files here ...</p>
                          ) : (
                            <p>
                              Drag and drop some files here, or click to select
                              files
                            </p>
                          )}
                        </Box>
                      )}
                    </Dropzone>
                    <FormControl className="w-[300px]">
                      <InputLabel id="demo-simple-select-filled-label">
                        {t("Ready answers")}
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-filled-label"
                        id="demo-simple-select-filled"
                        value={readyAnswer}
                        onChange={(e) => setReadyAnswer(e.target.value)}
                      >
                        {readyAnswers.map((option, index) => (
                          <MenuItem key={index} value={option.value}>
                            {option.value}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                    <Button
                      variant="contained"
                      className="capitalize ml-auto bg-green-700"
                      type="submit"
                      startIcon={<SendIcon />}
                    >
                      {t("Send")}
                    </Button>
                  </Stack>
                  <Box className="mb-8 mt-3 flex flex-wrap gap-x-5">
                    {files.map((file, index) => (
                      <Box
                        key={index}
                        className="w-[170px] h-[100px] rounded-xl relative"
                      >
                        <img
                          src={URL.createObjectURL(file)}
                          className="w-full h-full rounded-xl"
                          alt="Preview"
                        />
                        <IconButton
                          type="button"
                          disabled={isSubmitting}
                          onClick={() => handleDelete(index)}
                          className="absolute -top-1 -right-1 text-red-500"
                        >
                          <RemoveCircleIcon />
                        </IconButton>
                      </Box>
                    ))}
                  </Box>
                </Form>
              );
            }}
          </Formik>
        </Box>

        <Divider className="my-2" />

        <Stack direction="row" justifyContent="space-between">
          <Stack direction="row" alignItems="center" spacing={3}>
            {myRequestDetails?.data?.request_departments?.map((item, index) => (
              <Typography className="underline inline" key={index}>
                {item} :
              </Typography>
            ))}
            <Typography>{myRequestDetails?.data?.title}</Typography>
          </Stack>
          <Typography className="rounded-xl px-3 py-1 font-semibold text-sm bg-rose-500 text-white">
            Yeni
          </Typography>
        </Stack>

        <Divider className="my-6" />

        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          className="mb-4"
        >
          <Stack direction="row" spacing={2} alignItems="center">
            <Avatar>{firstLetters}</Avatar>
            <Box>
              <Typography className="text-sm">
                {myRequestDetails?.data?.userData?.name}
              </Typography>
              <Typography className="text-xs">
                E-poçt: rahatbina@gmail.com
              </Typography>
            </Box>
          </Stack>
          <Box>
            <Typography className="text-xs">
              {myRequestDetails?.data?.created_at}
            </Typography>
            <Typography className="text-xs">
              Şöbə: {myRequestDetails?.data?.request_departments}
            </Typography>
          </Box>
        </Stack>

        <Typography className="mb-4 text-sm">
          {myRequestDetails?.data?.message}
        </Typography>
        <Divider className="my-2" />
      </Box>
    </Box>
  );
};

export default RequestDetails;
