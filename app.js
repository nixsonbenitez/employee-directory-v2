import express from "express";
import employeeRouter from "./routes/employees"
const app = express();
app.use(express.json()) // This pases the JSON body, and makes it available as a req.body
app.use("/employees", employeeRouter)

app.get("/", (req, res) => {
  res.send("Hello employees!");
});

app.use((err, req, res, next) => {
  console.error(err)
  res.status(500).send("Internal Server Error");
})
// This stays at the bottom so that the top performing pieces of middle ware are fired up when requested.
// this handles the error and express catches that because of the err and next. 
// What this means that there is an err and to fire the err logic next. which is the status 500 

export default app;

