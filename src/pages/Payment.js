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

export const PaymentPage = () => {

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    navigate("/dashboard/final", { replace: true });
  };

  return (
    <div>
      <BasicPage title="Payment Page" icon={<Settings />} />

      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 5,
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <Typography component="h1" variant="h5">
            Please fill out this form with your payment information and signature
          </Typography>
        </Box>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Credit Card Number"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="notemail"
            label="Digital Signature"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Finish
          </Button>
        </Box>
      </Container>
    </div>
  );
};
