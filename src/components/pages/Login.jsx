import { useState } from "react";
import { Box, Container, Typography, TextField, Button, Paper, Alert, Divider } from "@mui/material";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    if (username === "" && password === "") {
      setMessage("Please enter username and password.");
    } else if (username === "" || password === "") {
      setMessage("Please complete all fields.");
    } else if (username === "UncleDags" && password === "1990") {
      setLoggedIn(true);
      setMessage("");
    } else {
      setMessage("Invalid username or password.");
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUsername("");
    setPassword("");
    setMessage("");
  };

  return (
    <Box
      sx={{
        minHeight: "calc(100vh - 72px)",
        background: "linear-gradient(135deg, #f8fbff 0%, #eef4fb 100%)",
        py: 4,
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ mb: 3.5 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Box
              sx={{
                width: 54,
                height: 54,
                borderRadius: "50%",
                backgroundColor: "primary.main",
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 22,
                boxShadow: "0 8px 20px rgba(25, 118, 210, 0.25)",
              }}
            >
              1
            </Box>

            <Box>
              <Typography
                sx={{
                  color: "primary.main",
                  fontWeight: 700,
                  letterSpacing: 2,
                  fontSize: 13,
                }}
              >
                ACTIVITY 1
              </Typography>

              <Typography
                sx={{
                  color: "#17213d",
                  fontWeight: 800,
                  fontSize: {
                    xs: "1.8rem",
                    md: "2.25rem",
                  },
                  lineHeight: 1.15,
                }}
              >
                Login Authentication
              </Typography>
            </Box>
          </Box>
        </Box>

        <Paper
          elevation={0}
          sx={{
            position: "relative",
            width: "100%",
            maxWidth: 440,
            mx: "auto",
            borderRadius: 4,
            overflow: "hidden",
            border: "1px solid rgba(25, 118, 210, 0.12)",
            backgroundColor: "rgba(255,255,255,0.92)",
            backdropFilter: "blur(14px)",
            boxShadow: "0 20px 50px rgba(32, 74, 120, 0.12)",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: 5,
              background: "linear-gradient(90deg, #1976d2, #5b61f6, #7c4dff)",
            }}
          />

          <Box
            sx={{
              px: 3.2,
              pt: 3.5,
              pb: 2.5,
            }}
          >
            <Typography
              sx={{
                fontSize: 22,
                fontWeight: 800,
                color: "#17213d",
              }}
            >
              Welcome back
            </Typography>

            <Typography
              sx={{
                mt: 0.5,
                fontSize: 14,
                color: "#7a8699",
              }}
            >
              Sign in to continue
            </Typography>
          </Box>

          <Divider />

          <Box
            sx={{
              p: 3.2,
            }}
          >
            {!loggedIn ? (
              <>
                <Typography
                  sx={{
                    fontWeight: 600,
                    mb: 0.8,
                    fontSize: 14,
                    color: "#26364d",
                  }}
                >
                  Username
                </Typography>

                <TextField
                  fullWidth
                  size="small"
                  placeholder="Enter username"
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                    setMessage("");
                  }}
                  sx={{
                    mb: 2.2,
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 2.5,
                      backgroundColor: "#f8fbff",
                    },
                  }}
                />

                <Typography
                  sx={{
                    fontWeight: 600,
                    mb: 0.8,
                    fontSize: 14,
                    color: "#26364d",
                  }}
                >
                  Password
                </Typography>

                <TextField
                  fullWidth
                  size="small"
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setMessage("");
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleLogin();
                    }
                  }}
                  sx={{
                    mb: 2.2,
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 2.5,
                      backgroundColor: "#f8fbff",
                    },
                  }}
                />

                {message && (
                  <Alert
                    severity="error"
                    sx={{
                      mb: 2,
                      borderRadius: 2.5,
                      fontSize: 13,
                    }}
                  >
                    {message}
                  </Alert>
                )}

                <Button
                  variant="contained"
                  fullWidth
                  onClick={handleLogin}
                  sx={{
                    py: 1.15,
                    borderRadius: 2.5,
                    textTransform: "none",
                    fontWeight: 700,
                    fontSize: 15,
                    boxShadow: "0 8px 18px rgba(25, 118, 210, 0.22)",
                  }}
                >
                  Login
                </Button>

                <Box
                  sx={{
                    mt: 2.2,
                    p: 1.4,
                    borderRadius: 2,
                    backgroundColor: "#f5f8fc",
                    border: "1px dashed #cfd8e6",
                  }}
                >
                  <Typography
                    sx={{
                      textAlign: "center",
                      color: "#8492a6",
                      fontSize: 12,
                    }}
                  >
                    Sample credentials: Username: UncleDags / Password: 1990
                  </Typography>
                </Box>
              </>
            ) : (
              <Box>
                <Box
                  sx={{
                    width: 66,
                    height: 66,
                    borderRadius: "50%",
                    backgroundColor: "#e3f8ea",
                    color: "#14a44d",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mx: "auto",
                    mb: 2.5,
                    fontSize: 34,
                    fontWeight: 700,
                  }}
                >
                  ✓
                </Box>

                <Alert
                  severity="success"
                  icon={false}
                  sx={{
                    mb: 2.2,
                    borderRadius: 2.5,
                    textAlign: "center",
                    "& .MuiAlert-message": {
                      width: "100%",
                    },
                  }}
                >
                  Login successful!
                </Alert>

                <Box
                  sx={{
                    p: 2.3,
                    mb: 2.2,
                    textAlign: "center",
                    borderRadius: 3,
                    background: "linear-gradient(135deg, #f7fbff, #eef5ff)",
                    border: "1px solid #dce7f3",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#718096",
                      fontSize: 14,
                    }}
                  >
                    Welcome back,
                  </Typography>

                  <Typography
                    sx={{
                      mt: 0.5,
                      fontSize: 21,
                      fontWeight: 800,
                      color: "#17213d",
                    }}
                  >
                    {username}
                  </Typography>
                </Box>

                <Button
                  variant="contained"
                  fullWidth
                  onClick={handleLogout}
                  sx={{
                    py: 1.1,
                    borderRadius: 2.5,
                    textTransform: "none",
                    fontWeight: 700,
                    fontSize: 15,
                    backgroundColor: "#ef4444",
                    boxShadow: "none",
                    "&:hover": {
                      backgroundColor: "#dc2626",
                      boxShadow: "none",
                    },
                  }}
                >
                  Logout
                </Button>
              </Box>
            )}
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}

export default Login;