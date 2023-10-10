import { BasicPage } from "../components/BasicPage";
import { Dictaphone } from "../components/Dictaphone";
import { FirstName } from "../components/FirstName/FirstName";
import classes from "../components/FirstName/FirstName.module.css";
import Settings from "@mui/icons-material/Settings";
import Person from "@mui/icons-material/Person";
import { useLocalStorage } from "../hooks/useLocalStorage";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { useAuth } from "../hooks/useAuth";

export const SpeechToTextPage = () => {

  return (
    <div>
      <BasicPage title="Speech To Text Testing" icon={<Settings />} />

      
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <Dictaphone />
      </Box>
    </div>
  );
};
