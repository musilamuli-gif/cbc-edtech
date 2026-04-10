import { Paper, Typography, Box, Button } from "@mui/material";
export default function OnlineReader() {
  return (
    <Paper sx={{ p: 2, minHeight: 250, mb: 2 }}>
      <Typography variant="h6" fontWeight={500}>
        Online Reading Space
      </Typography>
      <Typography variant="body2" mb={1}>
        (Students can read course material here. PDF/Image/Video will be displayed.)
      </Typography>
      <Box>
        <Button variant="outlined">Open Sample Document</Button>
      </Box>
    </Paper>
  );
}
