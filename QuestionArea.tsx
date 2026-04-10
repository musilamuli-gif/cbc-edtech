import { Paper, Typography, Box, Button, TextField } from "@mui/material";
import { useState } from "react";

export default function QuestionArea() {
  const [answer, setAnswer] = useState("");
  const [submitted, setSubmitted] = useState(false);
  return (
    <Paper sx={{ p: 2, mb:2 }}>
      <Typography variant="h6" mb={1}>
        Practice Questions
      </Typography>
      <Box mb={1}>
        <Typography>
          <b>Q1:</b> List three key features of the Kenyan CBC curriculum.
        </Typography>
      </Box>
      <TextField
        fullWidth
        multiline
        rows={2}
        value={answer}
        onChange={e => setAnswer(e.target.value)}
        placeholder="Write your answer here"
        variant="outlined"
        sx={{ mb: 1 }}
        disabled={submitted}
      />
      <Button
        variant="contained"
        onClick={() => setSubmitted(true)}
        disabled={submitted}
      >
        {submitted ? "Submitted" : "Submit Answer"}
      </Button>
    </Paper>
  );
}
