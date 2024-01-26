import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import logo from "../assets/vfiprologo.png";
import cming from "../assets/cming.png";

const imgstyle = {
  //marginLeft: '-120px'
  display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto',
  width: '100%',
};

export const PicturePage = ({ title, icon }) => {
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
      </Box>
      <img src={logo} style={imgstyle} alt="VFIPro"></img>
      <img src={cming} style={imgstyle} alt="Coming Soon"></img>
    </Container>
  );
};