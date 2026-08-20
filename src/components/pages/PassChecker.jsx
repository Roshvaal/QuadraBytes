import { useState } from "react";
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Stack,
  Alert,
  LinearProgress,
} from "@mui/material";

function PassChecker() {
  const [password, setPassword] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const checkPassword = () => {
    if (password === "") {
      setError("Please enter a password.");
      setResult(null);
      return;
    }

    let status;
    let message;
    let strength;

    if (password.length < 6) {
      status = "Weak Password";
      message = "Status: Weak – Create a stronger password.";
      strength = 33;
    } else if (password.length <= 9) {
      status = "Medium Password";
      message = "Status: Weak – Create a stronger password.";
      strength = 66;
    } else {
      status = "Strong Password";
      message = "Status: Strong – You can use this password.";
      strength = 100;
    }

    setError("");
    setResult({ status, message, strength });
  };

  const clearPassword = () => {
    setPassword("");
    setResult(null);
    setError("");
  };

  return (
    <Box
      sx={{
        minHeight: "calc(100vh - 80px)",
        bgcolor: "#f4f8fd",
        px: { xs: 2, md: 8 },
        py: 5,
      }}
    >
      {}
      <Stack
        direction="row"
        alignItems="center"
        spacing={2}
        sx={{
          maxWidth: 1200,
          mx: "auto",
          mb: 4,
        }}
      >
        <Box
          sx={{
            width: 60,
            height: 60,
            borderRadius: "50%",
            bgcolor: "#2382d8",
            color: "white",
            display: "grid",
            placeItems: "center",
            fontSize: 22,
          }}
        >
          3
        </Box>

        <Box>
          <Typography
            sx={{
              color: "#0875d1",
              fontSize: 14,
              fontWeight: 700,
              letterSpacing: 3,
            }}
          >
            ACTIVITY 3
          </Typography>

          <Typography
            sx={{
              color: "#14213d",
              fontSize: { xs: 30, sm: 40 },
              fontWeight: 800,
            }}
          >
            Password Strength Checker
          </Typography>
        </Box>
      </Stack>

      {}
      <Paper
        sx={{
          maxWidth: 450,
          mx: "auto",
          p: 4,
          borderRadius: 4,
          boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
        }}
      >
        <Stack spacing={2.5}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              color: "#14213d",
            }}
          >
            Check Password
          </Typography>

          <Typography color="text.secondary">
            Enter a password to check its strength.
          </Typography>

          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
          />

          {error && <Alert severity="error">{error}</Alert>}

          <Button
            variant="contained"
            onClick={checkPassword}
            sx={{
              textTransform: "none",
              fontWeight: 700,
              borderRadius: 2,
            }}
          >
            Check Password
          </Button>

          <Button
            variant="outlined"
            onClick={clearPassword}
            sx={{
              textTransform: "none",
              fontWeight: 700,
              borderRadius: 2,
            }}
          >
            Clear
          </Button>

          {}
          {result && (
            <Box
              sx={{
                pt: 1,
              }}
            >
              <Typography
                sx={{
                  fontWeight: 700,
                  mb: 1,
                }}
              >
                Password Status: {result.status}
              </Typography>

              <LinearProgress
                variant="determinate"
                value={result.strength}
                color={
                  result.strength === 100
                    ? "success"
                    : result.strength === 66
                    ? "warning"
                    : "error"
                }
                sx={{
                  height: 8,
                  borderRadius: 5,
                  mb: 2,
                }}
              />

              <Alert
                severity={
                  result.strength === 100
                    ? "success"
                    : result.strength === 66
                    ? "warning"
                    : "error"
                }
              >
                {result.message}
              </Alert>
            </Box>
          )}
        </Stack>
      </Paper>
    </Box>
  );
}

export default PassChecker;