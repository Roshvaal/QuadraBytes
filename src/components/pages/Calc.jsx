import { useState } from "react";
import {
  Alert,
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

function getRate(consumption) {
  if (consumption <= 100) return 10;
  if (consumption <= 200) return 12;
  if (consumption <= 300) return 15;
  return 18;
}

function Calc() {
  const [customerName, setCustomerName] = useState("");
  const [consumption, setConsumption] = useState("");
  const [error, setError] = useState("");
  const [bill, setBill] = useState(null);

  const handleCalculate = () => {
    const trimmedName = customerName.trim();
    const numericConsumption = Number(consumption);

    if (!trimmedName) {
      setError("Please enter a customer name.");
      setBill(null);
      return;
    }

    if (consumption === "") {
      setError("Please enter electricity consumption.");
      setBill(null);
      return;
    }

    if (Number.isNaN(numericConsumption) || numericConsumption < 0) {
      setError("Please enter a valid consumption value.");
      setBill(null);
      return;
    }

    const rate = getRate(numericConsumption);
    const total = numericConsumption * rate;
    const isHighUsage = total >= 5000;

    setError("");
    setBill({
      name: trimmedName,
      consumption: numericConsumption,
      rate,
      total,
      label: isHighUsage
        ? "High Electricity Usage"
        : "Normal Electricity Usage",
      tone: isHighUsage ? "error" : "success",
      background: isHighUsage ? "#fff3f3" : "#eef5ff",
      border: isHighUsage ? "#ffd8d8" : "#d5e5ff",
    });
  };

  const handleClear = () => {
    setCustomerName("");
    setConsumption("");
    setError("");
    setBill(null);
  };

  return (
    <Box
      sx={{
        minHeight: "calc(100vh - 72px)",
        background:
          "linear-gradient(180deg, #f8fbff 0%, #eef4fb 52%, #f8fbff 100%)",
        py: { xs: 4, md: 6 },
      }}
    >
      <Container maxWidth="lg">
        <Paper
          elevation={0}
          sx={{
            width: "100%",
            maxWidth: 860,
            mx: "auto",
            overflow: "hidden",
            borderRadius: 3,
            border: "1px solid #dbe6ef",
            backgroundColor: "rgba(255, 255, 255, 0.98)",
            boxShadow: "0 18px 42px rgba(30, 41, 59, 0.09)",
          }}
        >
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "0.9fr 1.1fr" },
              minHeight: 460,
            }}
          >
            <Box
              sx={{
                p: { xs: 3, md: 4 },
                background:
                  "linear-gradient(160deg, #4f46f7 0%, #2563eb 100%)",
                color: "white",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: 4,
              }}
            >
              <Box>
                <Box
                  sx={{
                    width: 54,
                    height: 54,
                    borderRadius: "50%",
                    backgroundColor: "rgba(255, 255, 255, 0.18)",
                    border: "1px solid rgba(255, 255, 255, 0.28)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 800,
                    fontSize: 24,
                    mb: 3,
                  }}
                >
                  4
                </Box>

                <Typography
                  sx={{
                    fontWeight: 800,
                    letterSpacing: 2,
                    fontSize: 13,
                    mb: 1.2,
                    opacity: 0.92,
                  }}
                >
                  ACTIVITY 4
                </Typography>

                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 800,
                    fontSize: { xs: "2rem", md: "2.4rem" },
                    lineHeight: 1.12,
                    letterSpacing: 0,
                  }}
                >
                  Electricity Bill Calculator
                </Typography>

                <Typography
                  sx={{
                    mt: 2,
                    color: "rgba(255, 255, 255, 0.82)",
                    lineHeight: 1.7,
                    fontSize: 15,
                  }}
                >
                  Enter the customer details, calculate the bill, and check if
                  the usage is normal or high.
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "grid",
                  gap: 1.2,
                  p: 2,
                  borderRadius: 2,
                  backgroundColor: "rgba(255, 255, 255, 0.12)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                }}
              >
                <Typography sx={{ fontSize: 13, opacity: 0.82 }}>
                  Rates: 10, 12, 15, then 18 PHP/kWh
                </Typography>
                <Typography sx={{ fontSize: 13, opacity: 0.82 }}>
                  High usage starts at PHP 5,000 total bill
                </Typography>
              </Box>
            </Box>

            <Box sx={{ p: { xs: 3, md: 4 }, backgroundColor: "#ffffff" }}>
              <Typography
                sx={{
                  color: "#2563eb",
                  fontWeight: 800,
                  letterSpacing: 2,
                  fontSize: 12,
                  mb: 3,
                }}
              >
                BILL DETAILS
              </Typography>

              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
                  gap: 2,
                }}
              >
                <Box>
                  <Typography
                    sx={{ fontWeight: 600, mb: 0.8, color: "#26364d" }}
                  >
                    Customer Name
                  </Typography>
                  <TextField
                    fullWidth
                    size="small"
                    placeholder="Enter customer name"
                    value={customerName}
                    onChange={(e) => {
                      setCustomerName(e.target.value);
                      setError("");
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: 2,
                        backgroundColor: "#f8fbff",
                        transition:
                          "box-shadow 0.2s ease, background-color 0.2s ease",
                        "& fieldset": {
                          borderColor: "#d5dfec",
                        },
                        "&:hover fieldset": {
                          borderColor: "#8fb2ff",
                        },
                        "&.Mui-focused": {
                          backgroundColor: "#ffffff",
                          boxShadow: "0 0 0 4px rgba(37, 99, 235, 0.1)",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "#2563eb",
                        },
                      },
                    }}
                  />
                </Box>

                <Box>
                  <Typography
                    sx={{ fontWeight: 600, mb: 0.8, color: "#26364d" }}
                  >
                    Consumption (kWh)
                  </Typography>
                  <TextField
                    fullWidth
                    size="small"
                    type="number"
                    placeholder="Enter kWh"
                    value={consumption}
                    onChange={(e) => {
                      setConsumption(e.target.value);
                      setError("");
                    }}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        handleCalculate();
                      }
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: 2,
                        backgroundColor: "#f8fbff",
                        transition:
                          "box-shadow 0.2s ease, background-color 0.2s ease",
                        "& fieldset": {
                          borderColor: "#d5dfec",
                        },
                        "&:hover fieldset": {
                          borderColor: "#8fb2ff",
                        },
                        "&.Mui-focused": {
                          backgroundColor: "#ffffff",
                          boxShadow: "0 0 0 4px rgba(37, 99, 235, 0.1)",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "#2563eb",
                        },
                      },
                    }}
                    inputProps={{ min: 0 }}
                  />
                </Box>
              </Box>

              {error && (
                <Alert severity="error" sx={{ mt: 2, borderRadius: 2 }}>
                  {error}
                </Alert>
              )}

              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 1.5,
                  mt: 2.5,
                }}
              >
                <Button
                  variant="contained"
                  onClick={handleCalculate}
                  sx={{
                    py: 1.15,
                    borderRadius: 2,
                    textTransform: "none",
                    fontWeight: 700,
                    fontSize: 15,
                    backgroundColor: "#4f46f7",
                    boxShadow: "none",
                    transition: "transform 0.18s ease, box-shadow 0.18s ease",
                    "&:hover": {
                      backgroundColor: "#4338ca",
                      boxShadow: "0 10px 22px rgba(79, 70, 247, 0.22)",
                      transform: "translateY(-1px)",
                    },
                  }}
                >
                  Calculate Bill
                </Button>

                <Button
                  variant="outlined"
                  onClick={handleClear}
                  sx={{
                    py: 1.15,
                    borderRadius: 2,
                    textTransform: "none",
                    fontWeight: 700,
                    fontSize: 15,
                    borderColor: "#d5dfec",
                    color: "#26364d",
                    backgroundColor: "#f8fbff",
                    transition:
                      "background-color 0.18s ease, border-color 0.18s ease",
                    "&:hover": {
                      borderColor: "#8fb2ff",
                      backgroundColor: "#eef4ff",
                    },
                  }}
                >
                  Clear
                </Button>
              </Box>

              <Box
                sx={{
                  mt: 3,
                  borderRadius: 2.5,
                  overflow: "hidden",
                  border: "1px solid #dbe6ef",
                  boxShadow: "0 10px 24px rgba(30, 41, 59, 0.06)",
                }}
              >
                {bill ? (
                  <>
                    <Box sx={{ p: 2.5, backgroundColor: "#fbfdff" }}>
                      <Box
                        sx={{
                          display: "grid",
                          gridTemplateColumns: "1fr auto",
                          rowGap: 1.5,
                          columnGap: 2,
                        }}
                      >
                        <Typography sx={{ color: "#5d6b82" }}>
                          Customer Name
                        </Typography>
                        <Typography sx={{ fontWeight: 700, color: "#17213d" }}>
                          {bill.name}
                        </Typography>

                        <Typography sx={{ color: "#5d6b82" }}>
                          Consumption
                        </Typography>
                        <Typography sx={{ fontWeight: 700, color: "#17213d" }}>
                          {bill.consumption} kWh
                        </Typography>

                        <Typography sx={{ color: "#5d6b82" }}>Rate</Typography>
                        <Typography sx={{ fontWeight: 700, color: "#17213d" }}>
                          PHP {bill.rate} / kWh
                        </Typography>

                        <Typography sx={{ color: "#5d6b82" }}>
                          Total Bill
                        </Typography>
                        <Typography
                          sx={{
                            fontWeight: 800,
                            color: "primary.main",
                            fontSize: 20,
                          }}
                        >
                          PHP{" "}
                          {bill.total.toLocaleString("en-PH", {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })}
                        </Typography>
                      </Box>
                    </Box>

                    <Box
                      sx={{
                        px: 2.5,
                        py: 2,
                        textAlign: "center",
                        backgroundColor: bill.background,
                        borderTop: `1px solid ${bill.border}`,
                      }}
                    >
                      <Typography
                        sx={{
                          fontWeight: 700,
                          color:
                            bill.tone === "error"
                              ? "error.main"
                              : "success.main",
                        }}
                      >
                        {bill.label}
                      </Typography>
                    </Box>
                  </>
                ) : (
                  <Box
                    sx={{
                      p: 3,
                      minHeight: 150,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      textAlign: "center",
                      backgroundColor: "#fbfdff",
                    }}
                  >
                    <Typography sx={{ color: "#64748b", lineHeight: 1.7 }}>
                      Your bill summary will appear here after calculation.
                    </Typography>
                  </Box>
                )}
              </Box>
            </Box>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}

export default Calc;
