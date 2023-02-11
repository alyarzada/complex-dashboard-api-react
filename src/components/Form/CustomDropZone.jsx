import Dropzone from "react-dropzone";
import { Box } from "@mui/material";

const CustomDropZone = ({ files, setFiles, ...props }) => {
  return (
    <Dropzone
      onDrop={(acceptedFiles) => {
        setFiles([...files, ...acceptedFiles]);
        props.setFieldValue("files", [...files, ...acceptedFiles]);
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
            <p>Drag and drop some files here, or click to select files</p>
          )}
        </Box>
      )}
    </Dropzone>
  );
};

export default CustomDropZone;
