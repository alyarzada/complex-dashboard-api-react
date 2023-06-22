import { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Box, Typography } from "@mui/material";

const SecondaryCustomFile = ({ title }) => {
  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [],
    },
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  useEffect(() => {
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, []);

  return (
    <Box className="container">
      <Box {...getRootProps({ className: "dropzone" })}>
        <Typography className="dark:text-[#fff] opacity-[0.7] block mb-2 text-sm font-medium text-gray-900">
          {title}
        </Typography>
        <input
          {...getInputProps()}
          className="block w-full text-sm text-gray-900 border border-gray-300  rounded-[5px]  font-semibold cursor-pointer bg-gray-50 border-none outline-none p-[13px] dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
        />
      </Box>
      <Box style={thumbsContainer} className="flex flex-row flex-wrap mt-16">
        {files.map((file) => (
          <div
            className="inline-flex rounded border border-[#eaeaea] mb-8 mr-8 w-[100px] h-[100px] p-4"
            key={file.name}
          >
            <div className="flex min-w-0 overflow-hidden">
              <img
                src={file.preview}
                style={img}
                className="block w-auto h-full"
                onLoad={() => {
                  URL.revokeObjectURL(file.preview);
                }}
              />
            </div>
          </div>
        ))}
      </Box>
    </Box>
  );
};

export default SecondaryCustomFile;
