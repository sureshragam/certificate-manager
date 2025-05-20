import { PersonalDocument } from "../../Components/PersonalDocument";
import { SharedDocuments } from "../../Components/SharedDocuments";

export const Dashboard = () => {
  return (
    <div style={{ color: "var(---fontColor1)" }}>
      <div id="Shared section">
        <SharedDocuments />
      </div>
      <div id="Personal section">
        <PersonalDocument />
      </div>
    </div>
  );
};
