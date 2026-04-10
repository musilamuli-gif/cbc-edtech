import { Paper, Typography, Box, TextField, Button } from "@mui/material";
import { useState } from "react";

export default function ChatSpace() {
  const [msg, setMsg] = useState("");
  const [messages, setMessages] = useState([
    { user: "Teacher", text: "Welcome to Science class!" },
    { user: "Student", text: "Thank you!" }
  ]);
  return (
    <Paper sx={{ p: 2, mb: 2 }}>
      <Typography variant="h6">Discussion & Q&A</Typography>
      <Box sx={{ maxHeight: 120, overflowY: "auto", mb: 2 }}>
        {messages.map((m, i) => (
          <Typography key={i} variant="body2" color="text.secondary">
            [{m.user}]: {m.text}
          </Typography>
        ))}
      </Box>
      <Box display="flex" gap={1}>
        <TextField
          fullWidth
          size="small"
          value={msg}
          onChange={e => setMsg(e.target.value)}
          placeholder="Type your message..." />
        <Button
          variant="contained"
          onClick={() => {
            if (msg.trim()) {
              setMessages([...messages, { user: "You", text: msg }]);
              setMsg("");
            }
          }}
        >Send</Button>
      </Box>
    </Paper>
  );
}
