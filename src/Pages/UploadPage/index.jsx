import { CustomizedDropzone } from "../../Components/CustomizedDropzone";

import { useState } from "react";

export const UploadPage = () => {
  const [tempFiles, setTempFiles] = useState([]);
  return (
    <div>
      <CustomizedDropzone setTempFiles={setTempFiles} tempFiles={tempFiles} />
    </div>
  );
};
