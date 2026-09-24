### Objective
Learn how to receive data using req.body, read existing data from a file, add new data to it, and write the
updated data back to the file

```Requirements
1. Create students.json. At the start it must contain only an empty array []. Run the server on port 5000.
2. POST /students must receive name, course and email from the request body. You must use
express.json().
3. Read existing students using fs.readFile() and JSON.parse(), add the new student with a unique
numeric id, then save using JSON.stringify() and fs.writeFile().
4. Return status 201 with the saved student.
5. If name, course or email is missing, return status 400 and do not save anything.
6. GET /students must read students.json and return all saved students with a count.
```

Required Endpoints
```
Method Endpoint What it must do
POST /students Validate the body, add the student to students.json, return it.
GET /students Return all students from students.json with a count.
```
Sample Request
```
POST http://localhost:5000/students (Body → JSON)
{ "name": "Amit", "course": "MCA", "email": "amit@gmail.com" }
```
Expected Response
```
201 Created
{ "success": true, "message": "Student added successfully",
"data": { "id": 1, "name": "Amit", "course": "MCA", "email": "amit@gmail.com" } }
400 Bad Request (a field is missing)
{ "success": false, "message": "name, course and email are required" }
```
