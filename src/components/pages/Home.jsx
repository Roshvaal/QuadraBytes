import {Box, Container, Typography, Paper, Button} from "@mui/material";

import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const activities = [
    {
      number: 1,
      title: "Login Authentication",
      description:
        "Validate a username and password against sample credentials and manage login/logout state.",
      path: "/activity1",
    },
    {
      number: 2,
      title: "Student Grade Evaluation",
      description:
        "Enter a student's score and get an automatic remark based on grade ranges.",
      path: "/activity2",
    },
    {
      number: 3,
      title: "Password Strength Checker",
      description:
        "Check password length and receive live feedback on how strong it is.",
      path: "/activity3",
    },
    {
      number: 4,
      title: "Electricity Bill Calculator",
      description:
        "Calculate a customer's electricity bill based on kWh consumption.",
      path: "/activity4",
    },
    {
      number: 5,
      title: "Employee Attendance Checker",
      description:
        "Check an employee's time-in and determine whether they are on time or late.",
      path: "/activity5",
    },
  ];

  return (
    <Box
      sx={{
        minHeight: "calc(100vh - 72px)",
        backgroundColor: "#f4f7fb",
        py: 8,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            textAlign: "center",
            mb: 7,
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              color: "#1e293b",
              fontSize: {
                xs: "2rem",
                sm: "2.5rem",
                md: "3.2rem",
              },
              mb: 1.5,
            }}
          >
            React Activity Portal
          </Typography>

          <Typography
            sx={{
              color: "text.secondary",
              fontSize: {
                xs: "1rem",
                md: "1.1rem",
              },
              maxWidth: 800,
              mx: "auto",
              lineHeight: 1.6,
            }}
          >
            Five interactive React activities demonstrating state, events,
            conditional logic, validation, and calculations.
          </Typography>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "repeat(2, 1fr)",
              lg: "repeat(3, 1fr)",
            },
            gap: 3,
          }}
        >
          {activities.map((activity) => (
            <Paper
              key={activity.number}
              elevation={0}
              sx={{
                p: 3,
                borderRadius: 4,
                border: "1px solid #dde3ec",
                backgroundColor: "#ffffff",
                display: "flex",
                flexDirection: "column",
                minHeight: 260,
                transition: "all 0.25s ease",

                "&:hover": {
                  transform: "translateY(-6px)",
                  boxShadow: "0 14px 35px rgba(15, 23, 42, 0.10)",
                },
              }}
            >
              <Box
                sx={{
                  width: 44,
                  height: 44,
                  borderRadius: 2.5,
                  backgroundColor: "#e7ebff",
                  color: "primary.main",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 700,
                  fontSize: 18,
                  mb: 2.5,
                }}
              >
                {activity.number}
              </Box>

              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  color: "#17213d",
                  mb: 1,
                }}
              >
                {activity.title}
              </Typography>

              <Typography
                sx={{
                  color: "text.secondary",
                  lineHeight: 1.6,
                  mb: 3,
                  flexGrow: 1,
                }}
              >
                {activity.description}
              </Typography>

              <Button
                variant="contained"
                fullWidth
                onClick={() => navigate(activity.path)}
                sx={{
                  py: 1.25,
                  borderRadius: 2.5,
                  textTransform: "none",
                  fontWeight: 700,
                  fontSize: 16,
                  boxShadow: "none",
                }}
              >
                Open Activity
              </Button>
            </Paper>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default Home;