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

export const PackagePage = () => {

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    navigate("/dashboard/payment", { replace: true });
  };

  return (
    <div>
      <BasicPage title="Package Page" icon={<Settings />} />

      <Container component="main" maxWidth="xs">
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Choose this package!
          </Button>
        </Box>
      </Container>
    </div>
  );
};
