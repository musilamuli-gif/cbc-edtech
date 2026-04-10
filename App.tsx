import React, { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline, Box, Button } from "@mui/material";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import CurriculumSelector from "./components/CurriculumSelector";
import OnlineReader from "./components/OnlineReader";
import ChatSpace from "./components/ChatSpace";
import QuestionArea from "./components/QuestionArea";
import AdminUpload from "./components/AdminUpload";

const theme = createTheme({
  palette: {
    primary: { main: "#139e32" }, // Kenyan green
    secondary: { main: "#ed6c02" }, // Orange
    background: { default: "#f1f3f6" }
  },
  typography: {
    fontFamily: "Poppins, sans-serif, Arial",
  }
});

function App() {
  const [role, setRole] = useState<"student"|"teacher"|"admin">("student");

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Box sx={{ display: "flex", minHeight: "calc(100vh - 64px)" }}>
        <Sidebar />
        <Box flex={1} p={3}>
          <Box mb={2}>
            <Button size="small" onClick={() => setRole("student")}>Student</Button>
            <Button size="small" onClick={() => setRole("teacher")}>Teacher</Button>
            <Button size="small" onClick={() => setRole("admin")}>Admin</Button>
          </Box>
          <CurriculumSelector />
          <OnlineReader />
          <ChatSpace />
          <QuestionArea />
          {role === "admin" && <AdminUpload />}
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
