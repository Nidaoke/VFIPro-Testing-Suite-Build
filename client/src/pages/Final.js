import { BasicPage } from "../components/BasicPage";
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

export const FinalPage = () => {

  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleSubmit = (event) => {
    event.preventDefault();
    logout();
  };

  return (
    <div>
      <BasicPage title="Final Page" icon={<Settings />} />

      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Logout
          </Button>
        </Box>
      </Box>
    </div>
  );
};
