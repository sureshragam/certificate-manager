import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import DocumentSection from "./DocumentsSection";

export const PersonalDocument = () => {
  const navigate = useNavigate();
  const handleAddFiles = () => {
    navigate("/upload-documents");
  };
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h2>Personal Document</h2>
        <Button sx={{ color: "#948979" }} onClick={handleAddFiles}>
          <AddIcon />
          Add Files
        </Button>
      </div>
      <DocumentSection />
    </div>
  );
};
