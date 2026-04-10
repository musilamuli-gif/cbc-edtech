import { Box, List, ListItem, ListItemText, Paper } from "@mui/material";
export default function Sidebar() {
  return (
    <Paper sx={{ width: 200, bgcolor: "background.paper", minHeight: "100vh" }}>
      <List>
        <ListItem button>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Subjects" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Assignments" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Resources" />
        </ListItem>
      </List>
    </Paper>
  );
}
