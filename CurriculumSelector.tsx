import { Box, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import { useState } from "react";
export default function CurriculumSelector() {
  const [curriculum, setCurriculum] = useState("cbc");
  return (
    <Box mb={3}>
      <Typography variant="h6" fontWeight={600}>
        Select Curriculum
      </Typography>
      <ToggleButtonGroup
        color="primary"
        value={curriculum}
        exclusive
        onChange={(_, v) => v && setCurriculum(v)}
        sx={{ mt: 1 }}
      >
        <ToggleButton value="cbc">Kenyan CBC</ToggleButton>
        <ToggleButton value="international">International</ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
}
