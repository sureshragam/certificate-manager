import Dropzone from "react-dropzone";
import { Box } from "@mui/material";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import { LinearProgressWithLabel } from "./LinearProgressWithLabel";

export const CustomizedDropzone = ({ tempFiles, setTempFiles }) => {
  const handleFiles = (acceptedFiles, rejectedFiles) => {
    console.log(acceptedFiles, "filescheck");
    acceptedFiles.forEach((eachFile) => {
      setTempFiles((prev) => {
        return [...prev, eachFile];
      });
    });
  };

  const fileTypes = {
    "image/jpeg": [],
    "image/png": [],
    "application/pdf": [],
  };
  return (
    <div>
      <Dropzone
        accept={fileTypes}
        maxSize={5242880} // 5 MB in bytes
        maxFiles={10}
        onDrop={(acceptedFiles, rejectedFiles) =>
          handleFiles(acceptedFiles, rejectedFiles)
        }
      >
        {({ getRootProps, getInputProps }) => (
          <section
            style={{
              border: "3px dashed gray",
              height: "400px",
              display: "flex",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                flexBasis: "70%",
              }}
              {...getRootProps()}
            >
              <input {...getInputProps()} />
              <CloudDownloadIcon sx={{ fontSize: "100px" }} />
              <p
                role="button"
                style={{
                  color: "white",
                  cursor: "pointer",
                  background: "rgb(2, 171, 130)",
                  height: "3rem",
                  width: "50%",
                  padding: "10px",
                  margin: "auto",
                  borderRadius: "10px",
                }}
              >
                Drag & drop some files here, or click to select files
              </p>
              <p
                style={{
                  marginBottom: 8,
                  fontWeight: "bold",
                  alignSelf: "flex-start",
                }}
              >
                <span>Note: </span>
                <span>
                  Please upload only JPG, PNG, or PDF files. Max 10 files, each
                  up to 5MB.
                </span>
              </p>
            </div>
            <ul
              style={{
                paddingLeft: "1rem",
                listStyleType: "none",
                flexBasis: "30%",
              }}
            >
              {tempFiles?.map((file) => {
                return (
                  <li style={{ textAlign: "left" }}>
                    <Box sx={{ width: "100%" }}>
                      <p>File: {file.name}</p>
                      <LinearProgressWithLabel value={30} />
                    </Box>
                  </li>
                );
              })}
            </ul>
          </section>
        )}
      </Dropzone>
    </div>
  );
};
