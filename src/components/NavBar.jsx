import {AppBar, Toolbar, Typography, Button, Box, Container} from "@mui/material";

import { useLocation, useNavigate } from "react-router-dom";
import reactLogo from "../assets/react.svg";

function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Activity 1", path: "/activity1" },
    { label: "Activity 2", path: "/activity2" },
    { label: "Activity 3", path: "/activity3" },
    { label: "Activity 4", path: "/activity4" },
    { label: "Activity 5", path: "/activity5" },
  ];

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: "rgba(255,255,255,0.95)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid",
        borderColor: "divider",
        color: "text.primary",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            minHeight: "72px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box
            onClick={() => navigate("/")}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.5,
              cursor: "pointer",
            }}
          >
            <Box
              component="img"
              src={reactLogo}
              alt="React Logo"
              sx={{
                width: 42,
                height: 42,
              }}
            />

            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                letterSpacing: "-0.5px",
              }}
            >
              React Activity Portal
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            {navItems.map((item) => {
              const active = location.pathname === item.path;

              return (
                <Button
                  key={item.label}
                  onClick={() => navigate(item.path)}
                  variant={active ? "contained" : "text"}
                  sx={{
                    px: 2.2,
                    py: 1,
                    borderRadius: 2.5,
                    textTransform: "none",
                    fontWeight: 600,
                    boxShadow: "none",
                  }}
                >
                  {item.label}
                </Button>
              );
            })}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;