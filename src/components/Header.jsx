import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import {
  Menu as MenuIcon,
  Add as AddIcon,
  LightMode as LightModeIcon,
  DarkMode as DarkModeIcon,
} from "@mui/icons-material";

import { useApp } from "../ThemeApp";
export default function Header() {
  const { showForm, setShowForm, mode, setMode, showDrawer, setShowDrawer } =
    useApp();
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          color="inherit"
          edge="start"
          onClick={() => setShowDrawer(!showDrawer)}
        >
          <MenuIcon />
        </IconButton>
        <Typography sx={{ flexGrow: 1, ml: 2 }}>Yaycha</Typography>
        <IconButton color="inherit" onClick={() => setShowForm(!showForm)}>
          <AddIcon />
        </IconButton>
        <Box>
          {mode === "dark" ? (
            <IconButton
              color="inherit"
              edge="end"
              onClick={() => setMode("light")}
            >
              <LightModeIcon />
            </IconButton>
          ) : (
            <IconButton
              color="inherit"
              edge="end"
              onClick={() => setMode("dark")}
            >
              <DarkModeIcon />
            </IconButton>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
