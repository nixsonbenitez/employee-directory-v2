import express from "express"
import employees from "#db/employees"
const router = express.Router()



router.get("/", (req, res) => {
    res.send(employees)
})

router.get("/random", (req, res) => {
    const randomIndex = Math.floor(Math.random() * employees.length);
    res.send(employees[randomIndex])
})

router.get("/:id", (req, res) => {
    const {id} = req.params;
    
    const employee = employees.find((e) => e.id === +id)
    if(!employee){
        return res.status(404).send("Employee not found");
    }
    res.send(employee)
})


router.post ("/", (req, res) => {
    const {name} = req.body ||{} // if req.body is undefined use || an empty {} object instead so express does not crash

    if(!name){
        return res.status(400).send("Name is missing"); // incase a name is missing it sends a 400 status and message to the user with the.send
    } 
    const newEmployee = {
         id: employees.length + 1,
         name // since the property name and variable name is the same, i can remove the colon and leave it once.
        }
    
    employees.push(newEmployee) // this sends the new employee to the employees array
    res.status(201).send(newEmployee) // this provides the message to make sure what was pushed in is successful

})


export default router