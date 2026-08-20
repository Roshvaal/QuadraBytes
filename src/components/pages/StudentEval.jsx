import { useState } from "react";
import {Container, Card, CardContent, TextField, Button, Typography, Box,} from "@mui/material";


function App() {
 const [name, setName] = useState("");
 const [score, setScore] = useState("");
 const [result, setResult] = useState(null);


 const evaluateGrade = () => {
   const grade = Number(score);


   if (name === "" || score === "" || grade < 0 || grade > 100) {
     alert("Please enter a valid name and score from 0 to 100.");
     return;
   }


   let remarks = "";
   let color = "";


   if (grade <= 74) {
     remarks = "Failed";
     color = "error";
   } else if (grade <= 79) {
     remarks = "Passed";
     color = "warning";
   } else if (grade <= 84) {
     remarks = "Good";
     color = "info";
   } else if (grade <= 90) {
     remarks = "Very Good";
     color = "success";
   } else {
     remarks = "Excellent";
     color = "success";
   }


   setResult({
     name: name,
     score: grade,
     remarks: remarks,
     color: color,
   });
 };


 const clearFields = () => {
   setName("");
   setScore("");
   setResult(null);
 };


 return (
  
   <Container maxWidth="sm" sx={{ mt: 5 }}>
     <Card sx={{ borderRadius: 5 }}>
      
       <Box
         sx={{
           backgroundColor: "#4f46f7",
           color: "white",
           textAlign: "center",
           padding: 4,
         }}
       >
         <Typography variant="h3">
           Student Grade Evaluation
         </Typography>


         <Typography variant="h6">
           Activity 2
         </Typography>
       </Box>


       <CardContent sx={{ p: 4 }}>
         <Typography variant="h6">
           Student Name
         </Typography>


         <TextField
           fullWidth
           placeholder="Enter student name"
           value={name}
           onChange={(e) => setName(e.target.value)}
           sx={{ mb: 3 }}
         />


         <Typography variant="h6">
           Score
         </Typography>


         <TextField
           fullWidth
           type="number"
           placeholder="Enter score (0-100)"
           value={score}
           onChange={(e) => setScore(e.target.value)}
           sx={{ mb: 3 }}
         />


         <Box sx={{ display: "flex", gap: 2 }}>
           <Button
             fullWidth
             variant="contained"
             onClick={evaluateGrade}
           >
             Evaluate
           </Button>


           <Button
             fullWidth
             variant="outlined"
             onClick={clearFields}
           >
             Clear
           </Button>
         </Box>


        {result && (
 <Box
   sx={{
     mt: 4,
     p: 3,
     borderRadius: 3,
     textAlign: "center",
     backgroundColor: "#ffffff",
     border: "1px solid #ddd",
   }}
 >
   <Typography color="text.secondary">
     Student Name
   </Typography>


   <Typography variant="h6" sx={{ mb: 2 }}>
     {result.name}
   </Typography>


   <Typography color="text.secondary">
     Score
   </Typography>


   <Typography variant="h6" sx={{ mb: 2 }}>
     {result.score}
   </Typography>


   <Typography color="text.secondary">
     Remarks
   </Typography>


   <Typography
     variant="h4"
     sx={{
       mt: 1,
       fontWeight: "bold",
       color: `${result.color}.main`,
     }}
   >
     {result.remarks}
   </Typography>
 </Box>
)}
       </CardContent>
     </Card>
   </Container>
 );
}


export default App;