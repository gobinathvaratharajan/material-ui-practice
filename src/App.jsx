import RightBar from './components/RightBar';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import { Box, createTheme, Stack, ThemeProvider } from '@mui/material';
import NavBar from './components/NavBar';
import Add from './components/Add';
import { useState } from 'react';


function App() {
  const [mode, setMode] = useState("light")
  const darkTheme = createTheme ({
    palette:{
      mode: mode
    }
  })
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <NavBar />
        <Stack spacing={2} direction="row" justifyContent="space-between">
          <Sidebar mode={mode} setMode={setMode} />
          <Feed />
          <RightBar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  )
}

export default App
