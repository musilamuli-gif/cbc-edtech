import { Paper, Typography, Button } from "@mui/material";
export default function AdminUpload() {
  return (
    <Paper sx={{ p: 2, mb: 2 }}>
      <Typography variant="h6">Admin: Upload Resources</Typography>
      <Button variant="outlined" component="label">
        Upload Document
        <input type="file" hidden />
      </Button>
    </Paper>
  );
}
