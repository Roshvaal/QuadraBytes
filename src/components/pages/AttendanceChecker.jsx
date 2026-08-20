import { useState } from "react";
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Stack,
  Alert,
  Divider,
} from "@mui/material";

function AttendanceChecker() {
  const [employeeName, setEmployeeName] = useState("");
  const [timeIn, setTimeIn] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const checkAttendance = () => {
    if (employeeName.trim() === "" || timeIn === "") {
      setError("Please complete all fields.");
      setResult(null);
      return;
    }

    const time = Number(timeIn);

    if (isNaN(time)) {
      setError("Please enter a valid numeric time.");
      setResult(null);
      return;
    }

    let status;
    let message;

    if (time <= 8) {
      status = "On Time";
      message = "Status: On Time – Good job!";
    } else if (time <= 9) {
      status = "Late";
      message = "Status: Late – Please be on time tomorrow.";
    } else {
      status = "Very Late";
      message = "Status: Very Late – Report to your supervisor.";
    }

    setError("");
    setResult({ employeeName, timeIn, status, message });
  };

  const resetAttendance = () => {
    setEmployeeName("");
    setTimeIn("");
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
      {/* Activity Header */}
      <Stack
        direction="row"
        alignItems="center"
        spacing={2}
        sx={{ maxWidth: 1280, mx: "auto", mb: 4 }}
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
          5
        </Box>

        <Box>
          <Typography
            sx={{
              color: "#0875d1",
              fontWeight: 700,
              letterSpacing: 3,
              fontSize: 14,
            }}
          >
            ACTIVITY 5
          </Typography>

          <Typography
            sx={{
              color: "#14213d",
              fontWeight: 800,
              fontSize: { xs: 30, sm: 40 },
            }}
          >
            Employee Attendance Checker
          </Typography>
        </Box>
      </Stack>

      {/* Attendance Card */}
      <Paper
        elevation={0}
        sx={{
          width: "100%",
          maxWidth: 550,
          mx: "auto",
          borderRadius: "18px",
          overflow: "hidden",
          bgcolor: "#fff",
          boxShadow: "0 18px 45px rgba(70, 100, 140, 0.14)",
        }}
      >
        {/* Top Accent */}
        <Box
          sx={{
            height: 5,
            background: "linear-gradient(90deg, #1976d2, #7c4dff)",
          }}
        />

        {/* Card Header */}
        <Box sx={{ px: 4, pt: 4, pb: 3 }}>
          <Typography
            sx={{
              fontSize: 28,
              fontWeight: 800,
              color: "#14213d",
              mb: 0.5,
            }}
          >
            Check Attendance
          </Typography>

          <Typography
            sx={{
              fontSize: 16,
              color: "#7b879b",
            }}
          >
            Enter employee details to check attendance status.
          </Typography>
        </Box>

        <Divider />

        {/* Form */}
        <Stack spacing={3} sx={{ px: 4, py: 4 }}>
          <Box>
            <Typography
              sx={{
                fontWeight: 700,
                color: "#24324a",
                mb: 1,
              }}
            >
              Employee Name
            </Typography>

            <TextField
              fullWidth
              placeholder="Enter employee name"
              value={employeeName}
              onChange={(e) => setEmployeeName(e.target.value)}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "12px",
                  bgcolor: "#f9fbfd",
                },
              }}
            />
          </Box>

          <Box>
            <Typography
              sx={{
                fontWeight: 700,
                color: "#24324a",
                mb: 1,
              }}
            >
              Time In
            </Typography>

            <TextField
              fullWidth
              type="number"
              placeholder="e.g. 8.5"
              value={timeIn}
              onChange={(e) => setTimeIn(e.target.value)}
              inputProps={{ step: "0.1" }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "12px",
                  bgcolor: "#f9fbfd",
                },
              }}
            />

            <Typography
              sx={{
                mt: 1,
                fontSize: 13,
                color: "#8a96a8",
              }}
            >
              Example: 8.5 = 8:30 AM
            </Typography>
          </Box>

          {error && (
            <Alert severity="error" sx={{ borderRadius: "12px" }}>
              {error}
            </Alert>
          )}

          <Button
            variant="contained"
            size="large"
            onClick={checkAttendance}
            sx={{
              height: 56,
              borderRadius: "12px",
              textTransform: "none",
              fontSize: 17,
              fontWeight: 700,
              bgcolor: "#2382d8",
              boxShadow: "0 8px 18px rgba(35,130,216,0.18)",
            }}
          >
            Check Attendance
          </Button>

          <Button
            variant="outlined"
            size="large"
            onClick={resetAttendance}
            sx={{
              height: 50,
              borderRadius: "12px",
              textTransform: "none",
              fontWeight: 700,
              color: "#66758a",
              borderColor: "#d3dae4",
            }}
          >
            Reset
          </Button>

          {/* Conditional Result */}
          {result && (
            <>
              <Divider />

              <Box>
                <Typography
                  sx={{
                    fontSize: 20,
                    fontWeight: 800,
                    color: "#14213d",
                    mb: 2,
                  }}
                >
                  Attendance Result
                </Typography>

                <Box
                  sx={{
                    bgcolor: "#f7f9fc",
                    border: "1px solid #e2e7ee",
                    borderRadius: "14px",
                    p: 2.5,
                  }}
                >
                  <Typography sx={{ mb: 1 }}>
                    <b>Employee Name:</b> {result.employeeName}
                  </Typography>

                  <Typography sx={{ mb: 1 }}>
                    <b>Time In:</b> {result.timeIn}
                  </Typography>

                  <Typography>
                    <b>Attendance Status:</b> {result.status}
                  </Typography>
                </Box>

                <Alert
                  severity={
                    result.status === "On Time"
                      ? "success"
                      : result.status === "Late"
                      ? "warning"
                      : "error"
                  }
                  sx={{
                    mt: 2,
                    borderRadius: "12px",
                  }}
                >
                  {result.message}
                </Alert>
              </Box>
            </>
          )}
        </Stack>
      </Paper>
    </Box>
  );
}

export default AttendanceChecker;