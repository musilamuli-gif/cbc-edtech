import { AppBar, Toolbar, Typography } from "@mui/material";
export default function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h5" fontWeight={600}>
          CBC & International Curriculum Platform
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
